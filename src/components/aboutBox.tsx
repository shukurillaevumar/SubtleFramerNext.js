import Image from "next/image";

import Portafo from "../photos/portafo.avif";
import FakturInvoice from "../photos/faktur invoice.svg";
import SubtleFolio from "../photos/subtle folio.avif";
import FramerTemplate from "./framerTemplate";

const data = [
  {
    imgSrc: Portafo,
    title: "Portafo",
  },
  {
    imgSrc: FakturInvoice,
    title: "Faktur Invoice",
  },
  {
    imgSrc: SubtleFolio,
    title: "SubtleFolio",
  },
  {
    imgSrc: Portafo,
    title: "Portafo",
  },
];

const AboutBox = () => {
  return (
    <div className="flex justify-center items-center w-full bg-imgBorderColor rounded-lg p-6 mt-8 flex-col gap-4 dark:bg-projectsBoxWhiteMode max-sm:p-2">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor cursor-pointer dark:bg-white dark:border-white"
        >
          <div className="flex justify-center items-center gap-4">
            <Image
              className="border-2 border-imgBorderColor rounded-full"
              src={item.imgSrc}
              alt="img"
              width={40}
              height={40}
            />
            <p className="text-xl text-white font-medium dark:text-black">
              {item.title}
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <FramerTemplate />
            <i className="fi fi-rr-arrow-up-right flex justify-center items-center text-sm text-systemText"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutBox;
