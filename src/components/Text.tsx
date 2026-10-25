import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BENGALI_FONT } from "../fonts";
import { COLORS } from "../theme";
import { BottomScrim, CenterScrim, TopScrim } from "./Overlays";

const useReveal = (start: number, end?: number) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const inP = spring({
    frame: frame - start,
    fps,
    config: { damping: 200, mass: 0.7 },
    durationInFrames: 34,
  });

  const outP =
    end === undefined
      ? 1
      : interpolate(frame, [end - 18, end], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

  return {
    opacity: inP * outP,
    y: interpolate(inP, [0, 1], [28, 0]),
  };
};

export const Kicker: React.FC<{ text: string }> = ({ text }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
    <span
      style={{
        width: 46,
        height: 3,
        borderRadius: 3,
        background: COLORS.teal,
        display: "inline-block",
      }}
    />
    <span
      style={{
        fontFamily: BENGALI_FONT,
        fontSize: 28,
        fontWeight: 600,
        color: COLORS.teal,
      }}
    >
      {text}
    </span>
  </div>
);

export const Title: React.FC<{
  text: string;
  kicker?: string;
  sub?: string;
  start: number;
  end?: number;
}> = ({ text, kicker, sub, start, end }) => {
  const { opacity, y } = useReveal(start, end);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "0 150px",
      }}
    >
      <CenterScrim />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 22,
          maxWidth: 1500,
          opacity,
          transform: `translateY(${y}px)`,
        }}
      >
        {kicker ? <Kicker text={kicker} /> : null}
        <div
          style={{
            fontFamily: BENGALI_FONT,
            fontSize: 84,
            fontWeight: 700,
            color: COLORS.text,
            textAlign: "center",
            lineHeight: 1.4,
            textShadow: "0 6px 34px rgba(2,8,14,0.85)",
          }}
        >
          {text}
        </div>
        {sub ? (
          <div
            style={{
              fontFamily: BENGALI_FONT,
              fontSize: 34,
              fontWeight: 400,
              color: COLORS.muted,
              textAlign: "center",
              maxWidth: 1200,
              lineHeight: 1.5,
            }}
          >
            {sub}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};

export const Heading: React.FC<{
  text: string;
  start: number;
  end?: number;
  align?: "left" | "center";
}> = ({ text, start, end, align = "center" }) => {
  const { opacity, y } = useReveal(start, end);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-start",
        alignItems: align === "left" ? "flex-start" : "center",
        padding: "150px 150px 0 150px",
      }}
    >
      <TopScrim />
      <div
        style={{
          maxWidth: 1450,
          textAlign: align,
          opacity,
          transform: `translateY(${y}px)`,
        }}
      >
        <div
          style={{
            fontFamily: BENGALI_FONT,
            fontSize: 68,
            fontWeight: 700,
            color: COLORS.text,
            lineHeight: 1.35,
            textShadow: "0 6px 30px rgba(2,8,14,0.85)",
          }}
        >
          {text}
        </div>
        <div
          style={{
            marginTop: 20,
            height: 4,
            width: 180,
            borderRadius: 4,
            background: `linear-gradient(90deg, ${COLORS.emerald}, ${COLORS.yellow})`,
            marginLeft: align === "center" ? "auto" : 0,
            marginRight: align === "center" ? "auto" : 0,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

export const Caption: React.FC<{
  text: string;
  sub?: string;
  start: number;
  end: number;
  bottom?: number;
}> = ({ text, sub, start, end, bottom = 120 }) => {
  const { opacity, y } = useReveal(start, end);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: `0 150px ${bottom}px 150px`,
      }}
    >
      <BottomScrim />
      <div
        style={{
          maxWidth: 1250,
          borderLeft: `5px solid ${COLORS.emerald}`,
          paddingLeft: 28,
          paddingRight: 40,
          paddingTop: 14,
          paddingBottom: 14,
          background:
            "linear-gradient(90deg, rgba(2,8,14,0.42) 0%, rgba(2,8,14,0) 100%)",
          opacity,
          transform: `translateY(${y}px)`,
        }}
      >
        <div
          style={{
            fontFamily: BENGALI_FONT,
            fontSize: 48,
            fontWeight: 600,
            color: COLORS.text,
            lineHeight: 1.35,
            textShadow:
              "0 2px 6px rgba(2,8,14,0.95), 0 4px 20px rgba(2,8,14,0.8)",
          }}
        >
          {text}
        </div>
        {sub ? (
          <div
            style={{
              fontFamily: BENGALI_FONT,
              fontSize: 28,
              fontWeight: 400,
              color: COLORS.muted,
              marginTop: 10,
              lineHeight: 1.45,
            }}
          >
            {sub}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};

export const Badge: React.FC<{ text: string; start: number; end?: number }> = ({
  text,
  start,
  end,
}) => {
  const frame = useCurrentFrame();
  const inOpacity = interpolate(frame, [start, start + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const outOpacity =
    end === undefined
      ? 1
      : interpolate(frame, [end - 16, end], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
  const opacity = inOpacity * outOpacity;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-end",
        padding: "150px 150px 0 0",
      }}
    >
      <div
        style={{
          fontFamily: BENGALI_FONT,
          fontSize: 24,
          fontWeight: 600,
          color: COLORS.yellowSoft,
          background: "rgba(2,8,14,0.42)",
          border: "1px solid rgba(255,207,63,0.55)",
          borderRadius: 999,
          padding: "10px 22px",
          opacity,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
