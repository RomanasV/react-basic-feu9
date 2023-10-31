import { createContext } from 'react';

export const MainContext = createContext({
  newsSectionData: {
    mainNewsData: [],
    secondaryNewsData: [],
    newsSectionTitle: '',
    newsSectionButtonTitle: ''
  }, 
  videoSectionData: {
    title: '',
    subTitle: '',
    buttonTitle: '',
    videoUrl: ''
  }
})