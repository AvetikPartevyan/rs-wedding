import { useEffect, useRef } from "react";
import WeddingDay from "./second_page/weddingDay";
import DearGuests from "./second_page/dearGuests";
import Location from "./second_page/location";
import Time from "./second_page/time";
import WithLove from "./second_page/withLove";

function SecondPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const playAudio = () => {
        audio.play().catch((err) => {
          console.warn("Autoplay blocked. User interaction required.", err);
        });
      };
      playAudio();
    }
  }, []);

  return (
    <div>
      <audio
        ref={audioRef}
        src="src/assets/music/song.mp3"
        autoPlay
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
