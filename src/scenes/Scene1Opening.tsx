import { AbsoluteFill } from "remotion";
import { KenBurns } from "../components/KenBurns";
import { Title } from "../components/Text";
import { BENGALI_FONT } from "../fonts";

export const Scene1Opening: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: "transparent", fontFamily: BENGALI_FONT }}
    >
      <KenBurns
        src="assets/02_kaptai_lake_wide.jpg"
        startFrame={0}
        durationInFrames={360}
        scaleFrom={1.05}
        scaleTo={1.16}
        xFrom={0}
        xTo={-2}
        objectPosition="50% 45%"
        fadeIn={24}
        fadeOut={70}
      />
      <KenBurns
        src="assets/01_kaptai_lake_aerial.png"
        startFrame={300}
        durationInFrames={300}
        scaleFrom={1.2}
        scaleTo={1.06}
        xFrom={2}
        xTo={0}
        objectPosition="50% 50%"
        fadeIn={70}
      />
      <Title
        kicker="কাপ্তাই হ্রদ • রাঙ্গামাটি, বাংলাদেশ"
        text="একটি হ্রদ। একটি নতুন জ্বালানি সম্ভাবনা।"
        start={44}
      />
    </AbsoluteFill>
  );
};
