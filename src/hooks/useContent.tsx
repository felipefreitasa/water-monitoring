import { useContext } from "react"

import { ContentContext, ContentContextDataProps } from "../contexts/ContentContext"

export function useContent(): ContentContextDataProps {
  const context = useContext(ContentContext)

  return context
}