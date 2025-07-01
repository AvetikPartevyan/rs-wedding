import { useEffect, useRef } from "react";
import WeddingDay from "./second_page/weddingDay";
import DearGuests from "./second_page/dearGuests";
import Location from "./second_page/location";
import Time from "./second_page/time";
import WithLove from "./second_page/withLove";
import songSrc from "../assets/music/song.mp3";

function SecondPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = () => {
      audio.play().catch((err) => {
        console.warn("Autoplay blocked until user interaction.", err);
      });
    };

    // Первичная попытка (вдруг браузер разрешает автоплей)
    playAudio();

    // Повторная попытка после первого клика/тапа пользователя
    const handleUserGesture = () => {
      playAudio();
      window.removeEventListener("click", handleUserGesture);
      window.removeEventListener("touchstart", handleUserGesture);
    };

    window.addEventListener("click", handleUserGesture);
    window.addEventListener("touchstart", handleUserGesture);

    return () => {
      window.removeEventListener("click", handleUserGesture);
      window.removeEventListener("touchstart", handleUserGesture);
    };
  }, []);

  return (
    <div>
      <audio
        ref={audioRef}
        src={songSrc}
        loop
        preload="auto"
      />
      <WeddingDay />
      <DearGuests />
      <Location />
      <Time />
      <WithLove />
    </div>
  );
}

export default SecondPage;
