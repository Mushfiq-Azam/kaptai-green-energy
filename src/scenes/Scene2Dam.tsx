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
        durationInFrames={460}
        scaleFrom={1.06}
        scaleTo={1.16}
        xFrom={-2}
        xTo={2}
        objectPosition="50% 55%"
        fadeIn={20}
        fadeOut={60}
      />
      <KenBurns
        src="assets/karnaphuli-power-station.png"
        startFrame={410}
        durationInFrames={340}
        scaleFrom={1.16}
        scaleTo={1.05}
        xFrom={1.5}
        xTo={-1.5}
        objectPosition="50% 50%"
        fadeIn={60}
      />
      <Heading text="কাপ্তাই বাঁধ ও জলবিদ্যুৎ" start={36} end={700} />
      <Caption
        text="কাপ্তাই বাঁধ — কর্ণফুলী নদীর উপর নির্মিত"
        sub="জলবিদ্যুৎ উৎপাদন ও বন্যা নিয়ন্ত্রণের কেন্দ্র"
        start={60}
        end={370}
      />
      <Caption
        text="কর্ণফুলী জলবিদ্যুৎ কেন্দ্র"
        sub="দেশের অন্যতম গুরুত্বপূর্ণ জলবিদ্যুৎ স্থাপনা"
        start={440}
        end={730}
      />
    </AbsoluteFill>
  );
};
