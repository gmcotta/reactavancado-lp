const GET_LANDING_PAGE = /* GraphQL */ `
  query GET_LANDING_PAGE {
    landingPage(id: 1) {
      logo {
        alternativeText
        url
      }
    }
  }
`
export default GET_LANDING_PAGE
