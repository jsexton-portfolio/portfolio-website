import React from 'react'
import { technologies } from '../../../shared/technologies'
import { TechnologyCard } from './TechnologyCard'

export const ServerlessFrameworkCard = ({ ...other }) => {
  const { name, link } = technologies.SERVERLESS_FRAMEWORK

  return (
    <TechnologyCard name={name} url={link} {...other}>
      <svg
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 256 256"
      >
        <path
          d="M0 161.202h45.312l-14.039 42.396H0v-42.396zM0 80.6h72l-14.036 42.396H0V80.601zM0 0h98.692l-14.04 42.395H0V0zm143.349 0H256v42.395H129.312L143.349 0zM116.66 80.6H256v42.397H102.622l14.038-42.396zm-26.69 80.602H256v42.396H75.933l14.037-42.396z"
          fill="#F26D61"
        />
      </svg>
    </TechnologyCard>
  )
}
