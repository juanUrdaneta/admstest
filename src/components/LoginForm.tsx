"use client";

import { authApp } from "@/lib/firebase";
import useAuth from "@/lib/hooks/auth";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

const LoginForm = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log(authApp.currentUser);
    authApp.onAuthStateChanged((user) => {
      if (user) {
        router.push("/dashboard");
      }
    });
  }, [router]);

  if (authApp.currentUser) {
    return (
      <div>
        <p>Redirecting...</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col w-[500px]"
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData(e.currentTarget);
          const email = formData.get("email") as string;
          const password = formData.get("password") as string;
          await auth.signInWithCredentials(email, password);
          router.push("/dashboard");
        } catch (err) {
          alert("Invalid credentials");
          console.info(JSON.stringify(err));
        }
      }}
    >
      <div className="mb-4 flex flex-col">
        <label className="text-black" htmlFor="email">
          Email
        </label>
        <input
          className="px-4 py-2 rounded border-black border text-black"
          type="text"
          name="email"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="text-black" htmlFor="password">
          Password
        </label>
        <input
          className="px-4 py-2 rounded border-black border text-black"
          type="password"
          name="password"
          id=""
        />
      </div>
      <button className="px-4 py-2 bg-black text-white rounded mt-4 font-semibold" type="submit">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
