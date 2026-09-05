import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { MessageCircle, UserCircle2, Loader2, AlertCircle, Send, ImagePlus, X, Pin } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";


const Comment = memo(({ comment, formatDate, index, isPinned = false }) => (
    <div 
        className={`p-4 rounded-xl border-2 border-black transition-all group ${
            isPinned 
                ? 'bg-[#FFDE59]' 
                : 'bg-white hover:bg-gray-50'
        }`}
    >
        {isPinned && (
            <div className="flex items-center gap-2 mb-3 text-black font-bold border-b border-black pb-2">
                <Pin className="w-4 h-4 fill-black" />
                <span className="text-xs uppercase tracking-wider">Pinned Comment</span>
            </div>
        )}
        <div className="flex items-start gap-3">
            {comment.profile_image ? (
                <img
                    src={comment.profile_image}
                    alt={`${comment.user_name}'s profile`}
                    className="w-10 h-10 rounded-full object-cover border-2 border-black flex-shrink-0"
                    loading="lazy"
                />
            ) : (
                <div className="p-2 rounded-full bg-[#FFDE59] border-2 border-black text-black flex-shrink-0">
                    <UserCircle2 className="w-5 h-5" />
                </div>
            )}
            <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between gap-4 mb-1">
                    <div className="flex items-center gap-2">
                        <h4 className="font-bold text-black truncate text-sm">
                            {comment.user_name}
                        </h4>
                        {isPinned && (
                            <span className="px-2 py-0.5 text-xs font-bold bg-black text-white rounded">
                                ADMIN
                            </span>
                        )}
                    </div>
                    <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">
                        {formatDate(comment.created_at)}
                    </span>
                </div>
                <p className="text-black text-sm font-normal break-words leading-relaxed mt-1">
                    {comment.content}
                </p>
            </div>
        </div>
    </div>
));

const CommentForm = memo(({ onSubmit, isSubmitting, error }) => {
    const [newComment, setNewComment] = useState('');
    const [userName, setUserName] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const textareaRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleImageChange = useCallback((e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('File size must be less than 5MB. Please choose a smaller image.');
                if (e.target) e.target.value = '';
                return;
            }
            
            if (!file.type.startsWith('image/')) {
                alert('Please select a valid image file.');
                if (e.target) e.target.value = '';
                return;
            }
            
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    }, []);

    const handleTextareaChange = useCallback((e) => {
        setNewComment(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (!newComment.trim() || !userName.trim()) return;
        
        onSubmit({ newComment, userName, imageFile });
        setNewComment('');
        setUserName('');
        setImagePreview(null);
        setImageFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        if (textareaRef.current) textareaRef.current.style.height = 'auto';
    }, [newComment, userName, imageFile, onSubmit]);

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1" data-aos="fade-up" data-aos-duration="1000">
                <label className="block text-sm font-bold text-black uppercase tracking-wide">
                    Nama <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    maxLength={15}
                    placeholder="Masukkan nama Anda..."
                    className="w-full p-3 rounded-xl bg-white border-3 border-black text-black font-medium placeholder-gray-500 shadow-[4px_4px_0px_0px_#000] focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000] transition-all"
                    required
                />
            </div>

            <div className="space-y-1" data-aos="fade-up" data-aos-duration="1200">
                <label className="block text-sm font-bold text-black uppercase tracking-wide">
                    Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                    ref={textareaRef}
                    value={newComment}
                    maxLength={200}
                    onChange={handleTextareaChange}
                    placeholder="Masukkan pesan Anda..."
                    className="w-full p-3 rounded-xl bg-white border-3 border-black text-black font-medium placeholder-gray-500 shadow-[4px_4px_0px_0px_#000] focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000] transition-all resize-none min-h-[100px]"
                    required
                />
            </div>

            <div className="space-y-1" data-aos="fade-up" data-aos-duration="1400">
                <label className="block text-sm font-bold text-black uppercase tracking-wide">
                    Foto Profil <span className="text-gray-600 font-normal normal-case">(opsional)</span>
                </label>
                {imagePreview ? (
                    <div className="flex items-center justify-between gap-4 p-3 bg-white border-2 border-black rounded-xl">
                        <img
                            src={imagePreview}
                            alt="Profile preview"
                            className="w-12 h-12 rounded-full object-cover border-2 border-black"
                        />
                        <button
                            type="button"
                            onClick={() => {
                                setImagePreview(null);
                                setImageFile(null);
                                if (fileInputRef.current) fileInputRef.current.value = '';
                            }}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF6B6B] border-2 border-black font-bold text-black text-xs shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] transition-all"
                        >
                            <X className="w-4 h-4 stroke-[3]" />
                            <span>Hapus</span>
                        </button>
                    </div>
                ) : (
                    <div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                        />
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#4D96FF] border-3 border-black font-bold text-black text-sm shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
                        >
                            <ImagePlus className="w-5 h-5 stroke-[2.5]" />
                            <span>Pilih Foto Profil</span>
                        </button>
                        <p className="text-center text-gray-600 text-xs mt-1.5 font-medium">
                            Maksimal ukuran file: 5MB
                        </p>
                    </div>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                data-aos="fade-up" data-aos-duration="1000"
                className="w-full h-12 bg-[#FF6B6B] border-3 border-black rounded-xl font-bold text-black uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin stroke-[3]" />
                        <span>Mengirim...</span>
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5 stroke-[2.5]" />
                        <span>Kirim Komentar</span>
                    </>
                )}
            </button>
        </form>
    );
});

