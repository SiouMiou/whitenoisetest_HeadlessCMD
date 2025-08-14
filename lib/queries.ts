 // 獲取所有已發布的最新消息
export const newsQuery = `
  *[_type == "news" && publishedAt <= now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "coverImage": coverImage.asset->url,
    body
  }
`

// 獲取單篇最新消息
export const newsBySlugQuery = `
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "coverImage": coverImage.asset->url,
    body
  }
` 