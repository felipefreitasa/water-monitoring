import { ReactNode, createContext, useState } from "react"

export type ContentContextDataProps = {
  expanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  detailsHeaderTitle: string;
  setDetailsHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
  selectedEspecificTimeFilter: number;
  setSelectedEspecificTimeFilter: React.Dispatch<React.SetStateAction<number>>;
}

type ContentContextProviderProps = {
  children: ReactNode
}

export const ContentContext = createContext<ContentContextDataProps>({} as ContentContextDataProps)

export function ContentContextProvider({ children }: ContentContextProviderProps) {

  const [expanded, setIsExpanded] = useState(false)
  const [detailsHeaderTitle, setDetailsHeaderTitle] = useState('')
  const [selectedEspecificTimeFilter, setSelectedEspecificTimeFilter] = useState(0)

  return (
    <ContentContext.Provider value={{
      expanded,
      setIsExpanded,
      detailsHeaderTitle,
      setDetailsHeaderTitle,
      selectedEspecificTimeFilter,
      setSelectedEspecificTimeFilter
    }}>
      {children}
    </ContentContext.Provider>
  )
}