import React from 'react'

import Container from 'components/Container'

import * as S from './styles'

type FooterProps = {
  footer: string
}

const Footer = ({ footer }: FooterProps) => (
  <S.Wrapper>
    <Container>
      <div dangerouslySetInnerHTML={{ __html: footer }} />
    </Container>
  </S.Wrapper>
)

export default Footer
