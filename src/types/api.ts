export type ImageProps = {
  alternativeText: string
  url: string
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

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  aboutSection: AboutSectionProps
  techSection: TechSectionProps
  conceptsSection: ConceptsSectionProps
  modulesSection: ModulesSectionProps
}
