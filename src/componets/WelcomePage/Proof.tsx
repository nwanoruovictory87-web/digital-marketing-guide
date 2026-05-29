import proof1 from "/images/googleS1.png";
import proof2 from "/images/googleS2.png";
import proof4 from "/images/proof12.jpg";
import proof5 from "/images/Blessing-k.jpeg";
import proof6 from "/images/kassy.jpg";
import proof7 from "/images/od.png";
import proof8 from "/images/1.png";
import proof9 from "/images/2.png";
import proof10 from "/images/4.png";
import proof11 from "/images/5.png";

function Proof() {
  return (
    <div className="pl-5 pr-5 mt-5 flex justify-center ">
      <div className="rounded-md max-w-200 flex flex-col">
        <span className="flex justify-center ">
          <span className="text-[1.1rem] pb-2 pt-2 border-b-2 border-[#6e6e0696] font-semibold text-gray-100">
            <h2 className="text-center font-bold">
              Can You Really Make Money with Digital Marketing?
            </h2>
          </span>
        </span>
        <span className="flex justify-center mt-3 text-center">
          <h5 className="text-[1.1rem] text-gray-100">
            Before we dive into what <strong>Digital Marketing</strong> is and
            how you can earn from it, let's answer one of the most important
            questions that almost every beginner asks:
            <br />
            <br />
            Is <strong>Digital Marketing / Affiliate Marketing</strong> legit,
            and can you really make money as a digital affiliate marketer?
            <br />
            <br />
            The short answer is yes—but there are a few things you need to
            understand first.
          </h5>
        </span>
        <span className="mt-3">
          <img className="w-full h-full " src={proof1}></img>
        </span>
        <span className="mt-3">
          <img className="w-full h-full " src={proof2}></img>
        </span>
        <span className="flex justify-center mt-3 text-center">
          <h5 className="text-[1.1rem] text-gray-100">
            The image above is a Google search result that proves{" "}
            <strong>Digital Marketing / Affiliate Marketing</strong> is a
            legitimate industry and continues to provide significant earning
            opportunities for marketers worldwide.
          </h5>
        </span>
        <div className=" flex justify-center mt-5">
          <div className="bg-[#07078dde] rounded-md w-fit p-1 h-fit">
            <span className="flex justify-center ">
              <h5 className="text-[1.1rem] pb-2 pt-2 border-b-2 border-[#6e6e0696] font-semibold text-gray-100">
                Success Stories from Digital Marketers
              </h5>
            </span>
            <span className="flex justify-center mt-3 text-center">
              <h5 className="text-[1.1rem] text-gray-100">
                The success stories below are from{" "}
                <strong>Digital / Affiliate Marketers</strong> who took the
                first step, built their online businesses, and are now
                generating income by promoting digital products.
              </h5>
            </span>
            <div className="flex gap-2 flex-wrap sm:grid sm:grid-cols-2 mt-3">
              <span className="w-full h-full">
                <img className="w-full h-full" src={proof6}></img>
              </span>
              <span className="w-full h-full">
                <img className="w-full h-full" src={proof5}></img>
              </span>
              <span className="w-full h-full">
                <img className="w-full h-full" src={proof7}></img>
              </span>
              <span className="w-full h-full">
                <img className="w-full h-full" src={proof4}></img>
              </span>
              <span className="w-full h-full">
                <img className="w-full h-full" src={proof11}></img>
              </span>
              <span className="w-full h-full">
                <img className="w-full h-full" src={proof10}></img>
              </span>
              <span className="w-full h-full">
                <img className="w-full h-full" src={proof9}></img>
              </span>
              <span className="w-full h-full">
                <img className="w-full h-full" src={proof8}></img>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Proof;
