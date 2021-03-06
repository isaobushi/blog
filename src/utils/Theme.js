import theme from "styled-theming";
import * as colors from "./colors";
import * as shadow from "./shadows";

const textColor = theme.variants("mode", "variant", {
  default: { light: colors.textLight, dark: colors.textDark },
  accent: { light: colors.accent, dark: "colors.accent" },
  secondary: { light: colors.subTitle, dark: colors.subTitle },
  danger: { light: colors.danger, dark: colors.danger },
  warning: { light: colors.warning, dark: colors.warning },
  success: { light: colors.success, dark: colors.success },
  inverted: { light: colors.neutral200, dark: colors.neutral500 },
});

const buttonBackground = theme.variants("mode", "variant", {
  default: { light: colors.neutral200, dark: colors.neutral500 },
  warning: { light: colors.neutral200, dark: colors.neutral500 },
  danger: { light: colors.neutral200, dark: colors.neutral500 },
  success: { light: colors.neutral200, dark: colors.neutral500 },
});

const buttonBoxShadow = theme.variants("mode", "variant", {
  default: {
    light:
      "rgb(209, 217, 230) 12px 12px 20px, rgb(255, 255, 255) -12px -12px 16px",
    dark: "18px 18px 20px #24262B, -8px -8px 20px #30343A",
  },
  warning: {
    light:
      "6px 6px 12px rgba(235, 184, 6, 0.25), -12px -12px 16px rgba(255, 255, 255, 0.25);",
    dark: "18px 18px 20px #24262B, -8px -8px 20px #30343A",
  },
  danger: {
    light:
      "6px 6px 12px rgba(235, 6, 6, 0.25), -12px -12px 16px rgba(255, 255, 255, 0.25);",
    dark: "18px 18px 20px #24262B, -8px -8px 20px #30343A",
  },
  success: {
    light:
      "6px 6px 12px rgba(13, 167, 28, 0.25), -12px -12px 16px rgba(255, 255, 255, 0.25);",
    dark: "18px 18px 20px #24262B, -8px -8px 20px #30343A",
  },
  icon: {
    light:
      "rgb(209, 217, 230) 12px 12px 20px, rgb(255, 255, 255) -12px -12px 16px",
    dark: "18px 18px 20px #24262B, -8px -8px 20px #30343A",
  },
});

const buttonColorHover = theme.variants("mode", "variant", {
  default: { light: colors.accent, dark: colors.accent },
  warning: { light: colors.warning, dark: colors.warning },
  danger: { light: colors.danger, dark: colors.danger },
  success: { light: colors.success, dark: colors.success },
  icon: { light: colors.accent, dark: colors.accent },
});

const postCardBgColor = theme.variants("mode", "variant", {
  default: { light: colors.neutral200, dark: colors.neutral500 },
  info: { light: colors.bgInfoCard, dark: colors.bgInfoCard },
  warning: { light: colors.bgWarningCard, dark: colors.bgWarningCard },
  danger: { light: colors.bgDangerCard, dark: colors.bgDangerCard },
  success: { light: colors.bgSuccessCard, dark: colors.bgSuccessCard },
});

const postCardBoxShadow = theme.variants("mode", "variant", {
  default: { light: shadow.shadowInnerLight, dark: shadow.shadowInnerDark },
  info: { light: shadow.shadowInnerLight, dark: shadow.shadowInnerDark },
  warning: { light: shadow.shadowInnerLight, dark: shadow.shadowInnerDark },
  danger: { light: shadow.shadowInnerLight, dark: shadow.shadowInnerDark },
  success: { light: shadow.shadowInnerLight, dark: shadow.shadowInnerDark },
});

export {
  buttonBackground,
  buttonColorHover,
  buttonBoxShadow,
  postCardBgColor,
  textColor,
  postCardBoxShadow,
};
