import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { KenBurns } from "../components/KenBurns";
import { Caption, Heading } from "../components/Text";
import { BENGALI_FONT } from "../fonts";
import { COLORS } from "../theme";

const Flow: React.FC = () => {
  const frame = useCurrentFrame();
  const items = ["সৌর বিদ্যুৎ", "জলবিদ্যুৎ", "সমন্বিত ব্যবহার"];

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 220,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {items.map((label, i) => {
          const p = interpolate(frame, [840 + i * 24, 872 + i * 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 24 }}
            >
              {i > 0 ? (
                <span
                  style={{
                    width: 56,
                    height: 2,
                    background: "rgba(157,195,192,0.5)",
                    transform: `scaleX(${p})`,
                  }}
                />
              ) : null}
              <span
                style={{
                  fontFamily: BENGALI_FONT,
                  fontSize: 30,
                  fontWeight: 600,
                  color: i === items.length - 1 ? COLORS.yellowSoft : COLORS.text,
                  padding: "8px 22px",
                  border: "1px solid rgba(23,179,166,0.42)",
                  borderRadius: 999,
                  opacity: p,
                  transform: `translateY(${interpolate(p, [0, 1], [14, 0])}px)`,
                }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

export const Scene4Map: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: "transparent", fontFamily: BENGALI_FONT }}
    >
      <KenBurns
        src="assets/kaptai-map.png"
        startFrame={0}
        durationInFrames={620}
        scaleFrom={1.08}
        scaleTo={1.16}
        xFrom={1.5}
        xTo={-1.5}
        objectPosition="50% 50%"
        fadeIn={24}
        fadeOut={70}
      />
      <KenBurns
        src="assets/solar-hydro-integration.png"
        startFrame={560}
        durationInFrames={490}
        scaleFrom={1.16}
        scaleTo={1.05}
        xFrom={-1.5}
        xTo={1.5}
        objectPosition="50% 50%"
        fadeIn={70}
      />
      <Heading text="সমন্বিত বিদ্যুৎ পরিকল্পনা" start={40} end={780} />
      <Caption
        text="মানচিত্রটি ধারণাভিত্তিক; সীমানা যাচাইকৃত নয়"
        start={60}
        end={540}
      />
      <Caption
        text="সৌর ও জলবিদ্যুৎ — একটি সমন্বিত পরিকল্পনার ধারণা"
        sub="নির্ভরযোগ্যতা ও সঞ্চয়ের ভারসাম্য"
        start={600}
        end={820}
      />
      <Flow />
    </AbsoluteFill>
  );
};
