import Main from "@/components/main";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <div className="w-1/3 mx-auto max-sm:w-full p-2">
      <Menu />
      <Main />
    </div>
  );
}
