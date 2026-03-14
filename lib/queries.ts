import { groq } from 'next-sanity'

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    "author": author->{ name, image, role },
    tags
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    body,
    "author": author->{ name, image, bio, role },
    tags
  }
`

export const whitepaperQuery = groq`
  *[_type == "whitepaper"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    coverImage,
    category,
    "fileUrl": file.asset->url
  }
`

export const whitepaperBySlugQuery = groq`
  *[_type == "whitepaper" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    coverImage,
    category,
    "fileUrl": file.asset->url
  }
`

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    features,
    benefits,
    order
  }
`
