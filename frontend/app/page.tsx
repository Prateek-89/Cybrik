'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { isAuthenticated } from './lib/auth'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const loggedIn = isAuthenticated()
    router.replace(loggedIn ? '/dashboard' : '/login')
  }, [router])

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-50 via-sky-50 to-blue-100 flex flex-col items-center justify-center px-4 sm:px-8 py-12">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-12 sm:gap-16">
        
        {/* Large Icon */}
        <div className="flex h-48 w-48 sm:h-56 sm:w-56 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 shadow-2xl shadow-sky-300/60">
          <svg className="h-24 w-24 sm:h-28 sm:w-28 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-slate-900 tracking-tight text-center leading-none">
          Notes App
        </h1>

        {/* Subtitle */}
        <p className="text-2xl sm:text-3xl md:text-4xl text-slate-600 max-w-4xl text-center leading-relaxed font-medium">
          Your personal notes dashboard — create, edit, and manage all your notes in one place.
        </p>

        {/* Loading Spinner */}
        <div className="flex items-center justify-center gap-5">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-[6px] border-sky-600 border-r-transparent" />
          <p className="text-2xl font-semibold text-slate-600">Redirecting to the appropriate page...</p>
        </div>

        {/* Feature Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-4">
          <div className="rounded-2xl bg-white border border-sky-100 p-8 sm:p-10 text-center shadow-xl shadow-sky-100/50 hover:shadow-2xl transition-shadow">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-sky-100">
              <svg className="h-10 w-10 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Create Notes</h3>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">Add new notes with titles and descriptions effortlessly.</p>
          </div>
          <div className="rounded-2xl bg-white border border-sky-100 p-8 sm:p-10 text-center shadow-xl shadow-sky-100/50 hover:shadow-2xl transition-shadow">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-sky-100">
              <svg className="h-10 w-10 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Edit & Delete</h3>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">Update or remove your notes with a single click.</p>
          </div>
          <div className="rounded-2xl bg-white border border-sky-100 p-8 sm:p-10 text-center shadow-xl shadow-sky-100/50 hover:shadow-2xl transition-shadow">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-sky-100">
              <svg className="h-10 w-10 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Always Available</h3>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">Your notes are stored in memory and accessible anytime.</p>
          </div>
        </div>
      </div>
    </div>
  )
}