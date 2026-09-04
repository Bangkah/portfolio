import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import {
  Plus,
  Trash2,
  Upload,
  FolderGit2,
  X,
  ImageIcon,
  ExternalLink,
  Github,
  Pencil,
} from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div className={`relative bg-white border-3 border-[#111111] shadow-[6px_6px_0px_#111111] rounded-sm p-4 h-full ${className}`}>
    {children}
  </div>
);

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) => (
  <div className="space-y-1.5">
    <label className="text-xs font-black uppercase text-[#111111] tracking-wider">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full bg-white border-3 border-[#111111] shadow-[3px_3px_0px_#111111] px-4 py-2.5 text-[#111111] placeholder-[#111111]/40 font-semibold text-sm outline-none focus:bg-[#fffde7] transition-all rounded-xs"
    />
  </div>
);

const SkeletonCard = () => (
  <div className="bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] p-4 flex flex-col gap-3 rounded-sm">
    <div className="w-full aspect-[16/8] bg-[#f4f0e6] animate-pulse border-2 border-[#111111]" />
    <div className="h-4 bg-[#f4f0e6] animate-pulse rounded-xs w-2/3" />
    <div className="h-3 bg-[#f4f0e6] animate-pulse rounded-xs w-full" />
    <div className="h-3 bg-[#f4f0e6] animate-pulse rounded-xs w-4/5" />
    <div className="flex gap-1.5 mt-1">
      <div className="h-5 w-16 bg-[#f4f0e6] animate-pulse border border-[#111111]" />
      <div className="h-5 w-12 bg-[#f4f0e6] animate-pulse border border-[#111111]" />
    </div>
    <div className="flex justify-between items-center pt-2 border-t-2 border-[#111111] mt-auto">
      <div className="flex gap-2">
        <div className="w-7 h-7 bg-[#f4f0e6] animate-pulse border border-[#111111]" />
        <div className="w-7 h-7 bg-[#f4f0e6] animate-pulse border border-[#111111]" />
      </div>
      <div className="flex gap-2">
        <div className="w-14 h-7 bg-[#f4f0e6] animate-pulse border border-[#111111]" />
        <div className="w-16 h-7 bg-[#f4f0e6] animate-pulse border border-[#111111]" />
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project, onDelete, onEdit }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Card>
      <div className="flex flex-col h-full">
        {project.Img && (
          <div className="w-full aspect-[16/8] rounded-xs mb-4 border-2 border-[#111111] overflow-hidden bg-[#f4f0e6]">
            {!imgLoaded && (
              <div className="w-full h-full animate-pulse bg-[#f4f0e6]" />
            )}
            <img
              src={project.Img}
              alt={project.Title}
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0 absolute"}`}
            />
          </div>
        )}
        <h3 className="font-black uppercase text-[#111111] text-sm mb-1">
          {project.Title}
        </h3>
        {project.Description && (
          <p className="text-[#111111]/80 font-semibold text-xs mb-3 line-clamp-2 leading-relaxed">
            {project.Description}
          </p>
        )}
        {project.TechStack?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.TechStack.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 bg-[#ffcf33] border border-[#111111] text-[#111111] text-[10px] font-black uppercase"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto flex items-center justify-between gap-2 pt-2 border-t-2 border-[#111111]">
          <div className="flex gap-2">
            {project.Link && (
              <a
                href={project.Link}
                target="_blank"
                rel="noopener noreferrer"
                title="Live URL"
                className="p-1.5 bg-white border-2 border-[#111111] shadow-[2px_2px_0px_#111111] text-[#111111] hover:bg-[#ffcf33] transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            )}
            {project.Github && (
              <a
                href={project.Github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-1.5 bg-white border-2 border-[#111111] shadow-[2px_2px_0px_#111111] text-[#111111] hover:bg-[#ffcf33] transition-all"
              >
                <Github className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(project)}
              className="flex items-center gap-1 px-3 py-1.5 bg-[#4fc3f7] text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] font-black uppercase text-xs hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              <Pencil className="w-3 h-3 stroke-[2.5]" /> Edit
            </button>
            <button
              onClick={() => onDelete(project.id)}
              className="flex items-center gap-1 px-3 py-1.5 bg-[#ff5c58] text-white border-2 border-[#111111] shadow-[2px_2px_0px_#111111] font-black uppercase text-xs hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              <Trash2 className="w-3 h-3 stroke-[2.5]" /> Delete
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Modal = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
    <div
      className="absolute inset-0 bg-[#111111]/70 backdrop-blur-xs"
      onClick={onClose}
    />
    <div
      className="relative z-10 w-full max-w-2xl flex flex-col"
      style={{ maxHeight: "calc(100vh - 24px)" }}
    >
      <div className="relative bg-[#f4f0e6] border-4 border-[#111111] shadow-[8px_8px_0px_#111111] flex flex-col overflow-hidden rounded-sm">
        {/* Fixed header */}
        <div className="flex items-center justify-between px-5 py-4 border-b-3 border-[#111111] bg-white shrink-0">
          <h2 className="text-base font-black uppercase text-[#111111]">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1 bg-[#ff5c58] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] text-white cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>
        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  </div>
);

const ProjectForm = ({
  initial,
  onSubmit,
  onCancel,
  submitLabel = "Save Project",
  uploading,
}) => {
  const [form, setForm] = useState({
    Title: initial?.Title || "",
    Description: initial?.Description || "",
    TechStack: Array.isArray(initial?.TechStack)
      ? initial.TechStack.join(", ")
      : initial?.TechStack || "",
    Features: Array.isArray(initial?.Features)
      ? initial.Features.join(", ")
      : initial?.Features || "",
    Link: initial?.Link || "",
    Github: initial?.Github || "",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(initial?.Img || null);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form, file);
      }}
      className="p-5 sm:p-6 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <InputField
            label="Project Title"
            value={form.Title}
            onChange={set("Title")}
            placeholder="e.g. My Portfolio Website"
            required
          />
        </div>

        <div className="sm:col-span-2 space-y-1.5">
          <label className="text-xs font-black uppercase text-[#111111] tracking-wider">
            Description
          </label>
          <textarea
            value={form.Description}
            onChange={set("Description")}
            placeholder="Describe what this project does, its purpose, and impact..."
            rows={3}
            className="w-full bg-white border-3 border-[#111111] shadow-[3px_3px_0px_#111111] px-4 py-2.5 text-[#111111] placeholder-[#111111]/40 font-semibold text-sm outline-none focus:bg-[#fffde7] transition-all resize-none rounded-xs"
          />
        </div>

        <InputField
          label="Tech Stack (comma separated)"
          value={form.TechStack}
          onChange={set("TechStack")}
          placeholder="e.g. React, Tailwind, Supabase"
        />
        <InputField
          label="Key Features (comma separated)"
          value={form.Features}
          onChange={set("Features")}
          placeholder="e.g. Auth, Dark mode, REST API"
        />
        <InputField
          label="Live URL"
          value={form.Link}
          onChange={set("Link")}
          placeholder="https://yourproject.com"
        />
        <InputField
          label="GitHub URL"
          value={form.Github}
          onChange={set("Github")}
          placeholder="https://github.com/username/repo"
        />

        <div className="sm:col-span-2 space-y-1.5">
          <label className="text-xs font-black uppercase text-[#111111] tracking-wider">
            Project Image
          </label>
          <label className="flex items-center gap-4 w-full bg-white border-3 border-dashed border-[#111111] px-4 py-4 cursor-pointer hover:bg-[#ffcf33]/10 transition-all rounded-xs">
            {preview ? (
              <img
                src={preview}
                className="h-16 w-24 object-cover border-2 border-[#111111]"
                alt="preview"
              />
            ) : (
              <div className="w-24 h-16 rounded-xs bg-[#ffcf33] flex items-center justify-center border-2 border-[#111111] shadow-[2px_2px_0px_#111111]">
                <ImageIcon className="w-5 h-5 text-[#111111] stroke-[2.5]" />
              </div>
            )}
            <div>
              <p className="text-xs font-black uppercase text-[#111111]">
                {preview ? "Change image" : "Click to upload image"}
              </p>
              <p className="text-[10px] font-bold uppercase text-[#111111]/60 mt-0.5">
                PNG, JPG, WEBP supported
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-white text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] font-black uppercase text-xs cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={uploading}
          className="px-5 py-2 bg-[#ffcf33] text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] font-black uppercase text-xs flex items-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
        >
          {uploading ? (
            <div className="w-4 h-4 border-2 border-[#111111] border-t-transparent rounded-full animate-spin" />
          ) : (
            <Upload className="w-4 h-4 stroke-[2.5]" />
          )}
          <span>{uploading ? "Saving..." : submitLabel}</span>
        </button>
      </div>
    </form>
  );
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [editProject, setEditProject] = useState(null);
  const [uploading, setUploading] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);

    if (!supabase) {
      setProjects([]);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error);
        setProjects([]);
        setLoading(false);
        return;
      }

      const normalized = (data || []).map((r) => ({
        id: r.id,
        Title: r.title || r.Title,
        Description: r.description || r.Description,
        Img: r.img || r.Img || null,
        TechStack: r.tech_stack || r.TechStack || [],
        Features: r.features || r.Features || [],
        Link: r.link || r.Link || "",
        Github: r.github || r.Github || "",
        created_at: r.created_at,
      }));

      setProjects(normalized);
      setLoading(false);
    } catch (error) {
      console.error('Unexpected error fetching projects:', error);
      setProjects([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const uploadImage = async (f) => {
    if (!supabase) {
      throw new Error('Supabase is not configured.')
    }

    const fileName = `${Date.now()}-${f.name}`;
    const { error: uploadError } = await supabase.storage.from("project-images").upload(fileName, f);
    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage
      .from("project-images")
      .getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleCreate = async (form, file) => {
    if (!supabase) {
      alert('Supabase belum dikonfigurasi. Dashboard admin tidak dapat menyimpan data.')
      return
    }

    setUploading(true);
    let imgUrl = "";

    try {
      if (file) imgUrl = await uploadImage(file);

      const payload = {
        title: form.Title,
        description: form.Description,
        img: imgUrl,
        tech_stack: form.TechStack.split(",").map((s) => s.trim()).filter(Boolean),
        features: form.Features.split(",").map((s) => s.trim()).filter(Boolean),
        link: form.Link,
        github: form.Github,
      };

      const { error: insertError } = await supabase.from("projects").insert(payload);
      if (insertError) {
        console.error('Error inserting project:', insertError);
        alert(insertError.message || 'Gagal menyimpan project.');
      }
    } catch (err) {
      console.error('Unexpected error inserting project:', err);
      alert(err.message || 'Gagal upload atau menyimpan project.');
    }

    setShowCreate(false);
    setUploading(false);
    fetchProjects();
  };

  const handleEdit = async (form, file) => {
    if (!supabase) {
      alert('Supabase belum dikonfigurasi. Dashboard admin tidak dapat memperbarui data.')
      return
    }

    setUploading(true);
    let imgUrl = editProject?.Img || "";

    try {
      if (file) imgUrl = await uploadImage(file);

      const payload = {
        title: form.Title,
        description: form.Description,
        img: imgUrl,
        tech_stack: form.TechStack.split(",").map((s) => s.trim()).filter(Boolean),
        features: form.Features.split(",").map((s) => s.trim()).filter(Boolean),
        link: form.Link,
        github: form.Github,
      };

      const { error: updateError } = await supabase.from('projects').update(payload).eq('id', editProject.id);
      if (updateError) {
        console.error('Error updating project:', updateError);
        alert(updateError.message || 'Gagal memperbarui project.');
      }
    } catch (err) {
      console.error('Unexpected error updating project:', err);
      alert(err.message || 'Gagal update project.');
    }

    setEditProject(null);
    setUploading(false);
    fetchProjects();
  };

  const deleteProject = async (id) => {
    if (!supabase) {
      alert('Supabase belum dikonfigurasi. Dashboard admin tidak dapat menghapus data.')
      return
    }

    if (!confirm("Delete this project?")) return;
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) {
      console.error('Delete project error:', error);
      alert(error.message || 'Gagal menghapus project.');
      return;
    }
    fetchProjects();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] p-4 rounded-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#ffcf33] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] flex items-center justify-center shrink-0">
            <FolderGit2 className="w-5 h-5 text-[#111111] stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-black uppercase text-[#111111]">
              Projects
            </h1>
            <p className="text-[#111111]/70 font-bold text-xs uppercase">
              {loading ? "Loading..." : `${projects.length} projects total`}
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#ffcf33] text-[#111111] border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-black uppercase text-xs hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>New Project</span>
        </button>
      </div>

      {/* Create Modal */}
      {showCreate && (
        <Modal title="Add New Project" onClose={() => setShowCreate(false)}>
          <ProjectForm
            onSubmit={handleCreate}
            onCancel={() => setShowCreate(false)}
            submitLabel="Save Project"
            uploading={uploading}
          />
        </Modal>
      )}

      {/* Edit Modal */}
      {editProject && (
        <Modal title="Edit Project" onClose={() => setEditProject(null)}>
          <ProjectForm
            initial={editProject}
            onSubmit={handleEdit}
            onCancel={() => setEditProject(null)}
            submitLabel="Update Project"
            uploading={uploading}
          />
        </Modal>
      )}

      {/* Projects Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <Card>
          <div className="p-12 text-center">
            <FolderGit2 className="w-10 h-10 text-[#111111] stroke-[2] mx-auto mb-3" />
            <p className="text-[#111111] font-black uppercase text-xs">
              No projects yet. Create your first one!
            </p>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={deleteProject}
              onEdit={setEditProject}
            />
          ))}
        </div>
      )}
    </div>
  );
}