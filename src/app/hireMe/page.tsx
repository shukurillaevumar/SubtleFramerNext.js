import Available from "@/components/available";
import Dot from "@/components/dot";
import Footer from "@/components/footer";
import Form from "@/components/form";

const HireMeSection = () => {
  return (
    <div className="max-sm:w-full max-sm:p-2">
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
    </div>
  );
};

export default HireMeSection;
