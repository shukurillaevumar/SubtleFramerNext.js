import Image from "next/image";
import Dot from "./dot";
import ViewAll from "./viewAll";
import Morva from "../photos/morva.svg";
import Rectangle from "../photos/rectangle.svg";
import Simply from "../photos/simply.svg";
import Link from "next/link";

const Box = () => {
  return (
    <div className="flex justify-center items-center w-full bg-imgBorderColor rounded-lg p-6 mt-8 flex-col dark:bg-projectsBoxWhiteMode max-sm:p-2">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center gap-2">
          <Dot />
          <p className="text-systemText font-semibold text-xl dark:text-systemTextWhiteMode">
            Projects
          </p>
        </div>
        <Link href="/projects">
          <ViewAll />
        </Link>
      </div>
      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer dark:bg-white dark:border-white">
        <div className="flex justify-center items-center gap-4 max-sm:flex-col max-sm:justify-start max-sm:items-start">
          <Image
            className="border-8 border-imgBorderColor rounded-full max-sm:w-14 max-sm:h-14"
            src={Morva}
            alt="img"
            width={65}
            height={65}
          />
          <div>
            <p className="text-xl text-white font-medium dark:text-black">
              Morva Labs
            </p>
            <p className="text-lg font-medium text-systemText dark:text-systemTextWhiteMode">
              Visual Design, Branding
            </p>
          </div>
        </div>
        <i className="fi fi-rr-angle-small-right flex justify-center items-center text-2xl text-systemText max-sm:hidden"></i>
      </div>

      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer dark:bg-white dark:border-white">
        <div className="flex justify-center items-center gap-4 max-sm:flex-col max-sm:justify-start max-sm:items-start">
          <Image
            className="border-8 border-imgBorderColor rounded-full max-sm:w-14 max-sm:h-14"
            src={Rectangle}
            alt="img"
            width={65}
            height={65}
          />
          <div>
            <p className="text-xl text-white font-medium dark:text-black">
              Rectangle
            </p>
            <p className="text-lg font-medium text-systemText dark:text-systemTextWhiteMode">
              Product Design, Icon design
            </p>
          </div>
        </div>
        <i className="fi fi-rr-angle-small-right flex justify-center items-center text-2xl text-systemText max-sm:hidden"></i>
      </div>

      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer dark:bg-white dark:border-white">
        <div className="flex justify-center items-center gap-4 max-sm:flex-col max-sm:justify-start max-sm:items-start">
          <Image
            className="border-8 border-imgBorderColor rounded-full max-sm:w-14 max-sm:h-14"
            src={Simply}
            alt="img"
            width={65}
            height={65}
          />
          <div>
            <p className="text-xl text-white font-medium dark:text-black">
              Simply
            </p>
            <p className="text-lg font-medium text-systemText dark:text-systemTextWhiteMode">
              Landing page, Illustration design
            </p>
          </div>
        </div>
        <i className="fi fi-rr-angle-small-right flex justify-center items-center text-2xl text-systemText max-sm:hidden"></i>
      </div>
    </div>
  );
};

export default Box;
