import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from "../supabase"; 

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

  if (allowed === null) return null
  if (!allowed) return <Navigate to="/login" />

  return children
}