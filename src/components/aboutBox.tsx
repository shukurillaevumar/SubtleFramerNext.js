import Image from "next/image";
import Dot from "./dot";
import Portafo from "../photos/portafo.avif";
import FakturInvoice from "../photos/faktur invoice.svg";
import SubtleFolio from "../photos/subtle folio.avif";
import FramerTemplate from "./framerTemplate";

const AboutBox = () => {
  return (
    <div className="flex justify-center items-center w-full bg-imgBorderColor rounded-lg p-6 mt-8 flex-col">
      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer">
        <div className="flex justify-center items-center gap-4">
          <Image
            className="border-2 border-imgBorderColor rounded-full"
            src={Portafo}
            alt="img"
            width={40}
            height={40}
          />
          <p className="text-xl text-white font-medium">Portafo</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <FramerTemplate />
          <i className="fi fi-rr-arrow-up-right flex justify-center items-center text-sm text-systemText"></i>
        </div>
      </div>
      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer">
        <div className="flex justify-center items-center gap-4">
          <Image
            className="border-2 border-imgBorderColor rounded-full"
            src={FakturInvoice}
            alt="img"
            width={40}
            height={40}
          />
          <p className="text-xl text-white font-medium">Faktur Invoice</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <FramerTemplate />
          <i className="fi fi-rr-arrow-up-right flex justify-center items-center text-sm text-systemText"></i>
        </div>
      </div>

      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer">
        <div className="flex justify-center items-center gap-4">
          <Image
            className="border-2 border-imgBorderColor rounded-full"
            src={SubtleFolio}
            alt="img"
            width={40}
            height={40}
          />
          <p className="text-xl text-white font-medium">Subtle Folio</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <FramerTemplate />
          <i className="fi fi-rr-arrow-up-right flex justify-center items-center text-sm text-systemText"></i>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
