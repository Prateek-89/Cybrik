'use client'

import type { Note } from '@/types/note'

interface NoteCardProps {
  note: Note
  onEdit: (note: Note) => void
  onDelete: (id: number) => void
}

export default function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg transition hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 truncate">{note.title}</h3>
          <p className="mt-3 text-base sm:text-lg text-slate-600 whitespace-pre-wrap break-words leading-relaxed">{note.description}</p>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => onEdit(note)}
          className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="rounded-xl border border-red-200 bg-white px-5 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-50 hover:border-red-300"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  )
}