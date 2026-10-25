import { AbsoluteFill } from "remotion";
import { FinancialPanel } from "../components/FinancialPanel";
import { KenBurns } from "../components/KenBurns";
import { Badge, Heading } from "../components/Text";
import { BENGALI_FONT } from "../fonts";

export const Scene4Map: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: "transparent", fontFamily: BENGALI_FONT }}
    >
      <KenBurns
        src="assets/kaptai-map.png"
        startFrame={0}
        durationInFrames={700}
        scaleFrom={1.08}
        scaleTo={1.16}
        xFrom={1.5}
        xTo={-1.5}
        objectPosition="50% 50%"
        fadeIn={12}
        fadeOut={70}
      />
      <KenBurns
        src="assets/solar-hydro-integration.png"
        startFrame={640}
        durationInFrames={500}
        scaleFrom={1.16}
        scaleTo={1.05}
        xFrom={-1.5}
        xTo={1.5}
        objectPosition="50% 50%"
        fadeIn={70}
        fadeOut={70}
      />
      <AbsoluteFill style={{ opacity: 0.42 }}>
        <KenBurns
          src="assets/Financial infographic.png"
          startFrame={760}
          durationInFrames={476}
          scaleFrom={1.05}
          scaleTo={1.12}
          xFrom={1}
          xTo={-1}
          objectPosition="50% 50%"
          fadeIn={50}
        />
        <AbsoluteFill
          style={{
            background:
              "linear-gradient(90deg, rgba(4,14,24,0.92) 0%, rgba(4,14,24,0.62) 55%, rgba(4,14,24,0.2) 100%)",
          }}
        />
      </AbsoluteFill>

      <Heading text="আর্থিক প্রস্তাব ও সমন্বয়" start={24} end={1180} />
      <Badge text="প্রস্তাবনা — যাচাইাধীন" start={40} end={1180} />
      <FinancialPanel />
    </AbsoluteFill>
  );
};
