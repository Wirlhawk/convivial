import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'aboutContent',
    title: 'About Content',
    type: 'document',
    fields: [
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'The paragraph text displayed in the about section',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'sortOrder',
            title: 'Sort Order',
            type: 'number',
            description: 'Controls the display order (lower numbers appear first)',
            initialValue: 0,
            validation: (Rule) => Rule.required(),
        }),
    ],
    orderings: [
        {
            title: 'Sort Order',
            name: 'sortOrderAsc',
            by: [{ field: 'sortOrder', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'description',
            media: 'image',
            sortOrder: 'sortOrder',
        },
        prepare({ title, media, sortOrder }) {
            return {
                title: title?.substring(0, 80) + (title?.length > 80 ? '...' : ''),
                subtitle: `Order: ${sortOrder ?? 'N/A'}`,
                media,
            }
        },
    },
})
