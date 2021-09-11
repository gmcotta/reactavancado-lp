import React from 'react'
import { GetStaticProps } from 'next'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api'

const Index = ({
  logo,
  header,
  aboutSection,
  techSection,
  conceptsSection,
  modulesSection,
  agendaSection,
  pricingBoxSection,
  aboutUsSection,
  reviewSection,
  faqSection,
  footer
}: LandingPageProps) => {
  console.log(pricingBoxSection)
  return (
    <>
      <SectionHero logo={logo} header={header} />
      <SectionAboutProject aboutSection={aboutSection} />
      <SectionTech techSection={techSection} />
      <SectionConcepts conceptsSection={conceptsSection} />
      <SectionModules modulesSection={modulesSection} />
      <SectionAgenda agendaSection={agendaSection} />
      <PricingBox pricingBox={pricingBoxSection} />
      <SectionAboutUs aboutUsSection={aboutUsSection} />
      <SectionReviews reviewsSection={reviewSection} />
      <SectionFaq faqSection={faqSection} />
      <Footer footer={footer} />
      <JsonSchema />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  console.log(landingPage)

  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
