import { ReactNode, createContext, useContext, useState, Dispatch, SetStateAction } from "react"

interface CartProviderProps {
    children: ReactNode
}

interface OrderContextType {
  modalOne: boolean
  setModalOne: Dispatch<SetStateAction<boolean>>
}

const ShuffleContext = createContext<OrderContextType | undefined>(undefined)

export function useShuffleContext() {
    const value = useContext(ShuffleContext)
    if (value == null) throw Error('Cannot use outside of Order Context')
    return value
}

export const Shuffle = ({children}: CartProviderProps) => {
    const [modalOne, setModalOne] = useState(true)
  return <ShuffleContext.Provider value={{modalOne, setModalOne}}>
    {children}
  </ShuffleContext.Provider>
}
