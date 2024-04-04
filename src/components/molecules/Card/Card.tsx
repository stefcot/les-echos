import React, { FC } from 'react'
import Image from 'next/image'

import Button from '@Atoms/Button/Button'
import { NewsletterItem } from '@Types/index'

export type CardProps = Omit<NewsletterItem, 'id'>

const Card: FC<CardProps> = ({ image, description, title, subscriptions }) => (
  <article className="flex flex-col w-full relative">
    <h3 className="text-center font-bold text-lg text-gray-500 uppercase order-2 mb-2">
      {title}
    </h3>
    <Image
      src={image}
      alt="alt text"
      fill
      className="!w-full !relative !h-auto mb-4 order-1"
    />
    <p className="text-center leading-7 mb-4 order-3">{description}</p>
    <footer className="mt-auto text-center order-4">
      <Button
        label={!subscriptions.length ? "S'abonner" : "S'inscrire"}
        onClick={() => console.log(title)}
        variant={!subscriptions.length ? 'yellow' : 'red'}
      />
    </footer>
  </article>
)

export default Card
