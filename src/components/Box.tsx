import Image from "next/image";
import Dot from "./dot";
import ViewAll from "./viewAll";
import Rectangle from "../photos/rectangle.svg";
import Simply from "../photos/simply.svg";
import Link from "next/link";
import Dubai from "../photos/Dubai/Group 3 (1) 1.png";

const data = [
  {
    imgSrc: Dubai,
    title: "Real Estate in Dubai",
    description: "Landing page",
  },
  {
    imgSrc: Rectangle,
    title: "Rectangle",
    description: "Product Design, Icon design",
  },
  {
    imgSrc: Simply,
    title: "Simply",
    description: "Landing page, Illustration design",
  },
];

const Box = () => {
  return (
    <div className="flex justify-center items-center w-full bg-imgBorderColor rounded-lg p-6 mt-8 flex-col dark:bg-projectsBoxWhiteMode max-sm:p-2">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center gap-2">
          <Dot color="bg-dotColor" />
          <p className="text-systemText font-semibold text-xl dark:text-systemTextWhiteMode">
            Projects
          </p>
        </div>
        <Link href="/projects">
          <ViewAll />
        </Link>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer dark:bg-white dark:border-white"
        >
          <div className="flex justify-center items-center gap-4 max-sm:flex-col max-sm:justify-start max-sm:items-start">
            <Image
              className="border-imgBorderColor rounded-full max-sm:w-14 max-sm:h-14"
              src={item.imgSrc}
              alt="img"
              width={65}
              height={65}
            />

            <div>
              <p className="text-xl text-white font-medium dark:text-black">
                {item.title}
              </p>
              <p className="text-lg font-medium text-systemText dark:text-systemTextWhiteMode">
                {item.description}
              </p>
            </div>
          </div>
          <a
            href="https://real-estate-dubai-next-js.vercel.app/"
            target="_blank"
          >
            <i className="fi fi-rr-angle-small-right flex justify-center items-center text-2xl text-systemText max-sm:hidden"></i>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Box;
