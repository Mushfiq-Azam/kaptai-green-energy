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

const ClosingFade: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [7053, 7083], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.navyDeep,
        opacity,
        pointerEvents: "none",
      }}
    />
  );
};

export const Documentary: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: COLORS.navyDeep, fontFamily: BENGALI_FONT }}
    >
      <Sequence durationInFrames={1415}>
        <Scene1Opening />
      </Sequence>
      <Sequence from={1403} durationInFrames={1738}>
        <Scene2Dam />
      </Sequence>
      <Sequence from={3129} durationInFrames={880}>
        <Scene3FloatingSolar />
      </Sequence>
      <Sequence from={3997} durationInFrames={1236}>
        <Scene4Map />
      </Sequence>
      <Sequence from={5221} durationInFrames={846}>
        <Scene5Livelihood />
      </Sequence>
      <Sequence from={6055} durationInFrames={1028}>
        <Scene6Conclusion />
      </Sequence>

      <Sequence durationInFrames={1415}>
        <Audio src={staticFile("assets/audio/scene-01-opening.mp3")} />
      </Sequence>
      <Sequence from={1415} durationInFrames={1726}>
        <Audio src={staticFile("assets/audio/scene-02-hydropower.mp3")} />
      </Sequence>
      <Sequence from={3141} durationInFrames={868}>
        <Audio src={staticFile("assets/audio/scene-03-floating-solar.mp3")} />
      </Sequence>
      <Sequence from={4009} durationInFrames={1224}>
        <Audio src={staticFile("assets/audio/scene-04-financial-proposal.mp3")} />
      </Sequence>
      <Sequence from={5233} durationInFrames={834}>
        <Audio src={staticFile("assets/audio/scene-05-livelihoods.mp3")} />
      </Sequence>
      <Sequence from={6067} durationInFrames={986}>
        <Audio src={staticFile("assets/audio/scene-06-conclusion.mp3")} />
      </Sequence>

      <Vignette />
      <Disclaimer />
      <Subtitles />
      <ClosingFade />
    </AbsoluteFill>
  );
};
