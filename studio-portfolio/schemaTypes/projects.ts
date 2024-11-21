import {defineField, defineType} from 'sanity'

export const projects = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'codename',
      title: 'Codename',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'objective',
      title: 'Objective',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug-EndingURL',
      type: 'slug',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dateStarted',
      title: 'When did you start this project?',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'objectives',
      title: 'Learning Objectives',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
  ],
})
