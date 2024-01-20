import ListCard from "./components/listView/ListCard";
import CategoryIcon from "./components/categoryIcons/CategoryIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ListCard />
      <CategoryIcon />
    </main>
  );
}
