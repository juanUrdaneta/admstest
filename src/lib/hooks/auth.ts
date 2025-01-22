import React, { useMemo } from "react";
import { AuthConfig, FirebaseAuth } from "../infra/auth";

export const useAuth = () => {
  const auth = useMemo<AuthConfig>(() => FirebaseAuth.getInstance(), []);

  const [token, setToken] = React.useState<string | null>(null);

  const signInWithCredentials = async (email: string, password: string) => {
    try {
      const token = await auth.signInWithEmailAndPassword(email, password);
      setToken(token);
    } catch (err) {
      throw err;
    }
  };

  return {
    signInWithCredentials,
    token,
  };
};

export default useAuth;
