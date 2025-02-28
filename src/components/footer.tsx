import CopyEmail from "./copyEmail";
import Creators from "./creators";
import FollowMe from "./followMe";
import HireMe from "./hireMeBtn";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-20">
      <p className="text-5xl text-white font-medium dark:text-black">
        Let’s work together.
      </p>
      <p className="text-xl font-medium text-systemText mt-4 dark:text-systemTextWhiteMode">
        Creating user experience and visual appealing design
      </p>
      <div className="flex justify-center items-center gap-4 mt-6">
        <HireMe />
        <CopyEmail />
      </div>
      <FollowMe />
      <Creators />
    </div>
  );
};

export default Footer;
