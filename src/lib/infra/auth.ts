import { signInWithEmailAndPassword, Auth } from "firebase/auth";
import { authApp } from "../firebase";

export interface AuthConfig {
  signInWithEmailAndPassword: (email: string, password: string) => Promise<string>;
}

export class FirebaseAuth implements AuthConfig {
  constructor(private auth: Auth) {}

  private static instance: FirebaseAuth;

  public static getInstance() {
    if (!FirebaseAuth.instance) {
      FirebaseAuth.instance = new FirebaseAuth(authApp);
    }
    return FirebaseAuth.instance;
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    return userCredential.user.getIdToken();
  }
}
