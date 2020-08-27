import React from 'react'
import { technologies } from '../../../../util/technologies'
import { TechnologyCard } from './TechnologyCard'

export const KotlinCard = ({ ...other }) => {
  const { name, link } = technologies.KOTLIN

  return (
    <TechnologyCard name={name} url={link} {...other}>
      <svg viewBox="0 0 8.64 8.64">
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1="2.039"
          x2="9.95"
          y1="11.659"
          y2="3.748"
        >
          <stop offset=".108" stopColor="#c757bc" />
          <stop offset=".173" stopColor="#cd5ca9" />
          <stop offset=".492" stopColor="#e8744f" />
          <stop offset=".716" stopColor="#f88316" />
          <stop offset=".823" stopColor="#ff8900" />
        </linearGradient>
        <linearGradient id="b" gradientUnits="userSpaceOnUse">
          <stop offset=".296" stopColor="#00afff" />
          <stop offset=".694" stopColor="#5282ff" />
          <stop offset="1" stopColor="#945dff" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="3.369"
          x2="6.073"
          xlinkHref="#b"
          y1="6.189"
          y2="3.484"
        />
        <linearGradient
          id="d"
          x1="6.184"
          x2="10.04"
          xlinkHref="#b"
          y1="13.878"
          y2="10.022"
        />
        <g transform="matrix(1.016327 0 0 1.016327 -3.52726 -3.909123)">
          <path
            d="m7.74 3.843-4.27 4.487v4.013l4.262-4.27 4.24-4.232z"
            fill="url(#a)"
          />
          <path d="m3.47 12.344 4.262-4.27 4.24 4.27z" fill="url(#d)" />
          <path d="m3.47 3.843h4.27l-4.27 4.487z" fill="url(#c)" />
        </g>
      </svg>
    </TechnologyCard>
  )
}
