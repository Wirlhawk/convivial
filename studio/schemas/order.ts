import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'service',
            title: 'Service',
            type: 'string',
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'service',
        },
    },
})
