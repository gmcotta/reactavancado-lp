import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import content from './content'
import * as S from './styles'
import { ModulesSectionProps } from 'types/api'

type SectionModulesProps = {
  modulesSection: ModulesSectionProps
}

const SectionModules = ({ modulesSection }: SectionModulesProps) => (
  <Container>
    <Heading reverseColor>{modulesSection.title}</Heading>

    <S.Content>
      {modulesSection.module.map(({ title, subtitle, description }, index) => (
        <CardModule key={index} title={title} subTitle={subtitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
