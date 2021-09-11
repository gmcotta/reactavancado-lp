const GET_LANDING_PAGE = /* GraphQL */ `
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  fragment logoData on LandingPage {
    logo {
      ...imageData
    }
  }

  fragment headerData on LandingPage {
    header {
      title
      description
      media {
        ...imageData
      }
      button {
        label
        url
      }
    }
  }

  fragment aboutSectionData on LandingPage {
    aboutSection {
      title
      description
      media {
        ...imageData
      }
    }
  }

  fragment techSectionData on LandingPage {
    techSection {
      title
      techIcons {
        icon {
          ...imageData
        }
        title
      }
    }
  }

  fragment conceptsSectionData on LandingPage {
    conceptsSection {
      title
      conceptItem {
        title
      }
    }
  }

  fragment modulesSectionData on LandingPage {
    modulesSection {
      title
      module {
        title
        subtitle
        description
      }
    }
  }

  fragment agendaSectionData on LandingPage {
    agendaSection {
      title
      description
    }
  }

  fragment pricingBoxData on LandingPage {
    pricingBoxSection {
      totalPrice
      installments
      installmentPrice
      benefits
      button {
        label
        url
      }
    }
  }

  fragment aboutUsSectionData on LandingPage {
    aboutUsSection {
      title
      authors {
        media {
          ...imageData
        }
        name
        role
        socialMediaLinks {
          title
          url
        }
        description
      }
    }
  }

  fragment reviewSectionData on LandingPage {
    reviewSection {
      title
      reviews {
        name
        avatar {
          ...imageData
        }
        review
      }
    }
  }

  fragment faqSectionData on LandingPage {
    faqSection {
      title
      question {
        title
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage(id: 1) {
      ...logoData
      ...headerData
      ...aboutSectionData
      ...techSectionData
      ...conceptsSectionData
      ...modulesSectionData
      ...agendaSectionData
      ...pricingBoxData
      ...aboutUsSectionData
      ...reviewSectionData
      ...faqSectionData
      footer
    }
  }
`
export default GET_LANDING_PAGE
