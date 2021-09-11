export type ImageProps = {
  alternativeText: string
  url: string
}

export type SocialMediaLinksProps = {
  title: string
  url: string
}

export type AuthorProps = {
  media: ImageProps
  name: string
  role: string
  socialMediaLinks: SocialMediaLinksProps[]
  description: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  media: ImageProps
  button: {
    label: string
    url: string
  }
}

export type AboutSectionProps = {
  title
  description
  media: ImageProps
}

export type TechSectionProps = {
  title: string
  techIcons: {
    icon: ImageProps
    title: string
  }[]
}

export type ConceptsSectionProps = {
  title: string
  conceptItem: {
    title: string
  }[]
}

export type ModulesSectionProps = {
  title: string
  module: {
    title: string
    subtitle: string
    description: string
  }[]
}

export type AgendaSectionProps = {
  title: string
  description: string
}

export type PricingBoxSectionProps = {
  totalPrice: number
  installments: number
  installmentPrice: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type AboutUsSectionProps = {
  title: string
  authors: AuthorProps[]
}

export type ReviewsSectionProps = {
  title: string
  reviews: {
    name: string
    avatar: ImageProps
    review: string
  }[]
}

export type FaqSectionProps = {
  title: string
  question: {
    title: string
    answer: string
  }[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  aboutSection: AboutSectionProps
  techSection: TechSectionProps
  conceptsSection: ConceptsSectionProps
  modulesSection: ModulesSectionProps
  agendaSection: AgendaSectionProps
  pricingBoxSection: PricingBoxSectionProps
  aboutUsSection: AboutUsSectionProps
  reviewSection: ReviewsSectionProps
  faqSection: FaqSectionProps
  footer: string
}
