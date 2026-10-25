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
        durationInFrames={360}
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
        startFrame={300}
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
        durationInFrames={286}
        scaleFrom={1.06}
        scaleTo={1.16}
        xFrom={-1.5}
        xTo={1.5}
        objectPosition="50% 50%"
        fadeIn={60}
      />
      <Heading text="হ্রদ-নির্ভর জীবন ও জীবিকা" start={24} end={820} />
      <Caption
        text="মানুষ ও জীবিকা"
        sub="বিদ্যুৎ উৎপাদনের বাইরেও প্রভাব"
        start={36}
        end={300}
        bottom={246}
      />
      <Caption
        text="মৎস্য, নৌচলাচল ও পর্যটন"
        sub="সম্ভাব্য প্রভাবের বিস্তারিত মূল্যায়ন"
        start={330}
        end={590}
        bottom={246}
      />
      <Caption
        text="স্থানীয় ও আদিবাসী জনগোষ্ঠী"
        sub="অংশগ্রহণ, মতামত ও ন্যায্য সুবিধা"
        start={620}
        end={820}
        bottom={246}
      />
    </AbsoluteFill>
  );
};
