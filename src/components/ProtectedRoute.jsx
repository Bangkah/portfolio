import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from "../supabase"; 
import LoadingScreen from "./LoadingScreen";

export default function ProtectedRoute({ children }) {
  const [allowed, setAllowed] = useState(null)

  useEffect(() => {
    const check = async () => {
      try {
        if (!supabase) {
          setAllowed(false)
          return
        }

        const { data: { user }, error: userError } = await supabase.auth.getUser()
        if (userError || !user) {
          setAllowed(false)
          return
        }

        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .maybeSingle()

        if (profileError) {
          console.error('ProtectedRoute profile error:', profileError)
          setAllowed(false)
          return
        }

        setAllowed(profile?.role === 'admin')
      } catch (error) {
        console.error('ProtectedRoute check failed:', error)
        setAllowed(false)
      }
    }

    check()
  }, [])

  // Menggunakan LoadingScreen saat pengecekan role sedang berlangsung
  if (allowed === null) {
    return <LoadingScreen />
  }

  // Redirect jika bukan admin atau belum terautentikasi
  if (!allowed) {
    return <Navigate to="/login" replace />
  }

  return children
}