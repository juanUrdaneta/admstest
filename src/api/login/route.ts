import { cookies } from "next/headers";
import admin from "@/lib/firebase-admin";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { idToken } = req.body;

  try {
    await admin.auth().verifyIdToken(idToken);

    (await cookies()).set("session", idToken);
    return res.status(200).json({
      message: "Login successful",
      okay: true,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(401).json({ message: "Invalid token", okayL: false });
  }
}
