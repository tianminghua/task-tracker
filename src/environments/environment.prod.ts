const domain: string = "dev-rdmgbje3.us.auth0.com"
const clientId: string = "fKNvzxn5VWdMdpoA2avrYcfhnRoJsS4t"

export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
};
