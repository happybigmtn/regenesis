import {defineField, defineType} from 'sanity'
import type {PreviewValue, PrepareViewOptions} from 'sanity'

type ResourceStatus = 'not_started' | 'in_progress' | 'completed'

export const focusAreas = defineType({
  name: 'focusArea',
  title: 'Focus Areas',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resources',
      title: 'Learning Resources',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'resource',
          title: 'Resource',
          preview: {
            select: {
              title: 'title',
              status: 'status',
              url: 'url',
              rating: 'rating',
              instructor: 'instructor',
              startDate: 'startDate',
              endDate: 'endDate',
            },
            prepare(selection: Record<string, any>): PreviewValue {
              const {title, status, url, rating, instructor, startDate, endDate} = selection
              const statusEmoji: Record<ResourceStatus, string> = {
                not_started: '🔴',
                in_progress: '🟡',
                completed: '🟢',
              }
              const ratingDisplay = rating ? ` | ⭐ ${rating}/10` : ''
              const instructorDisplay = instructor ? ` | 👨‍🏫 ${instructor}` : ''
              const startDateDisplay = startDate ? ` | 📆 ${startDate}` : ''
              const endDateDisplay = endDate ? ` | 📆 ${endDate}` : ''
              return {
                title: title || '',
                subtitle: `${statusEmoji[status as ResourceStatus]} ${(status as string).replace('_', ' ').toUpperCase()}${ratingDisplay}${instructorDisplay}${startDateDisplay}${endDateDisplay}`,
                description: url,
              }
            },
          },
          fields: [
            {
              name: 'title',
              title: 'Resource Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'instructor',
              title: 'Instructor',
              type: 'array',
              of: [{type: 'string'}],
              options: {
                layout: 'tags',
              },
            },
            {
              name: 'url',
              title: 'Resource URL',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https'],
                }),
            },
            {
              name: 'startDate',
              title: 'Start Date',
              type: 'date',
              options: {
                dateFormat: 'YYYY-MM-DD',
              },
            },
            {
              name: 'endDate',
              title: 'End Date',
              type: 'date',
              options: {
                dateFormat: 'YYYY-MM-DD',
              },
            },
            {
              name: 'status',
              title: 'Status',
              type: 'string',
              options: {
                list: [
                  {title: 'Not Started', value: 'not_started'},
                  {title: 'In Progress', value: 'in_progress'},
                  {title: 'Completed', value: 'completed'},
                ],
                layout: 'radio',
              },
              initialValue: 'not_started',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'review',
              title: 'Review',
              type: 'text',
              description: 'Write your thoughts about this resource',
              rows: 3,
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'number',
              description: 'Rate this resource from 1 to 10',
              validation: (Rule) => Rule.min(1).max(10).precision(1), // Allows decimal points
              options: {
                layout: 'radio',
                list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => ({title: `${num}`, value: num})),
              },
            },
          ],
        },
      ],
    }),
  ],
})
