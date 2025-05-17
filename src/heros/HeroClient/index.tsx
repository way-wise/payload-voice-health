import HeroSection from '@/components/global/Hero'
import type { Page } from '@/payload-types'

export const HeroClient = ({ data }: { data: Page['hero'] }) => {
  return <HeroSection data={data} />
}
