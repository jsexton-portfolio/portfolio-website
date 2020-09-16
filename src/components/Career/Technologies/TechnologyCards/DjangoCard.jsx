import React from 'react'
import { technologies } from '../../../shared/technologies'
import { TechnologyCard } from './TechnologyCard'

export const DjangoCard = ({ ...other }) => {
  const { name, link } = technologies.DJANGO

  return (
    <TechnologyCard name={name} url={link} {...other}>
      <svg
        fill="#092e20"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m27.724 0h10.476v48.44c-5.368 1.02-9.3 1.427-13.6 1.427-12.776 0-19.435-5.776-19.435-16.853 0-10.67 7.068-17.6 18.008-17.6 1.7 0 3 .135 4.553.543zm0 24.383c-1.223-.407-2.242-.543-3.533-.543-5.3 0-8.36 3.262-8.36 8.97 0 5.573 2.922 8.63 8.3 8.63 1.155 0 2.106-.068 3.6-.27zm27.113-8.223v24.26c0 8.36-.612 12.368-2.446 15.833-1.7 3.33-3.942 5.436-8.562 7.747l-9.718-4.62c4.62-2.174 6.863-4.076 8.3-7 1.495-3 1.97-6.456 1.97-15.56v-20.66zm-10.465-16.104h10.465v10.737h-10.465z" />
      </svg>
    </TechnologyCard>
  )
}
