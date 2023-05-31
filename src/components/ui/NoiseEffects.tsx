import React from 'react'

interface INoiseEffect {
  id: string
}

const NoiseEffects = ({ id }: INoiseEffect) => {
  return (
    <svg>
      <defs>
        <filter id="noise">
          <feTurbulence
            baseFrequency="0.7,0.8"
            seed="0"
            type="fractalNoise"
            result="static"
          >
            <animate
              attributeName="seed"
              values="0;100"
              dur="800ms"
              repeatCount="1"
              begin={`${id}.mouseenter`}
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="static">
            <animate
              attributeName="scale"
              values="0;40;0"
              dur="800ms"
              repeatCount="1"
              begin={`${id}.mouseenter`}
            />
          </feDisplacementMap>
        </filter>
      </defs>
    </svg>
  )
}

export { NoiseEffects }
