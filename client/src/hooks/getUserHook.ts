import { CognitoUserSession } from "amazon-cognito-identity-js";
import { useEffect, useState } from "react";
import { COGNITO_USER_POOL } from "../services/cognito.service";
export function getUserFromSession() {
  const [user, setUser] = useState<string | null>();
  useEffect(() => {
    const user = COGNITO_USER_POOL.getCurrentUser();
    if (user) {
      user.getSession((err: any, session: CognitoUserSession) => {
        if (err) {
          console.error(err);
          return;
        }
        setUser(session.getIdToken().getJwtToken());
      });
    }
  }, []);

  return user;
}
