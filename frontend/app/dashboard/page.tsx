'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { isAuthenticated } from '../lib/auth'
import { getNotes, createNote, updateNote, deleteNote } from '@/services/api'
import type { Note } from '@/types/note'
import Navbar from '@/components/Navbar'
import NoteForm from '@/components/NoteForm'
import NotesList from '@/components/NotesList'

export default function DashboardPage() {
  const router = useRouter()
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [editingNote, setEditingNote] = useState<Note | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)

  const fetchNotes = useCallback(async () => {
    try {
      setLoading(true)
      const data = await getNotes()
      setNotes(data)
      setError('')
    } catch {
      setError('Failed to load notes. Make sure the backend server is running.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login')
      return
    }
    fetchNotes()
  }, [router, fetchNotes])

  const handleCreate = async (title: string, description: string) => {
    try {
      const newNote = await createNote({ title, description })
      setNotes((prev) => [...prev, newNote])
      setShowAddForm(false)
      setError('')
    } catch {
      setError('Failed to create note.')
    }
  }

  const handleUpdate = async (title: string, description: string) => {
    if (!editingNote) return
    try {
      const updated = await updateNote(editingNote.id, { title, description })
      setNotes((prev) => prev.map((n) => (n.id === updated.id ? updated : n)))
      setEditingNote(null)
      setError('')
    } catch {
      setError('Failed to update note.')
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await deleteNote(id)
      setNotes((prev) => prev.filter((n) => n.id !== id))
      setError('')
    } catch {
      setError('Failed to delete note.')
    }
  }

  const handleEditClick = (note: Note) => {
    setEditingNote(note)
    setShowAddForm(false)
  }

  return (
    <div className="min-h-screen w-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base uppercase tracking-[0.3em] text-sky-600 font-bold">Dashboard</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">Welcome, Admin</h1>
          </div>
          {!showAddForm && !editingNote && (
            <button
              onClick={() => {
                setShowAddForm(true)
                setEditingNote(null)
              }}
              className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-sky-700 shadow-lg shadow-sky-200/70"
            >
              + Add Note
            </button>
          )}
        </div>

        {error && (
          <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 px-8 py-5 text-lg text-red-700 font-medium">
            {error}
          </div>
        )}

        {(showAddForm || editingNote) && (
          <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              {editingNote ? '✏️ Edit Note' : '📝 Create New Note'}
            </h2>
            <NoteForm
              key={editingNote?.id ?? 'new'}
              initialTitle={editingNote?.title ?? ''}
              initialDescription={editingNote?.description ?? ''}
              onSubmit={editingNote ? handleUpdate : handleCreate}
              onCancel={() => {
                setShowAddForm(false)
                setEditingNote(null)
              }}
              isEditing={!!editingNote}
            />
          </div>
        )}

        <NotesList
          notes={notes}
          onEdit={handleEditClick}
          onDelete={handleDelete}
          loading={loading}
        />
      </main>
    </div>
  )
}