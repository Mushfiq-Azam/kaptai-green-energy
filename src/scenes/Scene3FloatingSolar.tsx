import { AbsoluteFill } from "remotion";
import { KenBurns } from "../components/KenBurns";
import { Badge, Caption, Heading } from "../components/Text";
import { BENGALI_FONT } from "../fonts";

export const Scene3FloatingSolar: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: "transparent", fontFamily: BENGALI_FONT }}
    >
      <KenBurns
        src="assets/floating-solar-1.png"
        startFrame={0}
        durationInFrames={520}
        scaleFrom={1.06}
        scaleTo={1.2}
        xFrom={0}
        xTo={-2.5}
        objectPosition="50% 50%"
        fadeIn={24}
        fadeOut={70}
      />
      <KenBurns
        src="assets/floating-solar-2.png"
        startFrame={460}
        durationInFrames={440}
        scaleFrom={1.18}
        scaleTo={1.05}
        xFrom={2.5}
        xTo={0}
        objectPosition="50% 50%"
        fadeIn={70}
      />
      <Heading text="ভাসমান সৌরবিদ্যুৎ" start={40} end={860} />
      <Badge text="ধারণাভিত্তিক চিত্র — বাস্তব প্রকল্প নয়" start={60} />
      <Caption
        text="হ্রদের পানির উপর স্থাপিত সৌর প্যানেলের ধারণাগত নকশা"
        sub="কাপ্তাই হ্রদে এখনও কোনো ভাসমান সৌর প্রকল্প বাস্তবায়িত হয়নি"
        start={100}
        end={800}
      />
    </AbsoluteFill>
  );
};
