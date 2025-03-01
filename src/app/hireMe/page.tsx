import Available from "@/components/available";
import Dot from "@/components/dot";
import Footer from "@/components/footer";
import Form from "@/components/form";
import Menu from "@/components/menu";

const HireMeSection = () => {
  return (
    <div className="w-1/3 mx-auto max-sm:w-full max-sm:p-2">
      <Menu />
      <div className="bg-systemColor border rounded-lg border-borderColor p-8 dark:bg-white dark:shadow-md dark:border-white mt-4">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-3">
            <Dot />
            <p className="text-systemText font-semibold text-xl dark:text-systemTextWhiteMode">
              Products
            </p>
          </div>
          <Available />
        </div>
        <p className="text-4xl font-medium text-white mt-10 dark:text-black">
          Design Inquiry
        </p>
        <p className="text-xl text-systemText font-medium mt-4 dark:text-systemTextWhiteMode">
          Got an idea and need design help? Reach out now
        </p>
        <Form />
        <Footer />
      </div>
    </div>
  );
};

export default HireMeSection;
