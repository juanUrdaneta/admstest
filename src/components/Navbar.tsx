"use client";
import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { authApp } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  useEffect(() => {
    authApp.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/login");
      }
    });
    if (!authApp.currentUser) {
    }
  }, [router]);

  return (
    <div className="w-screen flex justify-center ">
      <nav className="w-full max-w-[1980px] flex justify-between items-center p-2 border-b-2 border-black">
        <p className="text-3xl font-semibold">
          ADMS<span className="text-sm ml-2">software</span>
        </p>
        <button
          onClick={() => {
            signOut(authApp)
              .then(() => {
                console.log("User signed out");
              })
              .catch((error) => {
                console.error("Error signing out: ", error);
              });
          }}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Log out
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
