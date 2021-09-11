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

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  aboutSection: AboutSectionProps
}
