import Available from "./available";
import Box from "./Box";
import CopyEmail from "./copyEmail";
import Dot from "./dot";
import HireMe from "./hireMeBtn";
import UserPhoto from "@/photos/user-photo.avif";
import Image from "next/image";
import ProductsBox from "./productsBox";
import GreenDot from "./greenDot";
import Link from "next/link";
import React from "react";

interface AuthorProps {
  name: string;
  description: string;
  label: string;
}

const Main: React.FC<AuthorProps> = ({ name, description, label }) => {
  return (
    <div className="w-full flex justify-between items-center flex-col">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center gap-2">
          <Dot />
          <p className="text-systemText font-semibold text-xl dark:text-systemTextWhiteMode">
            {label}
          </p>
        </div>
        <Available />
        <GreenDot />
      </div>
      <div className="w-full flex justify-between items-center mt-4 flex-row max-sm:flex-col-reverse">
        <div>
          <p className="text-4xl font-bold text-white dark:text-black max-sm:text-center">
            {name}
          </p>
          <p className="text-xl text-systemText font-medium mt-2 dark:text-systemTextWhiteMode max-sm:text-lg max-sm:text-center">
            {description}
          </p>
          <div className="flex justify-start items-center gap-3 mt-4 max-sm:justify-center">
            <Link href="/hireMe">
              <HireMe />
            </Link>
            <CopyEmail />
          </div>
        </div>
        <Image
          className="rounded-full border-8 border-imgBorderColor"
          src={UserPhoto}
          alt="something"
          width={180}
          height={180}
        />
      </div>
      <Box />
      <ProductsBox />
    </div>
  );
};

export default Main;
