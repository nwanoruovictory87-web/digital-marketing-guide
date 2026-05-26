import proof1 from "/images/googleS1.png";
import proof2 from "/images/googleS2.png";
import proof4 from "/images/Sarah-A.jpg";
import proof5 from "/images/Blessing-k.jpeg";
import proof6 from "/images/kassy.jpg";
import proof7 from "/images/od.png";

function Proof() {
  return (
    <div className="pl-5 pr-5 mt-5 flex justify-center ">
      <div className="rounded-md max-w-200 flex flex-col">
        <span className="flex justify-center ">
          <h5 className="text-[1.1rem] pb-2 pt-2 border-b-2 border-[#6e6e0696] font-semibold text-gray-100">
            Is Degital Marketing Real ?
          </h5>
        </span>
        <span className="flex justify-center mt-3 text-center">
          <h5 className="text-[1.1rem] text-gray-100 ">
            Before we dive in to what <strong>Digital Marketing </strong> is and
            how you can earn from it we got to answer a reel importent question.
            A question i myself asked before i got started, is{" "}
            <strong>Digital Marketing / Affilate Marketing </strong> Legit and
            can i make money as a digital affiliate marketer ?
          </h5>
        </span>
        <span className="mt-3">
          <img className="w-full h-full " src={proof1}></img>
        </span>
        <span className="mt-3">
          <img className="w-full h-full " src={proof2}></img>
        </span>
        <span className="flex justify-center mt-3 text-center">
          <h5 className="text-[1.1rem] text-gray-100 ">
            The above image is a google search that proves{" "}
            <strong>Digital Marketing / Affilate Marketing </strong> i real and
            still paying marketers massively till today
          </h5>
        </span>
        <div className=" flex justify-center mt-5">
          <div className="bg-[#07078dde] rounded-md w-fit p-1 h-fit">
            <span className="flex justify-center ">
              <h5 className="text-[1.1rem] pb-2 pt-2 border-b-2 border-[#6e6e0696] font-semibold text-gray-100">
                Testimonials From Digital Markerters
              </h5>
            </span>
            <span className="flex justify-center mt-3 text-center">
              <h5 className="text-[1.1rem] text-gray-100 ">
                The below are <strong>Digital / Affilate Marketers </strong>{" "}
                whom made a decision to start an online business and are now
                earning massively promoting digital products
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Proof;
