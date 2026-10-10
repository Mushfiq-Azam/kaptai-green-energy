import { AbsoluteFill } from "remotion";
import { KenBurns } from "../components/KenBurns";
import { Caption, Heading, Title } from "../components/Text";
import { BENGALI_FONT } from "../fonts";

export const Scene6Conclusion: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: "transparent", fontFamily: BENGALI_FONT }}
    >
      <KenBurns
        src="assets/feasibility-study.png"
        startFrame={0}
        durationInFrames={780}
        scaleFrom={1.05}
        scaleTo={1.14}
        xFrom={0}
        xTo={-1.5}
        objectPosition="50% 50%"
        fadeIn={24}
        fadeOut={70}
      />
      <KenBurns
        src="assets/01_kaptai_lake_aerial.png"
        startFrame={720}
        durationInFrames={330}
        scaleFrom={1.14}
        scaleTo={1.04}
        xFrom={1.5}
        xTo={0}
        objectPosition="50% 50%"
        fadeIn={70}
      />
      <Heading
        text="সম্ভাব্যতা যাচাই ও পরবর্তী পদক্ষেপ"
        start={40}
        end={700}
      />
      <Caption
        text="সম্ভাব্যতা যাচাই: সুবিধা, ব্যয় ও পরিবেশগত প্রভাব"
        sub="সিদ্ধান্তের আগে প্রয়োজন প্রমাণভিত্তিক মূল্যায়ন"
        start={90}
        end={640}
      />
      <Title
        kicker="উপসংহার"
        text="সমন্বিত পরিকল্পনাই আগামীর পথ"
        sub="টেকসই জ্বালানি, সমৃদ্ধ কাপ্তাই"
        start={740}
      />
    </AbsoluteFill>
  );
};
