import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import captions from "../captions.bn.json";
import { BENGALI_FONT } from "../fonts";

export const Subtitles: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const time = frame / fps;

  const cue = captions.find((c) => time >= c.start && time < c.end);

  if (!cue) {
    return null;
  }

  const fade = Math.min(6, Math.round((cue.end - cue.start) * fps * 0.3));
  const opacity =
    fade > 1
      ? interpolate(
          frame,
          [
            cue.start * fps,
            cue.start * fps + fade,
            cue.end * fps - fade,
            cue.end * fps,
          ],
          [0, 1, 1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        )
      : 1;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 54,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          maxWidth: 1560,
          padding: "12px 30px",
          borderRadius: 14,
          background: "rgba(4,12,20,0.45)",
          border: "1px solid rgba(23,179,166,0.25)",
          fontFamily: BENGALI_FONT,
          fontWeight: 600,
          fontSize: 40,
          lineHeight: 1.38,
          color: "#ffffff",
          textAlign: "center",
          whiteSpace: "pre-line",
          textShadow: "0 2px 8px rgba(0,0,0,0.95), 0 0 4px rgba(0,0,0,0.9)",
          WebkitTextStroke: "0.5px rgba(0,0,0,0.5)",
          opacity,
        }}
      >
        {cue.text}
      </div>
    </AbsoluteFill>
  );
};
