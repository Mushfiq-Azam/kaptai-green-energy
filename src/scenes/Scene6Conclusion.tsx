import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { KenBurns } from "../components/KenBurns";
import { Heading, Title } from "../components/Text";
import { BENGALI_FONT } from "../fonts";
import { COLORS } from "../theme";

const STEPS = [
  {
    title: "পূর্ণাঙ্গ সমীক্ষা",
    sub: "কারিগরি, ব্যয় ও পরিবেশ",
  },
  {
    title: "পাইলট প্রকল্প",
    sub: "২৫–৫০ মেগাওয়াট",
  },
  {
    title: "ফলাফল মূল্যায়ন",
    sub: "প্রমাণভিত্তিক সিদ্ধান্ত",
  },
  {
    title: "শর্তসাপেক্ষ সম্প্রসারণ",
    sub: "ইতিবাচক ফলেই এগোনো",
  },
];

const Roadmap: React.FC = () => {
  const frame = useCurrentFrame();
  const exit = interpolate(frame, [680, 720], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 400,
        opacity: exit,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {STEPS.map((step, index) => {
          const at = 100 + index * 80;
          const p = interpolate(frame, [at, at + 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const y = interpolate(p, [0, 1], [16, 0]);

          return (
            <div
              key={step.title}
              style={{ display: "flex", alignItems: "center", gap: 16 }}
            >
              {index > 0 ? (
                <div
                  style={{
                    width: 38,
                    height: 2,
                    background: "rgba(157,195,192,0.55)",
                    transform: `scaleX(${p})`,
                  }}
                />
              ) : null}
              <div
                style={{
                  width: 286,
                  minHeight: 104,
                  padding: "16px 20px",
                  borderRadius: 18,
                  background: "rgba(3,12,20,0.76)",
                  border:
                    index === STEPS.length - 1
                      ? "1px solid rgba(255,207,63,0.5)"
                      : "1px solid rgba(23,179,166,0.34)",
                  boxShadow: "0 14px 40px rgba(0,0,0,0.36)",
                  opacity: p,
                  transform: `translateY(${y}px)`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        index === STEPS.length - 1
                          ? "rgba(255,207,63,0.18)"
                          : "rgba(23,179,166,0.16)",
                      border:
                        index === STEPS.length - 1
                          ? "1px solid rgba(255,207,63,0.55)"
                          : "1px solid rgba(23,179,166,0.45)",
                      fontFamily: BENGALI_FONT,
                      fontSize: 18,
                      fontWeight: 700,
                      color:
                        index === STEPS.length - 1
                          ? COLORS.yellowSoft
                          : COLORS.teal,
                    }}
                  >
                    {["১", "২", "৩", "৪"][index]}
                  </div>
                  <div
                    style={{
                      fontFamily: BENGALI_FONT,
                      fontSize: 23,
                      fontWeight: 700,
                      color:
                        index === STEPS.length - 1
                          ? COLORS.yellowSoft
                          : COLORS.text,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: BENGALI_FONT,
                    fontSize: 17,
                    fontWeight: 400,
                    color: COLORS.muted,
                    lineHeight: 1.35,
                  }}
                >
                  {step.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

export const Scene6Conclusion: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: "transparent", fontFamily: BENGALI_FONT }}
    >
      <KenBurns
        src="assets/feasibility-study.png"
        startFrame={0}
        durationInFrames={700}
        scaleFrom={1.05}
        scaleTo={1.14}
        xFrom={0}
        xTo={-1.5}
        objectPosition="50% 50%"
        fadeIn={20}
        fadeOut={60}
      />
      <KenBurns
        src="assets/01_kaptai_lake_aerial.png"
        startFrame={640}
        durationInFrames={388}
        scaleFrom={1.14}
        scaleTo={1.04}
        xFrom={1.5}
        xTo={0}
        objectPosition="50% 50%"
        fadeIn={60}
        fadeOut={30}
      />
      <Heading
        text="সম্ভাব্যতা যাচাই ও পরবর্তী পদক্ষেপ"
        start={24}
        end={680}
      />
      <Roadmap />
      <Title
        kicker="উপসংহার"
        text="সমন্বিত পরিকল্পনাই আগামীর পথ"
        sub="টেকসই জ্বালানি, সমৃদ্ধ কাপ্তাই"
        start={760}
        end={1004}
      />
    </AbsoluteFill>
  );
};
