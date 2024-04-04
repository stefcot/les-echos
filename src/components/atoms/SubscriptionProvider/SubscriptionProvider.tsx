import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type Subscription = {
  subscription: string[]
  setSubscription: Dispatch<SetStateAction<string[]>>
}

const SubscriptionContext = createContext<Subscription>({
  subscription: [],
  setSubscription() {},
})

export const useSubscriptionContext = () => useContext(SubscriptionContext)

const SubscriptionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [subscription, setSubscription] = useState<string[]>([])

  return (
    <SubscriptionContext.Provider
      value={{
        subscription,
        setSubscription,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}

export default SubscriptionProvider
