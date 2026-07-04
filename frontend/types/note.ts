export interface Note {
  id: number
  title: string
  description: string
}

export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  message: string
  username: string
}

export interface NoteCreate {
  title: string
  description: string
}

export interface NoteUpdate {
  title: string
  description: string
}