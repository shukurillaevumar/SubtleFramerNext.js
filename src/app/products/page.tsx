import Dot from "@/components/dot";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import ProductsBox from "@/components/productsBox";

const ProductsSection = () => {
  return (
    <div className="w-1/3 mx-auto">
      <Menu />
      <div className="bg-systemColor border rounded-lg border-borderColor p-8 dark:bg-white dark:shadow-md dark:border-white mt-4">
        <div className="flex justify-start items-center gap-3">
          <Dot />
          <p className="text-systemText font-semibold text-xl">Products</p>
        </div>
        <p className="text-4xl font-medium text-white mt-10">
          Explore My Products
        </p>
        <p className="text-xl text-systemText font-medium mt-4">
          Some of the digital products that I worked on as side projects,
          explore and try it now
        </p>
        <ProductsBox />
        <Footer />
      </div>
    </div>
  );
};

export default ProductsSection;
