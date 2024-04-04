'use server'

import React from 'react'
import NewsLetterPageContent from '@Organisms/NewsLetterPageContent'

const page = () => {
  return (
    <div className="relative pt-[60px] max-w-[970px] mx-auto px-4 md:px-6 lg:px-8">
      <header className="w-full bg-gray-200 p-5 rounded-lg text-center mb-6">
        <h1 className="uppercase text-[30px] font-bold mb-2">Newsletters</h1>
        <p className="leading-7">
          Dans cette page, vous retrouvez l’ensemble des newsletters des Echos
          et des marques satellites. Ainsi, vous pouvez découvrir toutes nos
          newsletters selon vos centres d’intérêt et gérer plus facilement
          l’inscription à vos newsletters.{' '}
        </p>
      </header>
      <NewsLetterPageContent />
    </div>
  )
}

export default page
