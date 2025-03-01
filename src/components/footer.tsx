import Link from "next/link";
import CopyEmail from "./copyEmail";
import Creators from "./creators";
import FollowMe from "./followMe";
import HireMe from "./hireMeBtn";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-20">
      <p className="text-5xl text-white font-medium dark:text-black max-sm:text-center max-sm:text-4xl">
        Let’s work together.
      </p>
      <p className="text-xl font-medium text-systemText mt-4 dark:text-systemTextWhiteMode max-sm:text-center">
        Creating user experience and visual appealing design
      </p>
      <div className="flex justify-center items-center gap-4 mt-6">
        <Link href="/hireMe">
          <HireMe />
        </Link>
        <CopyEmail />
      </div>
      <FollowMe />
      <Creators />
    </div>
  );
};

export default Footer;
