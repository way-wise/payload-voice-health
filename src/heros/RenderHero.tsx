import React from 'react'

import type { Page } from '@/payload-types'

import { HeroClient } from './HeroClient'

export const RenderHero: React.FC<Page['hero']> = (props) => {
  return <HeroClient />
}
