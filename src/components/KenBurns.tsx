import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export type KenBurnsProps = {
  src: string;
  durationInFrames: number;
  startFrame?: number;
  scaleFrom?: number;
  scaleTo?: number;
  xFrom?: number;
  xTo?: number;
  yFrom?: number;
  yTo?: number;
  objectPosition?: string;
  fadeIn?: number;
  fadeOut?: number;
};

export const KenBurns: React.FC<KenBurnsProps> = ({
  src,
  durationInFrames,
  startFrame = 0,
  scaleFrom = 1.06,
  scaleTo = 1.16,
  xFrom = 0,
  xTo = 0,
  yFrom = 0,
  yTo = 0,
  objectPosition = "50% 50%",
  fadeIn = 0,
  fadeOut = 0,
}) => {
  const frame = useCurrentFrame();
  const local = frame - startFrame;

  const progress = interpolate(local, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  });

  const scale = interpolate(progress, [0, 1], [scaleFrom, scaleTo]);
  const tx = interpolate(progress, [0, 1], [xFrom, xTo]);
  const ty = interpolate(progress, [0, 1], [yFrom, yTo]);

  const fadeInOpacity =
    fadeIn > 0
      ? interpolate(local, [0, fadeIn], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  const fadeOutOpacity =
    fadeOut > 0
      ? interpolate(local, [durationInFrames - fadeOut, durationInFrames], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  const inWindow = local >= 0 && local <= durationInFrames;
  const opacity = inWindow ? Math.min(fadeInOpacity, fadeOutOpacity) : 0;

  return (
    <AbsoluteFill style={{ opacity, backgroundColor: "transparent" }}>
      <Img
        src={staticFile(src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition,
          transform: `scale(${scale}) translate(${tx}%, ${ty}%)`,
        }}
      />
    </AbsoluteFill>
  );
};
