'use client'

import { useState } from 'react'

interface NoteFormProps {
  initialTitle?: string
  initialDescription?: string
  onSubmit: (title: string, description: string) => Promise<void>
  onCancel?: () => void
  isEditing?: boolean
}

export default function NoteForm({
  initialTitle = '',
  initialDescription = '',
  onSubmit,
  onCancel,
  isEditing = false,
}: NoteFormProps) {
  const [title, setTitle] = useState(initialTitle)
  const [description, setDescription] = useState(initialDescription)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return
    setSubmitting(true)
    try {
      await onSubmit(title.trim(), description.trim())
      if (!isEditing) {
        setTitle('')
        setDescription('')
      }
    } catch {
      // Error handled by parent
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="note-title" className="block text-lg font-medium text-slate-700 mb-2">
          Title
        </label>
        <input
          id="note-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full rounded-2xl border border-slate-300 bg-slate-50 px-6 py-4 text-lg text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          placeholder="Enter note title"
          required
        />
      </div>
      <div>
        <label htmlFor="note-description" className="block text-lg font-medium text-slate-700 mb-2">
          Description
        </label>
        <textarea
          id="note-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="block w-full rounded-2xl border border-slate-300 bg-slate-50 px-6 py-4 text-lg text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 resize-none"
          placeholder="Enter note description"
          required
        />
      </div>
      <div className="flex gap-4 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-2xl bg-sky-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-400 shadow-lg shadow-sky-200/70"
        >
          {submitting ? 'Saving...' : isEditing ? 'Update Note' : 'Add Note'}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-bold text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}