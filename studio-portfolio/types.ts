export interface TimeEntry {
  _key: string
  startTime: string
  endTime?: string
  resource: {
    _ref: string
    _type: 'reference'
    title?: string
  }
  specificResource?: string
  notes?: string
}

export interface FocusArea {
  _id: string
  _type: 'focusArea'
  category: string
  description: string
  resources: Array<{
    title: string
    url?: string
    status: 'not_started' | 'in_progress' | 'completed'
    instructor?: string
    rating?: number
    review?: string
  }>
}

export interface TimeLog {
  _id: string
  _type: 'timeLog'
  date: string
  entries: TimeEntry[]
}
