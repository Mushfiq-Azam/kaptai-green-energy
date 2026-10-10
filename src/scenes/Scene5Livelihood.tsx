import { AbsoluteFill } from "remotion";
import { KenBurns } from "../components/KenBurns";
import { Caption, Heading } from "../components/Text";
import { BENGALI_FONT } from "../fonts";

export const Scene5Livelihood: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: "transparent", fontFamily: BENGALI_FONT }}
    >
      <KenBurns
        src="assets/boats-on-kaptai.png"
        startFrame={0}
        durationInFrames={320}
        scaleFrom={1.05}
        scaleTo={1.15}
        xFrom={0}
        xTo={-2}
        objectPosition="50% 55%"
        fadeIn={20}
        fadeOut={60}
      />
      <KenBurns
        src="assets/fishing-livelihood.png"
        startFrame={280}
        durationInFrames={320}
        scaleFrom={1.14}
        scaleTo={1.05}
        xFrom={1.5}
        xTo={-1.5}
        objectPosition="50% 50%"
        fadeIn={60}
        fadeOut={60}
      />
      <KenBurns
        src="assets/tourism-boat.png"
        startFrame={560}
        durationInFrames={235}
        scaleFrom={1.06}
        scaleTo={1.16}
        xFrom={-1.5}
        xTo={1.5}
        objectPosition="50% 50%"
        fadeIn={60}
      />
      <Heading text="হ্রদ-নির্ভর জীবন ও জীবিকা" start={28} end={770} />
      <Caption
        text="নৌকা ও নৌ-চলাচল"
        sub="হ্রদ-কেন্দ্রিক যোগাযোগ ও জীবনযাত্রা"
        start={45}
        end={270}
      />
      <Caption
        text="মাছ ধরা ও স্থানীয় জীবিকা"
        sub="স্থানীয় অর্থনীতির একটি গুরুত্বপূর্ণ ভিত্তি"
        start={310}
        end={540}
      />
      <Caption
        text="পর্যটন ও ভবিষ্যৎ সম্ভাবনা"
        sub="সমন্বিত পরিকল্পনায় ভারসাম্য জরুরি"
        start={590}
        end={775}
      />
    </AbsoluteFill>
  );
};
