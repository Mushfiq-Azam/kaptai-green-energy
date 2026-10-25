import { AbsoluteFill } from "remotion";
import { AnchoringCard } from "../components/AnchoringCard";
import { KenBurns } from "../components/KenBurns";
import { Badge, Heading } from "../components/Text";
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
        durationInFrames={420}
        scaleFrom={1.18}
        scaleTo={1.05}
        xFrom={2.5}
        xTo={0}
        objectPosition="50% 50%"
        fadeIn={70}
      />
      <Heading text="ভাসমান সৌর প্রযুক্তি" start={24} end={850} />
      <Badge
        text="ধারণাভিত্তিক চিত্র — বাস্তব প্রকল্প নয়"
        start={40}
        end={850}
      />
      <AnchoringCard
        src="assets/Floating panel anchoring and mooring.jpg"
        label="অ্যাংকারিং ও মুরিং — ধারণাগত চিত্র"
        start={500}
        end={858}
      />
    </AbsoluteFill>
  );
};
