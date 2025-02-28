import HireMe from "./hireMeBtn";
import ThemeSwitcher from "./themeSwitcher";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="w-full flex items-center gap-2 bg-systemColor border rounded-lg border-borderColor p-4 mt-3 justify-between dark:bg-white dark:shadow-md dark:border-white sticky top-2">
      <div className="flex justify-center items-center gap-6">
        <Link href="./">
          <i className="fi fi-rr-house-blank text-xl text-systemText"></i>
        </Link>
        <Link href="/about">
          <i className="fi fi-rr-circle-user text-xl text-systemText"></i>
        </Link>
        <Link href="/projects">
          <i className="fi fi-rr-marketplace text-xl text-systemText"></i>
        </Link>
        <Link href="/products">
          <i className="fi fi-rr-basket-shopping-simple text-xl text-systemText"></i>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-4">
        <ThemeSwitcher />
        <Link href="/hireMe">
          <HireMe />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
