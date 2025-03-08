import Dot from "./dot";

const FollowMe = () => {
  return (
    <div className="flex justify-between items-center w-full bg-imgBorderColor p-4 rounded-lg mt-10 dark:bg-projectsBoxWhiteMode">
      <div className="flex justify-center items-center gap-1">
        <Dot color="bg-dotColor" />
        <p className="text-xl font-medium text-systemText dark:text-systemTextWhiteMode max-sm:text-lg">
          Follow Me
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 max-sm:gap-2">
        <i className="fi fi-brands-twitter-alt flex justify-center items-center rounded-full text-white p-2 bg-systemColor text-lg dark:bg-white dark:text-black"></i>
        <i className="fi fi-brands-instagram flex justify-center items-center rounded-full text-white p-2 bg-systemColor text-lg dark:bg-white dark:text-black"></i>
        <i className="fi fi-rr-tennis flex justify-center items-center rounded-full text-white p-2 bg-systemColor text-lg dark:bg-white dark:text-black"></i>
        <i className="fi fi-brands-linkedin flex justify-center items-center rounded-full text-white p-2 bg-systemColor text-lg dark:bg-white dark:text-black"></i>
      </div>
    </div>
  );
};

export default FollowMe;
