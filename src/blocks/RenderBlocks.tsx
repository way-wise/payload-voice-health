import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { HomeTestimonialsBlock } from '@/blocks/HomeTestimonials/Component'
import { HomeStatsBlock } from '@/blocks/HomeStats/Component'
import { HomeClientsBlock } from '@/blocks/HomeClients/Component'
import { HomeFeatureBlock } from '@/blocks/HomeFeature/Component'
import { HomeBenefitsBlock } from './HomeBenefits/Component'
import { HomeIntegrationBlock } from './HomeIntegration/Component'
import { HomeContactBlock } from './HomeContact/Component'
import { PageIntroBlock } from './PageIntro/Component'
import ParagraphBlock from './ParagraphBlock/Component'
import ListBlock from './ListBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  homeTestimonials: HomeTestimonialsBlock,
  homeStats: HomeStatsBlock,
  homeClients: HomeClientsBlock,
  homeFeature: HomeFeatureBlock,
  homeContact: HomeContactBlock,
  homeIntegration: HomeIntegrationBlock,
  homeBenefits: HomeBenefitsBlock,
  pageIntro: PageIntroBlock,
  paragraphBlock: ParagraphBlock,
  listBlock: ListBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                // @ts-expect-error there may be some mismatch between the expected types here
                <Block {...block} disableInnerContainer key={index} />
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
