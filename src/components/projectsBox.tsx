import Image from "next/image";
import Rectangle from "../photos/rectangle.svg";
import Simply from "../photos/simply.svg";
import Glassador from "../photos/glassador.svg";
import SevenLtd from "../photos/Seven LTD.svg";
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
  {
    imgSrc: Glassador,
    title: "Glassador",
    description: "Icon design, Illustration design",
  },
  {
    imgSrc: SevenLtd,
    title: "Seven LTD.",
    description: "Branding, Landing page",
  },
];

const ProjectsBox = () => {
  return (
    <div className="flex justify-center items-center w-full bg-imgBorderColor rounded-lg p-6 mt-8 flex-col gap-4 dark:bg-projectsBoxWhiteMode max-sm:p-2">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor cursor-pointer dark:bg-white dark:border-white"
        >
          <div className="flex justify-center items-center gap-4 max-sm:flex-col max-sm:justify-start max-sm:items-start">
            <Image src={item.imgSrc} alt="img" width={65} height={65} />
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
            <i className="fi fi-rr-angle-small-right flex justify-center items-center text-2xl text-systemText"></i>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsBox;
