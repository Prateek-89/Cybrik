import axios from 'axios'
import type { Note, LoginRequest, LoginResponse, NoteCreate, NoteUpdate } from '@/types/note'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/login', data)
  return response.data
}

export const getNotes = async (): Promise<Note[]> => {
  const response = await api.get<Note[]>('/notes')
  return response.data
}

export const createNote = async (data: NoteCreate): Promise<Note> => {
  const response = await api.post<Note>('/notes', data)
  return response.data
}

export const updateNote = async (id: number, data: NoteUpdate): Promise<Note> => {
  const response = await api.put<Note>(`/notes/${id}`, data)
  return response.data
}

export const deleteNote = async (id: number): Promise<void> => {
  await api.delete(`/notes/${id}`)
}