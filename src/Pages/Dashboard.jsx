import { useState } from 'react'
import { Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import Projects from './dashboard/Projects'
import Certificates from './dashboard/Certificates'
import Comments from './dashboard/Comments'
import { FolderGit2, Award, MessageSquare, LogOut, LayoutDashboard, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { to: 'projects', label: 'Projects', icon: FolderGit2 },
  { to: 'certificates', label: 'Certificates', icon: Award },
  { to: 'comments', label: 'Comments', icon: MessageSquare },
]

export default function Dashboard() {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut()
    }
    navigate('/login')
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full p-5 gap-6 bg-[#f4f0e6]">
      {/* Logo Neo-Brutalist */}
      <div className="flex items-center gap-3 px-1 shrink-0">
        <div className="w-10 h-10 bg-[#ffcf33] border-3 border-[#111111] shadow-[3px_3px_0px_#111111] flex items-center justify-center shrink-0">
          <LayoutDashboard className="w-5 h-5 text-[#111111] stroke-[2.5]" />
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-tight text-[#111111]">Dashboard</p>
          <p className="text-[10px] font-bold uppercase text-[#111111]/70">Admin Panel</p>
        </div>
      </div>

      {/* Badge Neo-Brutalist */}
      <div className="shrink-0 px-3 py-1.5 bg-[#4fc3f7] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] flex items-center gap-2">
        <span className="w-2 h-2 bg-[#111111] animate-pulse" />
        <span className="text-[#111111] text-xs font-black uppercase tracking-wider">Portfolio Manager</span>
      </div>

      {/* Nav Menu */}
      <nav className="flex flex-col gap-2 flex-1 min-h-0">
        <p className="text-[10px] font-black text-[#111111]/60 uppercase tracking-widest px-1 mb-1 shrink-0">Menu Navigasi</p>
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => {
          const active = location.pathname.includes(to)
          return (
            <Link
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-2.5 border-3 border-[#111111] rounded-sm transition-all text-xs font-black uppercase tracking-wider shrink-0 ${
                active
                  ? 'bg-[#ffcf33] text-[#111111] shadow-[4px_4px_0px_#111111] translate-x-[-2px] translate-y-[-2px]'
                  : 'bg-white text-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-[#ffe066] hover:-translate-x-0.5 hover:-translate-y-0.5'
              }`}
            >
              <Icon className={`w-4 h-4 stroke-[2.5] shrink-0 text-[#111111]`} />
              <span>{label}</span>
              {active && <span className="ml-auto w-2 h-2 bg-[#ff5c58] border border-[#111111]" />}
            </Link>
          )
        })}
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="shrink-0 flex items-center gap-3 px-3.5 py-2.5 bg-white text-[#111111] border-3 border-[#111111] shadow-[3px_3px_0px_#ff5c58] hover:bg-[#ff5c58] hover:shadow-[3px_3px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all text-xs font-black uppercase tracking-wider rounded-sm"
      >
        <LogOut className="w-4 h-4 stroke-[2.5] shrink-0" />
        Sign Out
      </button>
    </div>
  )

  return (
    <div className="flex bg-[#f4f0e6] text-[#111111]" style={{ height: '100dvh' }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-[#111111]/70 backdrop-blur-xs lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Desktop */}
      <aside
        className="hidden lg:flex w-64 shrink-0 flex-col border-r-3 border-[#111111] bg-[#f4f0e6]"
        style={{ height: '100dvh', position: 'sticky', top: 0 }}
      >
        <SidebarContent />
      </aside>

      {/* Sidebar - Mobile Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 flex flex-col border-r-3 border-[#111111] bg-[#f4f0e6] transition-transform duration-200 lg:hidden shadow-[10px_0px_0px_rgba(17,17,17,0.5)] ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-3 border-b-2 border-[#111111]">
          <button 
            onClick={() => setSidebarOpen(false)}
            className="p-1 bg-[#ff5c58] border-2 border-[#111111] shadow-[2px_2px_0px_#111111]"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>
        <SidebarContent />
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-0 bg-[#f4f0e6]">
        {/* Mobile Topbar */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b-3 border-[#111111] bg-white shrink-0 shadow-[0_3px_0_#111111]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 bg-[#ffcf33] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] text-[#111111]"
            >
              <Menu className="w-4 h-4 stroke-[3]" />
            </button>
            <span className="text-xs font-black uppercase tracking-wider text-[#111111]">Admin Dashboard</span>
          </div>
          <span className="text-[10px] font-black px-2 py-0.5 bg-[#4fc3f7] border border-[#111111]">Panel</span>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#f4f0e6]">
          <Routes>
            <Route index element={<Navigate to="projects" replace />} />
            <Route path="projects" element={<Projects />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="comments" element={<Comments />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}