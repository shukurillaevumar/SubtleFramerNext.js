import Available from "./available";
import Box from "./Box";
import CopyEmail from "./copyEmail";
import Dot from "./dot";
import HireMe from "./hireMeBtn";
import UserPhoto from "@/photos/user-photo.avif";
import Image from "next/image";
import ProductsBox from "./productsBox";
import Footer from "@/components/footer";

const Main = () => {
  return (
    <div className="w-full flex justify-between items-center bg-systemColor mt-4 border rounded-lg border-borderColor p-8 dark:bg-white dark:shadow-md dark:border-white flex-col">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center gap-2">
          <Dot />
          <p className="text-systemText font-semibold text-xl dark:text-systemTextWhiteMode">
            Product Designer
          </p>
        </div>
        <Available />
      </div>
      <div className="w-full flex justify-between items-center mt-4">
        <div>
          <p className="text-4xl font-bold text-white dark:text-black">
            I’m Brian Do
          </p>
          <p className="text-xl text-systemText font-medium mt-2 dark:text-systemTextWhiteMode">
            Product designer from Jakarta, ID. <br />
            Currently designing at Rectangle.
          </p>
          <div className="flex justify-start items-center gap-3 mt-4">
            <HireMe />
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
      <Footer />
    </div>
  );
};

export default Main;
