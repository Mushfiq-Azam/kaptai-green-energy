import {
  AbsoluteFill,
  Audio,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import "./fonts";
import { BENGALI_FONT } from "./fonts";
import { COLORS } from "./theme";
import { Vignette } from "./components/Overlays";
import { Scene1Opening } from "./scenes/Scene1Opening";
import { Scene2Dam } from "./scenes/Scene2Dam";
import { Scene3FloatingSolar } from "./scenes/Scene3FloatingSolar";
import { Scene4Map } from "./scenes/Scene4Map";
import { Scene5Livelihood } from "./scenes/Scene5Livelihood";
import { Scene6Conclusion } from "./scenes/Scene6Conclusion";
import { Subtitles } from "./components/Subtitles";

const OVERLAP = 24;

const Disclaimer: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [60, 120], [0, 0.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: "0 44px 28px 0",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          fontFamily: BENGALI_FONT,
          fontSize: 20,
          fontWeight: 400,
          color: COLORS.text,
          opacity,
        }}
      >
        সব চিত্র ধারণাভিত্তিক (AI-নির্মিত), যাচাইকৃত ফটো নয়
      </div>
    </AbsoluteFill>
  );
};

export const Documentary: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: COLORS.navyDeep, fontFamily: BENGALI_FONT }}
    >
      <Audio src={staticFile("assets/audio/kaptai-documentary-bn.mp3")} />

      <Sequence durationInFrames={600 + OVERLAP}>
        <Scene1Opening />
      </Sequence>
      <Sequence from={600 - OVERLAP} durationInFrames={750 + OVERLAP * 2}>
        <Scene2Dam />
      </Sequence>
      <Sequence from={1350 - OVERLAP} durationInFrames={900 + OVERLAP * 2}>
        <Scene3FloatingSolar />
      </Sequence>
      <Sequence from={2250 - OVERLAP} durationInFrames={1050 + OVERLAP * 2}>
        <Scene4Map />
      </Sequence>
      <Sequence from={3300 - OVERLAP} durationInFrames={750 + OVERLAP * 2}>
        <Scene5Livelihood />
      </Sequence>
      <Sequence from={4050 - OVERLAP} durationInFrames={1350 + OVERLAP}>
        <Scene6Conclusion />
      </Sequence>

      <Vignette />
      <Disclaimer />
      <Subtitles />
    </AbsoluteFill>
  );
};
