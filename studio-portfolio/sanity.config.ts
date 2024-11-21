import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'wjnnpcpn',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Custom document actions
    actions: (prev, context) => {
      if (context.schemaType === 'timeLog') {
        return prev
      }
      return prev
    },
    // Custom document badges
    badges: (prev, context) => {
      if (context.schemaType === 'timeLog') {
        return prev
      }
      return prev
    },
    // Custom views for documents
    newDocumentOptions: (prev, context) => {
      if (context.creationContext.type === 'global') {
        return prev.filter((template) => template.templateId !== 'timeLog')
      }
      return prev
    },
    // Custom views for documents
    views: [
      {
        type: 'form',
        title: 'Edit',
      },
    ],
  },
})
