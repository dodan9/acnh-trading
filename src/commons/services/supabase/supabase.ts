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
          answer: string
          created_at: string
          id: number
          inquiry_id: number
        }
        Insert: {
          answer: string
          created_at?: string
          id?: number
          inquiry_id: number
        }
        Update: {
          answer?: string
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
          content: string
          created_at: string
          email: string | null
          id: number
          title: string
        }
        Insert: {
          content: string
          created_at?: string
          email?: string | null
          id?: number
          title: string
        }
        Update: {
          content?: string
          created_at?: string
          email?: string | null
          id?: number
          title?: string
        }
        Relationships: []
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
