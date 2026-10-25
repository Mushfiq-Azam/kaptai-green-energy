import { Composition } from "remotion";
import { Documentary } from "./Documentary";

export const MyComposition = () => {
  return (
    <Composition
      id="KaptaiSolar"
      component={Documentary}
      durationInFrames={7083}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
