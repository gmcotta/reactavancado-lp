import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import content from './content'
import * as S from './styles'
import { ConceptsSectionProps } from 'types/api'

type SectionConceptsProps = {
  conceptsSection: ConceptsSectionProps
}

const SectionConcepts = ({ conceptsSection }: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{conceptsSection.title}</Heading>
      <S.List>
        {conceptsSection.conceptItem.map((item) => (
          <S.Item key={item.title}>{item.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
