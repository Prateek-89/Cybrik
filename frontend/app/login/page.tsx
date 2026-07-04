'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { isAuthenticated, setAuthenticated } from '../lib/auth'
import { loginUser } from '@/services/api'

export default function LoginPage() {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace('/dashboard')
    }
  }, [router])

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    setError('')
    setSubmitting(true)

    try {
      await loginUser({
        username: username.trim(),
        password,
      })

      setAuthenticated()
      router.push('/dashboard')
    } catch {
      setError('Invalid username or password')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-50 to-sky-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl rounded-[2rem] bg-white border border-slate-200 shadow-2xl p-10 sm:p-14">

        <div className="flex flex-col items-center mb-10">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg">
            <svg
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            Login
          </h1>

          <p className="mt-3 text-lg text-slate-500 text-center">
            Sign in to continue to your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">

          <div>
            <label
              htmlFor="username"
              className="block text-lg font-medium text-slate-700 mb-2"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              placeholder="Enter username"
              required
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-slate-700 mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="Enter password"
              required
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
          </div>

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-sky-600 py-4 text-lg font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? 'Signing In...' : 'Login'}
          </button>

          <p className="text-center text-sm text-slate-500">
            Demo Credentials
            <br />
            Username:{' '}
            <span className="font-semibold text-slate-900">
              admin
            </span>
            <br />
            Password:{' '}
            <span className="font-semibold text-slate-900">
              admin123
            </span>
          </p>

        </form>

      </div>
    </div>
  )
}