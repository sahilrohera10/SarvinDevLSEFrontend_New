import IntroductoryPage from "./components/IntroductoryPage";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#f8f9ff",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        height: "100vh",
      }}
    >
      <IntroductoryPage />
    </main>
  );
}
