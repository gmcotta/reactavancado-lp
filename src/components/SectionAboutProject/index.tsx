import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { AboutSectionProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type SectionAboutProps = {
  aboutSection: AboutSectionProps
}

const SectionAboutProject = ({ aboutSection }: SectionAboutProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={getImageUrl(aboutSection.media.url)}
            type="image/webp"
          />
          <source
            srcSet={getImageUrl(aboutSection.media.url)}
            type="image/png"
          />
          <img
            src={getImageUrl(aboutSection.media.url)}
            loading="lazy"
            alt={aboutSection.media.alternativeText}
          />
        </S.Image>
        <div>
          <Heading>{aboutSection.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{ __html: aboutSection.description }}
          />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
