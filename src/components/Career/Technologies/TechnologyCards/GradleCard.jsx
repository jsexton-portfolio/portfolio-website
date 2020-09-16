import React from 'react'
import { technologies } from '../../../shared/technologies'
import { TechnologyCard } from './TechnologyCard'

export const GradleCard = ({ ...other }) => {
  const { name, link } = technologies.GRADLE

  return (
    <TechnologyCard name={name} url={link} {...other}>
      <svg viewBox="0 0 257 257" preserveAspectRatio="xMidYMid">
        <path
          d="M105.61 45.74h72.158l36.4 63.049h41.569C246.274 47.342 193.172.291 129.077.291c-16.21 0-31.702 3.039-45.978 8.53l22.51 36.92"
          fill="#006533"
        />
        <path
          d="M216.098 146.763l-38.33 66.39H81.112l-48.327-83.706 38.61-66.875-21.332-34.988C20.153 51.047.913 87.492.913 128.454c0 70.783 57.381 128.164 128.164 128.164 64.564 0 117.953-47.749 126.84-109.855h-39.82"
          fill="#82B816"
        />
        <path
          d="M174.51 128.115c0 25.28-20.493 45.773-45.773 45.773-25.28 0-45.772-20.493-45.772-45.773 0-25.28 20.493-45.773 45.772-45.773 25.28 0 45.773 20.493 45.773 45.773"
          fill="#006532"
        />
      </svg>
    </TechnologyCard>
  )
}
