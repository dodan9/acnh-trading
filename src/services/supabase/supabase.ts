export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      answer: {
        Row: {
          content: string
          created_at: string
          id: number
          inquiry_id: number
        }
        Insert: {
          content: string
          created_at?: string
          id?: number
          inquiry_id: number
        }
        Update: {
          content?: string
          created_at?: string
          id?: number
          inquiry_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "answer_inquiry_id_fkey"
            columns: ["inquiry_id"]
            isOneToOne: false
            referencedRelation: "inquiry"
            referencedColumns: ["id"]
          }
        ]
      }
      inquiry: {
        Row: {
          answer_id: number | null
          content: string
          created_at: string
          email: string | null
          id: number
          title: string
        }
        Insert: {
          answer_id?: number | null
          content: string
          created_at?: string
          email?: string | null
          id?: number
          title: string
        }
        Update: {
          answer_id?: number | null
          content?: string
          created_at?: string
          email?: string | null
          id?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "inquiry_answer_id_fkey"
            columns: ["answer_id"]
            isOneToOne: true
            referencedRelation: "answer"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
