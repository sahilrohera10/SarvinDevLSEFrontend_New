import { Nunito_Sans as Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import SignUpBrand from "../../src/app/components/SignUpBrands";
import "../../src/app/globals.css";

export default function signupbrand() {
  return (
    <main
      style={{
        overflowX: "hidden",
        scrollBehavior: "smooth",
        height: "100vh",
      }}
      className={inter.className}
    >
      <SignUpBrand />
    </main>
  );
}
