'use client'

import type { Note } from '@/types/note'
import NoteCard from './NoteCard'

interface NotesListProps {
  notes: Note[]
  onEdit: (note: Note) => void
  onDelete: (id: number) => void
  loading: boolean
}

export default function NotesList({ notes, onEdit, onDelete, loading }: NotesListProps) {
  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="inline-block h-16 w-16 animate-spin rounded-full border-[6px] border-sky-600 border-r-transparent" />
        <p className="mt-6 text-2xl font-semibold text-slate-500">Loading notes...</p>
      </div>
    )
  }

  if (notes.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-sky-50">
          <svg className="h-12 w-12 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </div>
        <p className="text-3xl font-bold text-slate-700">No notes yet</p>
        <p className="mt-3 text-xl text-slate-500">Create your first note using the form above.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}