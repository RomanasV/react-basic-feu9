import { createContext } from 'react'

export const SidebarContext = createContext({
  podcasts: {
    title: '',
    podcastsList: []
  },
  events: {
    title: '',
    buttonTitle: '',
    eventsListData: []
  }
})
