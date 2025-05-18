import Image from "next/image";
import Dubai from "../photos/Dubai/Group 3 (1) 1.png";
import CarpetUz from "../photos/Carpet-uz/logo.a3e69958234a62197b0a.png";
import Zamon from "../photos/Zamon/zamon.svg";

const data = [
  {
    imgSrc: Dubai,
    title: "Real Estate in Dubai",
    description: "Landing page",
    link: "https://real-estate-dubai-next-js.vercel.app/",
  },
  {
    imgSrc: CarpetUz,
    title: "Clean-carp",
    description: "Landing page",
    link: "https://carpet-uz.vercel.app/",
  },
  {
    imgSrc: Zamon,
    title: "Zamon Businness Travel",
    description: "Landing page, Illustration design",
    link: "https://zamon-businness-travel.vercel.app/",
  },
];

const ProjectsBox = () => {
  return (
    <div className="flex justify-center items-center w-full bg-imgBorderColor rounded-lg p-6 flex-col dark:bg-projectsBoxWhiteMode max-sm:p-2">
      {data.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer dark:bg-white dark:border-white"
        >
          <div className="flex justify-center items-center gap-4 max-sm:flex-col max-sm:justify-start max-sm:items-start">
            <Image
              className="border-imgBorderColor  "
              src={item.imgSrc}
              alt="img"
              width={90}
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

          <i className="fi fi-rr-angle-small-right flex justify-center items-center text-2xl text-systemText"></i>
        </a>
      ))}
    </div>
  );
};

export default ProjectsBox;
