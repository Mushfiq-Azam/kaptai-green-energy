import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

export const BENGALI_FONT = "HindSiliguri";

loadFont({
  family: BENGALI_FONT,
  url: staticFile("fonts/HindSiliguri-Regular.ttf"),
  weight: "400",
});

loadFont({
  family: BENGALI_FONT,
  url: staticFile("fonts/HindSiliguri-SemiBold.ttf"),
  weight: "600",
});

loadFont({
  family: BENGALI_FONT,
  url: staticFile("fonts/HindSiliguri-Bold.ttf"),
  weight: "700",
});
