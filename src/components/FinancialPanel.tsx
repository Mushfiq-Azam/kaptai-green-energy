import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { BENGALI_FONT } from "../fonts";
import { COLORS } from "../theme";

type FinancialRow = {
  value: string;
  label: string;
  at: number;
  highlight?: boolean;
};

const ROWS: FinancialRow[] = [
  {
    value: "৯,০০০ মেগাওয়াট",
    label: "তাত্ত্বিক হিসাব — নিশ্চিত নয়",
    at: 150,
  },
  {
    value: "৯০,০০০ কোটি টাকা",
    label: "প্রাথমিক ব্যয় — গ্রিড/সঞ্চালন ছাড়া",
    at: 300,
  },
  {
    value: "১,৩০০ কোটি ইউনিট/বছর",
    label: "যাচাই না করা বার্ষিক উৎপাদন অনুমান",
    at: 430,
  },
  {
    value: "১০,৪০০ কোটি টাকা/বছর",
    label: "সম্ভাব্য মোট আয় — মুনাফা নয় (৮ টাকা/ইউনিট)",
    at: 610,
  },
  {
    value: "৯–১০ বছর",
    label: "প্রাথমিক সরল পেব্যাক — প্রস্তাবনা অনুযায়ী",
    at: 690,
  },
  {
    value: "২৫–৫০ মেগাওয়াট পাইলট",
    label: "প্রস্তাবিত প্রথম ধাপ — শর্তসাপেক্ষ",
    at: 980,
    highlight: true,
  },
];

export const FinancialPanel: React.FC = () => {
  const frame = useCurrentFrame();
  const panelOpacity = interpolate(
    frame,
    [120, 150, 1180, 1212],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const footerOpacity = interpolate(frame, [820, 860], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: "274px 0 0 120px",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 1080,
          padding: "22px 30px 20px",
          borderRadius: 24,
          background: "rgba(3, 12, 20, 0.86)",
          border: "1px solid rgba(23, 179, 166, 0.34)",
          boxShadow: "0 28px 80px rgba(0, 0, 0, 0.58)",
          opacity: panelOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div
            style={{
              fontFamily: BENGALI_FONT,
              fontSize: 27,
              fontWeight: 700,
              color: COLORS.yellowSoft,
            }}
          >
            প্রস্তাবের মূল সংখ্যা
          </div>
          <div
            style={{
              fontFamily: BENGALI_FONT,
              fontSize: 17,
              fontWeight: 600,
              color: COLORS.teal,
              border: "1px solid rgba(23, 179, 166, 0.4)",
              borderRadius: 999,
              padding: "5px 14px",
              whiteSpace: "nowrap",
            }}
          >
            প্রাথমিক অনুমান
          </div>
        </div>
        <div
          style={{
            fontFamily: BENGALI_FONT,
            fontSize: 18,
            fontWeight: 400,
            color: COLORS.muted,
            lineHeight: 1.45,
            marginTop: 6,
            marginBottom: 8,
          }}
        >
          প্রস্তাবনা থেকে প্রাপ্ত হিসাব — স্বাধীনভাবে যাচাইকৃত নয়
        </div>

        {ROWS.map((row, index) => {
          const opacity = interpolate(
            frame,
            [row.at, row.at + 18],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          );
          const y = interpolate(frame, [row.at, row.at + 18], [12, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                padding: "9px 0",
                borderBottom:
                  index === ROWS.length - 1
                    ? "none"
                    : "1px solid rgba(234, 247, 244, 0.09)",
                opacity,
                transform: `translateY(${y}px)`,
              }}
            >
              <div
                style={{
                  width: 430,
                  flexShrink: 0,
                  fontFamily: BENGALI_FONT,
                  fontSize: 30,
                  fontWeight: 700,
                  color: row.highlight ? COLORS.yellowSoft : COLORS.text,
                  lineHeight: 1.25,
                }}
              >
                {row.value}
              </div>
              <div
                style={{
                  fontFamily: BENGALI_FONT,
                  fontSize: 18,
                  fontWeight: 400,
                  color: row.highlight ? COLORS.yellowSoft : COLORS.muted,
                  lineHeight: 1.35,
                }}
              >
                {row.label}
              </div>
            </div>
          );
        })}

        <div
          style={{
            marginTop: 12,
            paddingTop: 12,
            borderTop: "1px solid rgba(255, 207, 63, 0.28)",
            fontFamily: BENGALI_FONT,
            fontSize: 18,
            fontWeight: 600,
            color: COLORS.yellowSoft,
            lineHeight: 1.45,
            opacity: footerOpacity,
          }}
        >
          গ্রিড/সঞ্চালন ব্যয় প্রস্তাবিত ব্যয়ে অন্তর্ভুক্ত নয়। প্রকৃত বিনিয়োগে
          এটি যুক্ত করে যাচাই করা জরুরি।
        </div>
      </div>
    </AbsoluteFill>
  );
};
