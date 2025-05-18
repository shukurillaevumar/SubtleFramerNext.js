import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="container mx-auto max-sm:w-full max-sm:p-2 bg-systemColor border border-borderColor dark:border-white rounded-lg p-8 dark:bg-white dark:shadow-md mt-4">
      {children}
    </div>
  );
};

export default PageWrapper;
