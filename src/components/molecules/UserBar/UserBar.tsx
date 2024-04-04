'use client'

import { FC } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx'
import Select from '@Molecules/Select'
import { Option, User } from '@Types/index'
import {
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
} from '@Mocks/user'
import { useSubscriptionContext } from '@Atoms/SubscriptionProvider/SubscriptionProvider'

export type UserProps = {
  className?: string
}

const UserBar: FC<UserProps> = ({ className }) => {
  const { setSubscription, subscription } = useSubscriptionContext()

  const users: User[] = [
    USER_WITHOUT_SUBSCRIPTION,
    USER_WITH_ONE_SUBSCRIPTION,
    USER_WITH_MULTIPLE_SUBSCRIPTION,
  ]

  const userOptions: Option<string[]>[] = users.map(
    ({ firstName, lastName, subscriptions }, index) => ({
      label: `${firstName} ${lastName} ${index} `,
      value: subscriptions,
    })
  )

  const handleUserChange = (selectedOptions: string[]) => {
    setSubscription(selectedOptions)
  }

  return (
    <div
      className={clsx(
        'w-full bg-gray-200 p-2 rounded-md flex justify-end gap-4',
        className
      )}
    >
      <Select<string[]>
        options={userOptions}
        onChange={handleUserChange}
        selected={subscription}
      />
    </div>
  )
}

export default UserBar
