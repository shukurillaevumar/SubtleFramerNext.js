const Form = () => {
  return (
    <form className="flex justify-center items-center flex-col w-full">
      <div className="flex justify-between w-full gap-4 mt-10">
        <input
          type="text"
          className="w-full p-3 bg-imgBorderColor rounded-lg text-white"
          placeholder="Name"
        />
        <input
          type="email"
          className="w-full p-3 bg-imgBorderColor rounded-lg text-white"
          placeholder="Email"
        />
      </div>
      <textarea
        className="w-full mt-5 rounded-lg p-3 bg-imgBorderColor text-white min-h-[180px] resize-none overflow-y-auto"
        placeholder="Message"
      />
      <button className="w-full py-5 bg-framerTemplateBg rounded-lg mt-5 font-medium text-white">
        Submit
      </button>
    </form>
  );
};

export default Form;
