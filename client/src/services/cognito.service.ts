import { CognitoUserPool, CookieStorage } from "amazon-cognito-identity-js";

export const COGNITO_USER_POOL = new CognitoUserPool({
  // These are save vars to expose to the client (lol)
  UserPoolId: "ap-southeast-2_48VaPpxyU",
  ClientId: "33db3r0hfuj3fs47vhff0h5jje",
  Storage: new CookieStorage({
    domain: "localhost",
    path: "/",
    expires: 365,
    secure: false,
  }),
});
