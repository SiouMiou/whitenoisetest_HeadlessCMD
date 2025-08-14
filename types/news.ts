export interface News {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  excerpt?: string
  coverImage?: string
  body?: any[]
} 