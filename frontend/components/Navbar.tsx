'use client'

import { clearAuthentication } from '@/app/lib/auth'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  const handleLogout = () => {
    clearAuthentication()
    router.push('/login')
  }

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-500">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-slate-900">Notes App</span>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-2xl bg-slate-900 px-8 py-3.5 text-base font-bold text-white transition hover:bg-slate-800 shadow-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}