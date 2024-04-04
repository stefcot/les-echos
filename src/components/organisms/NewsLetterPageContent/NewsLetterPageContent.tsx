'use client'

import React, { FC } from 'react'

import SubscriptionProvider from '@Atoms/SubscriptionProvider'
import UserBar from '@Molecules/UserBar'
import NewsLetters from '@Organisms/NewsLetters'

const NewsLetterPageContent: FC = () => (
  <SubscriptionProvider>
    <UserBar />
    <main>
      <NewsLetters />
    </main>
  </SubscriptionProvider>
)

export default NewsLetterPageContent
