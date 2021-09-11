import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { AgendaSectionProps } from 'types/api'

type SectionAgendaProps = {
  agendaSection: AgendaSectionProps
}
const SectionAgenda = ({ agendaSection }: SectionAgendaProps) => (
  <Container id="agenda">
    <Heading reverseColor>{agendaSection.title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: agendaSection.description }} />
  </Container>
)

export default SectionAgenda
