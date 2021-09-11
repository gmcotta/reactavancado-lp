const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logoData on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment headerData on LandingPage {
    header {
      title
      description
      media {
        alternativeText
        url
      }
      button {
        label
        url
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage(id: 1) {
      ...logoData
      ...headerData
    }
  }
`
export default GET_LANDING_PAGE
