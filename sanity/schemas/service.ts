import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'icon', title: 'Icon Name (Lucide)', type: 'string' }),
    defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'benefits', title: 'Benefits', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
