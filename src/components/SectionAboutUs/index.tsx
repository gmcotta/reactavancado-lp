import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { AboutUsSectionProps } from 'types/api'

type SectionAboutUsProps = {
  aboutUsSection: AboutUsSectionProps
}

const SectionAboutUs = ({ aboutUsSection }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{aboutUsSection.title}</Heading>

    <S.Content>
      {aboutUsSection.authors.map((profile) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          role={profile.role}
          image={profile.media.url}
          socialLinks={profile.socialMediaLinks}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
