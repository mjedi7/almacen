// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { url } from "inspector";

// export const environment = {
//   production: false
// };

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyChy6wZLk_OwgP_Zs8rWlcI29DRwkBCafM",
    authDomain: "contacto-9f96c.firebaseapp.com",
    projectId: "contacto-9f96c",
    storageBucket: "contacto-9f96c.appspot.com",
    messagingSenderId: "707598495946",
    appId: "1:707598495946:web:1708c22c2aa5aa904c4433",
    measurementId: "G-X89XNXH6TT"
  },
    url_api: 'http://172.16.0.100:4200'
   //uri_api:   'http://172.16.0.148:3000'
   //uri_api:   'http://localhost:3000'
  // uri_api: 'http://172.16.0.4:3001'


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.