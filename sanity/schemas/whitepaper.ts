import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'whitepaper',
  title: 'Whitepaper / Resource',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Threat Intelligence', value: 'threat-intelligence' },
          { title: 'Compliance', value: 'compliance' },
          { title: 'Incident Response', value: 'incident-response' },
          { title: 'Essential Eight', value: 'essential-eight' },
          { title: 'GRC', value: 'grc' },
        ],
      },
    }),
    defineField({ name: 'file', title: 'PDF File', type: 'file', options: { accept: '.pdf' } }),
  ],
})
