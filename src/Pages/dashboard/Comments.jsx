import { useEffect, useState, useMemo } from "react";
import { supabase } from "../../supabase";
import {
  MessageSquare,
  Pin,
  Trash2,
  PinOff,
  Calendar,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const PAGE_SIZE = 10;

const Card = ({ children, className = "" }) => (
  <div className={`relative bg-white border-3 border-[#111111] shadow-[6px_6px_0px_#111111] rounded-sm p-4 sm:p-5 ${className}`}>
    {children}
  </div>
);

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchComments = async () => {
    setLoading(true);

    if (!supabase) {
      setComments([])
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase
        .from("portfolio_comments")
        .select("*")
        .order("is_pinned", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) {
        console.error('Comments fetch error:', error)
        setComments([])
        setLoading(false)
        return
      }

      setComments(data || []);
    } catch (error) {
      console.error('Unexpected error fetching comments:', error)
      setComments([])
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filter, search]);

  const pin = async (id, value) => {
    if (!supabase) {
      alert('Supabase belum dikonfigurasi. Dashboard admin tidak dapat memodifikasi komentar.')
      return
    }

    const { error } = await supabase
      .from("portfolio_comments")
      .update({ is_pinned: value })
      .eq("id", id);

    if (error) {
      console.error('Pin comment error:', error)
      alert(error.message || 'Gagal mengubah status pin komentar.')
      return
    }

    fetchComments();
  };

  const remove = async (id) => {
    if (!supabase) {
      alert('Supabase belum dikonfigurasi. Dashboard admin tidak dapat menghapus komentar.')
      return
    }

    if (!confirm("Delete this comment?")) return;
    const { error } = await supabase.from("portfolio_comments").delete().eq("id", id);
    if (error) {
      console.error('Delete comment error:', error)
      alert(error.message || 'Gagal menghapus komentar.')
      return
    }
    fetchComments();
  };

  const pinnedCount = comments.filter((c) => c.is_pinned).length;

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const filtered = useMemo(() => {
    let result =
      filter === "pinned" ? comments.filter((c) => c.is_pinned) : comments;
    const q = search.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (c) =>
          (c.user_name || "").toLowerCase().includes(q) ||
          (c.content || "").toLowerCase().includes(q),
      );
    }
    return result;
  }, [comments, filter, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start sm:items-center justify-between gap-4 flex-wrap bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] p-4 rounded-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#ffcf33] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5 text-[#111111] stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-black uppercase text-[#111111]">
              Comments
            </h1>
            <p className="text-[#111111]/70 font-bold text-xs uppercase">
              {comments.length} total · {pinnedCount} pinned
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-1 p-1 bg-[#f4f0e6] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] rounded-sm">
          {[
            { value: "all", label: "All", count: comments.length },
            { value: "pinned", label: "Pinned", count: pinnedCount },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer rounded-xs ${
                filter === tab.value
                  ? "bg-[#ffcf33] text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111]"
                  : "text-[#111111]/70 hover:text-[#111111]"
              }`}
            >
              {tab.label}
              <span
                className={`px-1.5 py-0.2 text-[10px] font-black border border-[#111111] ${
                  filter === tab.value
                    ? "bg-white text-[#111111]"
                    : "bg-[#f4f0e6] text-[#111111]/70"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total", value: comments.length, bg: "bg-white" },
          { label: "Pinned", value: pinnedCount, bg: "bg-[#ffcf33]" },
          { label: "Unpinned", value: comments.length - pinnedCount, bg: "bg-[#4fc3f7]" },
        ].map((stat) => (
          <div key={stat.label} className={`relative bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] p-3 sm:p-4 rounded-sm`}>
            <div className="flex items-center justify-between mb-1">
              <p className="text-[10px] sm:text-xs font-black uppercase text-[#111111]">{stat.label}</p>
              <div className={`w-3 h-3 ${stat.bg} border border-[#111111]`}></div>
            </div>
            <p className="text-2xl sm:text-3xl font-black text-[#111111]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111111] stroke-[2.5] pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or message..."
          className="w-full bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] pl-10 pr-10 py-2.5 text-[#111111] placeholder-[#111111]/40 font-semibold text-xs sm:text-sm outline-none focus:bg-[#fffde7] transition-all rounded-sm"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 bg-[#ff5c58] text-white border border-[#111111] shadow-[1px_1px_0px_#111111] cursor-pointer"
          >
            <X className="w-3.5 h-3.5 stroke-[3]" />
          </button>
        )}
      </div>

      {/* Result count when searching */}
      {search && (
        <p className="text-xs font-bold uppercase text-[#111111] -mt-3 bg-[#ffcf33] px-2 py-1 border border-[#111111] inline-block">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{search}"
        </p>
      )}

      {/* Comments List */}
      {loading ? (
        <div className="flex items-center justify-center py-20 bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111]">
          <div className="w-6 h-6 border-3 border-[#111111] border-t-[#ffcf33] rounded-full animate-spin" />
        </div>
      ) : paginated.length === 0 ? (
        <Card>
          <div className="p-12 text-center">
            <MessageSquare className="w-10 h-10 text-[#111111] stroke-[2] mx-auto mb-3" />
            <p className="text-[#111111] font-black uppercase text-xs">
              {search
                ? "No comments match your search."
                : filter === "pinned"
                  ? "No pinned comments."
                  : "No comments yet."}
            </p>
          </div>
        </Card>
      ) : (
        <div className="space-y-3">
          {paginated.map((comment) => (
            <div key={comment.id} className="relative">
              <div
                className={`relative bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] px-4 py-4 sm:px-5 rounded-sm transition-all ${
                  comment.is_pinned
                    ? "bg-[#fffde7]"
                    : ""
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-sm bg-[#ffcf33] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={comment.profile_image || "/default-avatar.jpg"}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs sm:text-sm font-black uppercase text-[#111111]">
                        {highlightMatch(
                          comment.user_name || "Anonymous",
                          search,
                        )}
                      </span>
                      {comment.is_pinned && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-xs bg-[#ffcf33] border border-[#111111] shadow-[1px_1px_0px_#111111] text-[#111111] text-[10px] font-black uppercase">
                          <Pin className="w-2.5 h-2.5 stroke-[3]" /> Pinned
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-[#111111]/60 font-bold text-[10px] sm:text-xs ml-auto shrink-0 bg-[#f4f0e6] px-2 py-0.5 border border-[#111111]">
                        <Calendar className="w-3 h-3 stroke-[2.5]" />
                        {formatDate(comment.created_at)}
                      </span>
                    </div>
                    <p className="text-[#111111] font-semibold text-xs sm:text-sm leading-relaxed">
                      {highlightMatch(comment.content || "", search)}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => pin(comment.id, !comment.is_pinned)}
                      title={comment.is_pinned ? "Unpin" : "Pin"}
                      className={`p-2 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] transition-all cursor-pointer ${
                        comment.is_pinned
                          ? "bg-[#ffcf33] text-[#111111]"
                          : "bg-white text-[#111111] hover:bg-[#f4f0e6]"
                      }`}
                    >
                      {comment.is_pinned ? (
                        <PinOff className="w-3.5 h-3.5 stroke-[3]" />
                      ) : (
                        <Pin className="w-3.5 h-3.5 stroke-[3]" />
                      )}
                    </button>
                    <button
                      onClick={() => remove(comment.id)}
                      title="Delete"
                      className="p-2 bg-white text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-[#ff5c58] hover:text-white transition-all cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5 stroke-[3]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between gap-3 pt-2 bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] p-3 rounded-sm">
          <p className="text-[10px] sm:text-xs font-black uppercase text-[#111111]">
            Showing {(page - 1) * PAGE_SIZE + 1}–
            {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
          </p>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-1.5 bg-white border-2 border-[#111111] shadow-[2px_2px_0px_#111111] text-[#111111] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 stroke-[3]" />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(
                (p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1,
              )
              .reduce((acc, p, i, arr) => {
                if (i > 0 && arr[i - 1] !== p - 1) acc.push("...");
                acc.push(p);
                return acc;
              }, [])
              .map((p, i) =>
                p === "..." ? (
                  <span
                    key={`dots-${i}`}
                    className="px-2 text-[#111111] font-bold text-xs"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`min-w-[32px] h-8 px-2 text-xs font-black uppercase border-2 border-[#111111] shadow-[2px_2px_0px_#111111] transition-all cursor-pointer ${
                      page === p
                        ? "bg-[#ffcf33] text-[#111111]"
                        : "bg-white text-[#111111] hover:bg-[#f4f0e6]"
                    }`}
                  >
                    {p}
                  </button>
                ),
              )}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-1.5 bg-white border-2 border-[#111111] shadow-[2px_2px_0px_#111111] text-[#111111] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Highlight matching text
function highlightMatch(text, query) {
  if (!query.trim()) return text;
  const regex = new RegExp(
    `(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi",
  );
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-[#ffcf33] text-[#111111] font-black border border-[#111111] px-0.5 rounded-none">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}