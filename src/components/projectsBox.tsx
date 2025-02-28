import Image from "next/image";
import Footer from "@/components/footer";
import Morva from "../photos/morva.svg";
import Rectangle from "../photos/rectangle.svg";
import Simply from "../photos/simply.svg";
import Glassador from "../photos/glassador.svg";
import SevenLtd from "../photos/Seven LTD.svg";

const ProjectsBox = () => {
  return (
    <div className="flex justify-center items-center w-full bg-imgBorderColor rounded-lg p-6 mt-8 flex-col">
      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer">
        <div className="flex justify-center items-center gap-4">
          <Image
            className="border-8 border-imgBorderColor rounded-full"
            src={Morva}
            alt="img"
            width={65}
            height={65}
          />
          <div>
            <p className="text-xl text-white font-medium">Morva Labs</p>
            <p className="text-lg font-medium text-systemText">
              Visual Design, Branding
            </p>
          </div>
        </div>
        <i className="fi fi-rr-angle-small-right flex justify-center items-center text-2xl text-systemText"></i>
      </div>

      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer">
        <div className="flex justify-center items-center gap-4">
          <Image
            className="border-8 border-imgBorderColor rounded-full"
            src={Rectangle}
            alt="img"
            width={65}
            height={65}
          />
          <div>
            <p className="text-xl text-white font-medium">Rectangle</p>
            <p className="text-lg font-medium text-systemText">
              Product Design, Icon design
            </p>
          </div>
        </div>
        <i className="fi fi-rr-angle-small-right flex justify-center items-center text-2xl text-systemText"></i>
      </div>

      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer">
        <div className="flex justify-center items-center gap-4">
          <Image
            className="border-8 border-imgBorderColor rounded-full"
            src={Simply}
            alt="img"
            width={65}
            height={65}
          />
          <div>
            <p className="text-xl text-white font-medium">Simply</p>
            <p className="text-lg font-medium text-systemText">
              Landing page, Illustration design
            </p>
          </div>
        </div>
        <i className="fi fi-rr-angle-small-right flex justify-center items-center text-2xl text-systemText"></i>
      </div>

      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer">
        <div className="flex justify-center items-center gap-4">
          <Image
            className="border-8 border-imgBorderColor rounded-full"
            src={Glassador}
            alt="img"
            width={65}
            height={65}
          />
          <div>
            <p className="text-xl text-white font-medium">Glassador</p>
            <p className="text-lg font-medium text-systemText">
              Icon design, Illustration design
            </p>
          </div>
        </div>
        <i className="fi fi-rr-angle-small-right flex justify-center items-center text-2xl text-systemText"></i>
      </div>

      <div className="flex justify-between items-center w-full bg-boxBg p-4 rounded-lg border border-borderColor mt-4 cursor-pointer">
        <div className="flex justify-center items-center gap-4">
          <Image
            className="border-8 border-imgBorderColor rounded-full"
            src={SevenLtd}
            alt="img"
            width={65}
            height={65}
          />
          <div>
            <p className="text-xl text-white font-medium">Seven LTD.</p>
            <p className="text-lg font-medium text-systemText">
              Branding, Landing page
            </p>
          </div>
        </div>
        <i className="fi fi-rr-angle-small-right flex justify-center items-center text-2xl text-systemText"></i>
      </div>
    </div>
  );
};

export default ProjectsBox;
