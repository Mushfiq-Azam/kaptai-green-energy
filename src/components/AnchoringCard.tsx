import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { BENGALI_FONT } from "../fonts";
import { COLORS } from "../theme";

export const AnchoringCard: React.FC<{
  src: string;
  label: string;
  start: number;
  end: number;
}> = ({ src, label, start, end }) => {
  const frame = useCurrentFrame();
  const inOpacity = interpolate(frame, [start, start + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const outOpacity = interpolate(frame, [end - 20, end], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = inOpacity * outOpacity;
  const lift = interpolate(frame, [start, start + 34], [18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [start, start + 34], [0.96, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: "0 100px 290px 0",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 580,
          padding: 12,
          borderRadius: 22,
          background: "rgba(2, 10, 17, 0.82)",
          border: "1px solid rgba(23, 179, 166, 0.38)",
          boxShadow: "0 26px 80px rgba(0, 0, 0, 0.58)",
          opacity,
          transform: `translateY(${lift}px) scale(${scale})`,
        }}
      >
        <div
          style={{
            width: "100%",
            aspectRatio: "4 / 3",
            borderRadius: 14,
            overflow: "hidden",
            backgroundColor: "#02080e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Img
            src={staticFile(src)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            fontFamily: BENGALI_FONT,
            fontSize: 20,
            fontWeight: 600,
            color: COLORS.muted,
            textAlign: "center",
            lineHeight: 1.45,
            padding: "12px 8px 2px",
          }}
        >
          {label}
        </div>
      </div>
    </AbsoluteFill>
  );
};
