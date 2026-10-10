import { AbsoluteFill } from "remotion";

export const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      background:
        "radial-gradient(circle at 50% 45%, rgba(0,0,0,0) 68%, rgba(2,8,14,0.22) 100%)",
      pointerEvents: "none",
    }}
  />
);

export const TopScrim: React.FC = () => (
  <AbsoluteFill
    style={{
      background:
        "linear-gradient(180deg, rgba(2,8,14,0.5) 0%, rgba(2,8,14,0.2) 40%, rgba(2,8,14,0) 68%)",
      pointerEvents: "none",
    }}
  />
);

export const BottomScrim: React.FC = () => (
  <AbsoluteFill
    style={{
      background:
        "linear-gradient(0deg, rgba(2,8,14,0.58) 0%, rgba(2,8,14,0.26) 36%, rgba(2,8,14,0) 70%)",
      pointerEvents: "none",
    }}
  />
);

export const CenterScrim: React.FC = () => (
  <AbsoluteFill
    style={{
      background:
        "radial-gradient(ellipse at center, rgba(2,8,14,0.42) 0%, rgba(2,8,14,0.15) 48%, rgba(2,8,14,0) 76%)",
      pointerEvents: "none",
    }}
  />
);
