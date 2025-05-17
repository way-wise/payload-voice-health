import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Footer } from '@/payload-types'

import CustomFooter from '@/components/global/Footer'

export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as Footer

  return <CustomFooter data={footerData} />
}
