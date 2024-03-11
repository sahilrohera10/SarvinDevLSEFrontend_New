import { Nunito_Sans as Inter } from "next/font/google";

import UserProfile from "../../src/app/components/Profile";
import "../../src/app/globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function AccountVerification() {
  return (
    <main
      style={{
        backgroundColor: "#f8f9ff",
        overflow: "hidden",
        scrollBehavior: "smooth",
      }}
      className={inter.className}
    >
      <UserProfile />
    </main>
  );
}
