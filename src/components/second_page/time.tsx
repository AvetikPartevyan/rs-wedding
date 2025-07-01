import MainImg from "../../assets/img/img_4.JPG";
import TimeImg from "../../assets/icons/Time.svg?react";
import FadeInSection from "../FadeInSection.tsx";

function Time() {
  return (
    <div className="flex justify-center items-center flex-col bg-[#f7f4f1] py-10">
      <div className="w-11/12 md:w-3/5 flex flex-col justify-center items-center">
        <TimeImg className="w-1/2 h-auto" />
        <FadeInSection>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-0.5 h-20 bg-black my-5"></div>
            <h1 className="text-6xl">12:30</h1>
            <p className="text-xl text-center">Փեսայի տուն</p>
            <p className="text-xl text-center">Արցախի 20</p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-0.5 h-20 bg-black my-5"></div>
            <h1 className="text-6xl">14:00</h1>
            <p className="text-xl text-center">Հարսի տուն </p>
            <p className="text-xl text-center">Պարիս Հերունի, 40</p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-0.5 h-20 bg-black my-5"></div>
            <h1 className="text-6xl text-center">15:30</h1>
            <p className="text-xl text-center">Պսակադրության արարողություն</p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-0.5 h-20 bg-black my-5"></div>
            <h1 className="text-6xl text-center">17:30</h1>
            <p className="text-xl text-center">Տոնական խնջույք</p>
          </div>
        </FadeInSection>
         <div className="relative w-full h-full flex justify-center items-center flex-col mt-10">
                    <div className="absolute inset-0 bg-[#dfdddb] rounded-xl -rotate-8 z-0 w-8/10 lg:w-1/2 xl:w-2/3 grid justify-self-center items-self-center"></div>
                    <img
                      src={MainImg}
                      alt="main"
                      className="relative w-8/10 lg:w-1/2 xl:w-2/3 rounded-xl z-10"
                    />
                  </div>
      </div>
    </div>
  );
}

export default Time;
