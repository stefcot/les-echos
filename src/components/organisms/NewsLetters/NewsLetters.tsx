'use client'

import { FC } from 'react'

import useGroupedItems from '@Hooks/useGroupedItems'
import Grid from '@Molecules/Grid'

const NewsLetters: FC = () => {
  const groupedItems = useGroupedItems()

  return (
    <>
      {Object.keys(groupedItems).map((key) => (
        <>
          <h2 className="relative uppercase text-[22px] font-bold py-4 mb-6 after:absolute after:content-[' '] after:bottom-0 after:left-0 after:h-1 after:w-[70px] after:bg-[#B00005]">
            {key}
          </h2>
          <Grid key={key} site={key} />
        </>
      ))}
    </>
  )
}

export default NewsLetters
