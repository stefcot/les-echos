'use client'

import React, { FC } from 'react'

import { useSubscriptionContext } from '@Atoms/SubscriptionProvider/SubscriptionProvider'
import useGroupedItems from '@Hooks/useGroupedItems'
import Card from '@Molecules/Card'

export type GridProps = {
  site: string
}

const Grid: FC<GridProps> = ({ site }) => {
  const groupedItems = useGroupedItems()
  const { subscription } = useSubscriptionContext()

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md-gap-x-5 lg:gap-x-6 gap-y-8 mb-8">
      {site &&
        groupedItems[site]
          .filter((item) => {
            return (
              JSON.stringify(item.subscriptions) ===
              JSON.stringify(subscription)
            )
          })
          .map(({ id, ...rest }) => <Card key={id} {...rest} />)}
    </section>
  )
}

export default Grid