const Komentar = () => {
    const [comments, setComments] = useState([]);
    const [pinnedComment, setPinnedComment] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        AOS.init({
            once: false,
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        let storedComments = [];
        try {
            storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
        } catch {
            storedComments = [];
        }
        setPinnedComment(storedComments.find((comment) => comment.is_pinned) || null);
        setComments(storedComments.filter((comment) => !comment.is_pinned));
    }, []);

    const readImage = useCallback((imageFile) => new Promise((resolve, reject) => {
        if (!imageFile) {
            resolve(null);
            return;
        }
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(imageFile);
    }), []);

    const handleCommentSubmit = useCallback(async ({ newComment, userName, imageFile }) => {
        setError('');
        setIsSubmitting(true);
        
        try {
            const profileImageUrl = await readImage(imageFile);
            const newEntry = {
                id: Date.now(),
                content: newComment.trim(),
                user_name: userName.trim(),
                profile_image: profileImageUrl,
                is_pinned: false,
                created_at: new Date().toISOString(),
            };
            const nextComments = [newEntry, ...comments];
            localStorage.setItem('comments', JSON.stringify(nextComments));
            setComments(nextComments);
        } catch (error) {
            setError('Komentar tidak dapat disimpan di browser ini.');
            console.error('Error adding comment: ', error);
        } finally {
            setIsSubmitting(false);
        }
    }, [comments, readImage]);

    const formatDate = useCallback((timestamp) => {
        if (!timestamp) return '';
        const date = new Date(timestamp);
        const now = new Date();
        const diffMinutes = Math.floor((now - date) / (1000 * 60));
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffMinutes < 1) return 'Baru saja';
        if (diffMinutes < 60) return `${diffMinutes}m yang lalu`;
        if (diffHours < 24) return `${diffHours}j yang lalu`;
        if (diffDays < 7) return `${diffDays}h yang lalu`;

        return new Intl.DateTimeFormat('id-ID', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(date);
    }, []);

    const totalComments = comments.length + (pinnedComment ? 1 : 0);

    return (
        <div className="w-full bg-white border-3 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000]" data-aos="fade-up" data-aos-duration="1000">
            <div className="p-5 border-b-3 border-black bg-[#FFDE59] rounded-t-2xl flex items-center justify-between" data-aos="fade-down" data-aos-duration="800">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                        <MessageCircle className="w-6 h-6 text-black stroke-[2.5]" />
                    </div>
                    <h3 className="text-xl font-bold text-black uppercase tracking-wide">
                        Komentar <span className="bg-black text-white px-2 py-0.5 rounded text-sm">({totalComments})</span>
                    </h3>
                </div>
            </div>
            <div className="p-6 space-y-6">
                {error && (
                    <div className="flex items-center gap-2 p-4 text-black bg-[#FF6B6B] border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000]" data-aos="fade-in">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 stroke-[2.5]" />
                        <p className="text-sm font-bold">{error}</p>
                    </div>
                )}
                
                <div>
                    <CommentForm onSubmit={handleCommentSubmit} isSubmitting={isSubmitting} error={error} />
                </div>

                <div className="space-y-4 h-[328px] overflow-y-auto overflow-x-hidden custom-scrollbar pt-1 pr-2" data-aos="fade-up" data-aos-delay="200">
                    {/* Pinned Comment */}
                    {pinnedComment && (
                        <div data-aos="fade-down" data-aos-duration="800">
                            <Comment 
                                comment={pinnedComment} 
                                formatDate={formatDate}
                                index={0}
                                isPinned={true}
                            />
                        </div>
                    )}
                    
                    {/* Regular Comments */}
                    {comments.length === 0 && !pinnedComment ? (
                        <div className="text-center py-10 px-4 bg-white border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000]" data-aos="header">
                            <UserCircle2 className="w-10 h-10 text-black mx-auto mb-2 stroke-[2]" />
                            <p className="text-black font-bold text-sm">Belum ada komentar. Mulai percakapan!</p>
                        </div>
                    ) : (
                        comments.map((comment, index) => (
                            <Comment 
                                key={comment.id} 
                                comment={comment} 
                                formatDate={formatDate}
                                index={index + (pinnedComment ? 1 : 0)}
                                isPinned={false}
                            />
                        ))
                    )}
                </div>
            </div>
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #fff;
                    border-left: 3px solid black;
                    border-radius: 0 12px 12px 0;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #FF6B6B;
                    border: 2px solid black;
                    border-radius: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #ff5252;
                }
            `}</style>
        </div>
    );
};

export default Komentar;