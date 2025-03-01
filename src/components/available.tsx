const Available = () => {
  return (
    <div className="flex justify-center items-center gap-2 bg-availableBg p-2 rounded-full dark:bg-availableWhiteMode max-sm:hidden">
      <div className="bg-greenDot w-2 h-2 rounded-full"></div>
      <p className="text-availableColorText text-sm font-medium tracking-wide">
        AVAILABLE FOR WORK
      </p>
    </div>
  );
};

export default Available;
