export type NewsletterItem = {
  id: string
  image: string
  description: string
  title: string
  site: string
  subscriptions: string[]
}

export type User = {
  id: string
  firstName: string
  lastName: string
  gender: string
  email: string
  subscriptions: string[]
}

export type Option<T> = {
  label: string
  value: T
}
