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

  query GET_LANDING_PAGE {
    landingPage(id: 1) {
      ...logoData
      ...headerData
      ...aboutSectionData
      ...techSectionData
    }
  }
`
export default GET_LANDING_PAGE
