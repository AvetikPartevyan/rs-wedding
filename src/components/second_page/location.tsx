import MainImgJpg from "../../assets/img/img_3.JPG";
import MainImgWebp from "../../assets/img/img_3.JPG?format=webp";
import LocationFU from "../../assets/icons/LocationFU.svg?react";
import LocationImg from "../../assets/icons/Location.svg?react";
import Church from "../../assets/icons/Church.svg?react";
import Glasses from "../../assets/icons/Glasses.svg?react";
import Restaurant from "../../assets/icons/Restaurant.svg?react";
import FadeInSection from "../FadeInSection.tsx";

function Location() {
  return (
    <div className="flex justify-center items-center flex-col bg-[#f7f4f1] py-10">
      <div className="w-11/12 md:w-3/5 flex flex-col justify-center items-center">
        <FadeInSection>
          <div className="relative w-full h-full flex justify-center items-center flex-col mt-5">
            <div className="absolute inset-0 bg-[#dfdddb] rounded-xl -rotate-8 z-0 w-8/10 lg:w-1/2 xl:w-2/3 grid justify-self-center items-self-center"></div>
            <picture className="relative w-8/10 lg:w-1/2 xl:w-2/3 z-10">
              <source srcSet={MainImgWebp} type="image/webp" />
              <img
                src={MainImgJpg}
                alt="main"
                loading="lazy"
                decoding="async"
                className="w-full h-full rounded-xl"
              />
            </picture>
          </div>
          <LocationFU className="w-1/2 h-auto mt-10" />
        </FadeInSection>
      </div>
      <FadeInSection>
        <div className="flex flex-col justify-center items-center w-1/3 m-10">
          <LocationImg className="w-2/8 lg:w-1/8 xl:w-1/8 h-auto mb-2" />
          <h1 className="text-xl text-center">
            Պսակադրությունը կանցկացվի Սուրբ Խաչ եկեղեցում (Արաբկիր)
          </h1>
          <h1 className="text-xl text-center font-semibold">Ք. Երևան, Կոմիտասի պող. 64</h1>
          <Church className="w-8/10 h-auto mt-2" />
          <button
            onClick={() =>
              window.open(
                "https://yandex.com/maps/-/CHgxE8~9",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="text-white font-bold bg-[#232323] px-20 py-4 mt-8 text-xl rounded-4xl cursor-pointer"
          >
            Քարտեզ
          </button>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="flex flex-col justify-center items-center w-1/3 m-10">
          <Glasses className="w-2/5 lg:w-1/5 xl:w-1/5 h-auto mb-2" />
          <h1 className="text-xl text-center">
            Տոնական խնջույքը կանցկացվի «Ադանա կոմպլեքս» ռեստորանում
          </h1>
          <h1 className="text-xl text-center font-semibold">
            Երևան-Երասխ մայրուղի 10/9
          </h1>
          <Restaurant className="w-9/10 h-auto mt-2" />
          <button
            onClick={() =>
              window.open(
                "https://yandex.com/maps/org/adana_complex/63788163900?si=fdg67fkqct0b3vf3c4apg8a4pg",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="text-white font-bold bg-[#232323] px-20 py-4 mt-8 text-xl rounded-4xl cursor-pointer"
          >
            Քարտեզ
          </button>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Location;
