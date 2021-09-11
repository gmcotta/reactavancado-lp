import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { TechSectionProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type SectionTechProps = {
  techSection: TechSectionProps
}

const SectionTech = ({ techSection }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{techSection.title}</Heading>
      <S.IconsContainer>
        {techSection.techIcons.map(({ title, icon }) => (
          <S.Icon key={title}>
            <S.Icons
              src={getImageUrl(icon.url)}
              alt={icon.alternativeText}
              loading="lazy"
            />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
