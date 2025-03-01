import Image from "next/image";
import Dot from "./dot";
import Portafo from "../photos/portafo.avif";
import FakturInvoice from "../photos/faktur invoice.svg";
import SubtleFolio from "../photos/subtle folio.avif";
import FramerTemplate from "./framerTemplate";

const ProductsBox = () => {
  return (
    <div className="flex justify-center items-center w-full bg-imgBorderColor rounded-lg p-6 mt-8 flex-col dark:bg-projectsBoxWhiteMode max-sm:p-2">
      <div className="flex justify-start items-center gap-2 w-full">
        <Dot />
        <p className="text-systemText font-semibold text-xl dark:text-systemTextWhiteMode">
          Products
        </p>
      </div>
      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer dark:bg-white dark:border-white">
        <div className="flex justify-center items-center gap-4 ">
          <Image
            className="border-2 border-imgBorderColor rounded-full"
            src={Portafo}
            alt="img"
            width={40}
            height={40}
          />
          <p className="text-xl text-white font-medium dark:text-black">
            Portafo
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 ">
          <FramerTemplate />
          <i className="fi fi-rr-arrow-up-right flex justify-center items-center text-sm text-systemText"></i>
        </div>
      </div>
      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer dark:bg-white dark:border-white">
        <div className="flex justify-center items-center gap-4">
          <Image
            className="border-2 border-imgBorderColor rounded-full"
            src={FakturInvoice}
            alt="img"
            width={40}
            height={40}
          />
          <p className="text-xl text-white font-medium dark:text-black">
            Faktur Invoice
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <FramerTemplate />
          <i className="fi fi-rr-arrow-up-right flex justify-center items-center text-sm text-systemText"></i>
        </div>
      </div>

      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer dark:bg-white dark:border-white">
        <div className="flex justify-center items-center gap-4">
          <Image
            className="border-2 border-imgBorderColor rounded-full"
            src={SubtleFolio}
            alt="img"
            width={40}
            height={40}
          />
          <p className="text-xl text-white font-medium dark:text-black">
            Subtle Folio
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <FramerTemplate />
          <i className="fi fi-rr-arrow-up-right flex justify-center items-center text-sm text-systemText"></i>
        </div>
      </div>

      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer dark:bg-white dark:border-white">
        <div className="flex justify-center items-center gap-4">
          <Image
            className="border-2 border-imgBorderColor rounded-full"
            src={Portafo}
            alt="img"
            width={40}
            height={40}
          />
          <p className="text-xl text-white font-medium dark:text-black">
            Portafo
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <FramerTemplate />
          <i className="fi fi-rr-arrow-up-right flex justify-center items-center text-sm text-systemText"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductsBox;
