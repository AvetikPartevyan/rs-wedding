import MainImg from "../../assets/img/img_2.JPG";
import WeddingDayImg from "../../assets/icons/WeddingDay.svg?react";
import FadeInSection from "../FadeInSection.tsx";

function WeddingDay() {
  return (
    <div className="flex justify-center items-center flex-col bg-[#f7f4f1]">
      <WeddingDayImg className="w-2/3 md:w-1/4 h-auto my-10" />
      <div className="relative h-auto w-3/4 md:w-1/4 min-w-[225px]">
        <FadeInSection>
          <img src={MainImg} alt="Main" className="w-full h-auto rounded-xl" />
          <h1 className=" text-[#181713] absolute top-[0.5%] right-[8%] font-semibold z-10 text-gray text-[120%] w-2">
            08 08 25
          </h1>
        </FadeInSection>
      </div>
      <h1 className="text-xl md:text-3xl font-semibold uppercase text-gray mb-10 mt-10">
      Ռաֆայել & Սինարետա
      </h1>
    </div>
  );
}

export default WeddingDay;
