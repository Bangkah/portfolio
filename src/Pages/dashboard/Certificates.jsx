import { useEffect, useState } from 'react'
import { supabase } from "../../supabase";
import { Award, Upload, Trash2, ImageIcon, Plus } from 'lucide-react'

const Card = ({ children, className = '' }) => (
  <div className={`relative bg-white border-3 border-[#111111] shadow-[6px_6px_0px_#111111] rounded-sm p-5 ${className}`}>
    {children}
  </div>
)

const SkeletonCard = () => (
  <div className="bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] p-3 rounded-sm">
    <div className="w-full aspect-[16/11.5] bg-[#f4f0e6] animate-pulse border-2 border-[#111111]" />
  </div>
)

const CertCard = ({ cert, onDelete }) => {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <div className="relative group bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] p-3 rounded-sm">
      <div className="relative overflow-hidden border-2 border-[#111111]">
        {/* Skeleton shown until image loads */}
        {!imgLoaded && (
          <div className="w-full aspect-[16/11.5] bg-[#f4f0e6] animate-pulse" />
        )}
        <img
          src={cert.Img}
          alt="Certificate"
          onLoad={() => setImgLoaded(true)}
          className={`w-full aspect-[16/11.5] object-cover ${imgLoaded ? 'block' : 'hidden'}`}
        />
        {imgLoaded && (
          <div className="absolute inset-0 bg-[#111111]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-3">
            <button
              onClick={() => onDelete(cert.id)}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#ff5c58] text-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-black uppercase text-xs hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              <Trash2 className="w-4 h-4 stroke-[2.5]" /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Certificates() {
  const [certs, setCerts] = useState([])
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchCerts = async () => {
    setLoading(true)

    if (!supabase) {
      setCerts([])
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase.from('certificates').select('*').order('created_at', { ascending: false })
      if (error) {
        console.error('Certificate fetch error:', error)
        setCerts([])
        setLoading(false)
        return
      }

      setCerts(data || [])
    } catch (error) {
      console.error('Unexpected error fetching certificates:', error)
      setCerts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchCerts() }, [])

  const handleFile = (f) => {
    if (!f) return
    setFile(f)
    setPreview(URL.createObjectURL(f))
  }

  const uploadImage = async () => {
    if (!file) return
    if (!supabase) {
      alert('Supabase belum dikonfigurasi. Dashboard admin tidak dapat mengunggah sertifikat.')
      return
    }

    setUploading(true)
    const fileName = `cert-${Date.now()}-${file.name}`
    try {
      const { error: uploadError } = await supabase.storage.from('certificate-images').upload(fileName, file)
      if (uploadError) {
        console.error('Storage upload error:', uploadError)
        alert(uploadError.message || 'Upload sertifikat gagal.')
        setUploading(false)
        return
      }

      const { data } = supabase.storage.from('certificate-images').getPublicUrl(fileName)
      const { error: insertError } = await supabase.from('certificates').insert({ img: data.publicUrl })
      if (insertError) {
        console.error('Insert certificate error:', insertError)
        alert(insertError.message || 'Gagal menyimpan sertifikat.')
        setUploading(false)
        return
      }
    } catch (err) {
      console.error('Unexpected error during uploadImage:', err)
      alert(err.message || 'Upload sertifikat gagal.')
      setUploading(false)
      return
    }

    setFile(null); setPreview(null); setUploading(false)
    fetchCerts()
  }

  const deleteCert = async (id) => {
    if (!supabase) {
      alert('Supabase belum dikonfigurasi. Dashboard admin tidak dapat menghapus data.')
      return
    }

    if (!confirm('Delete this certificate?')) return
    const { error } = await supabase.from('certificates').delete().eq('id', id)
    if (error) {
      console.error('Delete certificate error:', error)
      alert(error.message || 'Gagal menghapus sertifikat.')
      return
    }
    fetchCerts()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] p-4 rounded-sm">
        <div className="w-10 h-10 bg-[#4fc3f7] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] flex items-center justify-center shrink-0">
          <Award className="w-5 h-5 text-[#111111] stroke-[2.5]" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-black uppercase text-[#111111]">Certificates</h1>
          <p className="text-[#111111]/70 font-bold text-xs uppercase">
            {loading ? 'Loading...' : `${certs.length} certificates total`}
          </p>
        </div>
      </div>

      {/* Upload Card */}
      <Card>
        <div className="space-y-4">
          <h2 className="text-sm font-black uppercase text-[#111111] flex items-center gap-2">
            <Plus className="w-4 h-4 stroke-[3] text-[#111111]" /> Upload Certificate
          </h2>

          <label
            onDragOver={e => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={e => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]) }}
            className={`flex flex-col items-center justify-center w-full min-h-[160px] rounded-sm border-3 border-dashed cursor-pointer transition-all ${
              dragOver ? 'border-[#111111] bg-[#ffcf33]/20' : 'border-[#111111] bg-[#f4f0e6] hover:bg-[#ffcf33]/10'
            }`}
          >
            {preview ? (
              <img src={preview} alt="preview" className="max-h-40 object-contain p-2 border-2 border-[#111111] bg-white my-2" />
            ) : (
              <div className="text-center space-y-2 p-6">
                <div className="w-11 h-11 rounded-sm bg-[#ffcf33] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] flex items-center justify-center mx-auto">
                  <ImageIcon className="w-5 h-5 text-[#111111] stroke-[2.5]" />
                </div>
                <p className="text-xs font-black uppercase text-[#111111]">Drag & drop or click to upload</p>
                <p className="text-[10px] font-bold text-[#111111]/60 uppercase">PNG, JPG, WEBP supported</p>
              </div>
            )}
            <input type="file" accept="image/*" onChange={e => handleFile(e.target.files[0])} className="hidden" />
          </label>

          {file && (
            <div className="flex items-center justify-between gap-3 flex-wrap pt-2">
              <p className="text-xs font-bold text-[#111111] truncate flex-1 bg-[#f4f0e6] p-2 border border-[#111111]">{file.name}</p>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => { setFile(null); setPreview(null) }}
                  className="px-3 py-2 bg-white text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] font-black uppercase text-xs cursor-pointer">
                  Clear
                </button>
                <button onClick={uploadImage} disabled={uploading} className="px-4 py-2 bg-[#ffcf33] text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] font-black uppercase text-xs flex items-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer">
                  {uploading ? <div className="w-3.5 h-3.5 border-2 border-[#111111] border-t-transparent rounded-full animate-spin" /> : <Upload className="w-3.5 h-3.5 stroke-[2.5]" />}
                  <span>{uploading ? 'Uploading...' : 'Upload'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : certs.length === 0 ? (
        <Card>
          <div className="p-12 text-center">
            <Award className="w-10 h-10 text-[#111111] stroke-[2] mx-auto mb-3" />
            <p className="text-[#111111] font-black uppercase text-xs">No certificates yet.</p>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          {certs.map(cert => (
            <CertCard key={cert.id} cert={cert} onDelete={deleteCert} />
          ))}
        </div>
      )}
    </div>
  )
}