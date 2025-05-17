// components/LottieWave.tsx
'use client';
import { Player } from "@lottiefiles/react-lottie-player";

const LottieWave = () => {
  return (
    <div className="w-full flex justify-center items-center -mt-16">
      <Player
        autoplay
        loop
        src="/wave/wave.json"
        style={{ height: '200px', width: '100%' }}
        speed={0.2}
        direction={1}
      />
    </div>
  );
};

export default LottieWave;
