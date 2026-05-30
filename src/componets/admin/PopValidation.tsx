type PopControl = {
  popControl: React.Dispatch<React.SetStateAction<boolean>>;
};
function PopValidation(props: PopControl) {
  return (
    <div className="flex justify-center w-full  -mt-8  absolute z-10">
      <div className="bg-gray-100 pt-10 pb-10 pl-5 pr-5 flex justify-center w-full h-120 rounded-md">
        <div className="w-full">
          <span className="flex w-full justify-end ">
            <i
              className="fa fa-xmark text-[1.5rem]"
              onClick={() => props.popControl(false)}
            ></i>
          </span>
          <div className="bg-[#aca6a6] w-full mt-10 h-fit rounded-md pt-5 pl-2 pr-2 pb-5 flex flex-col gap-2 font-medium text-[1.1rem]">
            <span className="flex gap-2">
              <h5>Email:</h5>
              <h5>nwanoruovictory@gmail.com</h5>
            </span>
            <span className="flex gap-2">
              <h5>Amount: </h5>
              <h5>₦3,500</h5>
            </span>
            <span className="flex gap-2">
              <h5>Date: </h5>
              <h5>29/05/2026</h5>
            </span>
            <span className="flex gap-2">
              <h5>Status: </h5>
              <h5 className="text-orange-400">pending</h5>
            </span>
          </div>
          <button className="mt-10 w-full pl-4 pr-4 pt-4 pb-4 border-2 border-green-800 bg-green-800 text-gray-200 font-bold text-[1.2rem] rounded-2xl">
            I've seen payment
          </button>
        </div>
      </div>
    </div>
  );
}
export default PopValidation;
