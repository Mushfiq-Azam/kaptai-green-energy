import { AbsoluteFill } from "remotion";
import { KenBurns } from "../components/KenBurns";
import { Caption, Heading } from "../components/Text";
import { BENGALI_FONT } from "../fonts";

export const Scene2Dam: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: "transparent", fontFamily: BENGALI_FONT }}
    >
      <KenBurns
        src="assets/kaptai-dam.png"
        startFrame={0}
        durationInFrames={900}
        scaleFrom={1.06}
        scaleTo={1.16}
        xFrom={-2}
        xTo={2}
        objectPosition="50% 55%"
        fadeIn={20}
        fadeOut={70}
      />
      <KenBurns
        src="assets/karnaphuli-power-station.png"
        startFrame={840}
        durationInFrames={898}
        scaleFrom={1.16}
        scaleTo={1.05}
        xFrom={1.5}
        xTo={-1.5}
        objectPosition="50% 50%"
        fadeIn={70}
      />
      <Heading text="কাপ্তাই বাঁধ ও জলবিদ্যুৎ" start={24} end={1700} />
      <Caption
        text="কর্ণফুলী নদীর উপর কাপ্তাই বাঁধ"
        sub="পানি, টারবাইন ও বিদ্যুৎ"
        start={36}
        end={800}
        bottom={246}
      />
      <Caption
        text="বিদ্যমান জলবিদ্যুতের পাশে সৌরশক্তি"
        sub="কারিগরি সমীক্ষা ও সঞ্চালন সক্ষমতা নির্ধারক"
        start={860}
        end={1700}
        bottom={246}
      />
    </AbsoluteFill>
  );
};
