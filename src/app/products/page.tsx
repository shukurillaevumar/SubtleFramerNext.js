import Dot from "@/components/dot";
import ProductsBox from "@/components/productsBox";

const ProductsSection = () => {
  return (
    <div className="max-sm:w-full max-sm:p-2">
      <div className="flex justify-start items-center gap-3">
        <Dot />
        <p className="text-systemText font-semibold text-xl dark:text-systemTextWhiteMode">
          Products
        </p>
      </div>
      <p className="text-4xl font-medium text-white mt-10 dark:text-black">
        Explore My Products
      </p>
      <p className="text-xl text-systemText font-medium mt-4 dark:text-systemTextWhiteMode">
        Some of the digital products that I worked on as side projects, explore
        and try it now
      </p>
      <ProductsBox />
    </div>
  );
};

export default ProductsSection;
