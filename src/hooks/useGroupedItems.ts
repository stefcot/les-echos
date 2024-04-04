import { NEWSLETTER_ITEMS } from '../mocks/newsletters'
import { NewsletterItem } from '../types'

export default function useGroupedItems() {
  const newsLetterItems = NEWSLETTER_ITEMS[0] as NewsletterItem[]

  const groupedItems: { [key: string]: NewsletterItem[] } = {}

  for (const item of newsLetterItems) {
    if (!groupedItems[item.site]) {
      groupedItems[item.site] = []
    }
    groupedItems[item.site].push(item)
  }

  return groupedItems
}
