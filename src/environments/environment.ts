// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// import { domain, clientId } from '../../auth_config.json';
export const domain: string = "dev-rdmgbje3.us.auth0.com"
export const clientId: string = "fKNvzxn5VWdMdpoA2avrYcfhnRoJsS4t"
const audience: string = "https://express.sample"
const serverUrl: string = "http://localhost:6060"

export const environment = {
  production: false,
  auth: {
    process.env.domain,
    process.env.clientId,
    redirectUri: window.location.origin,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
