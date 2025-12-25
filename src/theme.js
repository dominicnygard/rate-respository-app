import { Platform } from "react-native";

let mainFont;
switch (Platform.OS) {
  case "android":
    mainFont = "Roboto";
    break;
  case "ios":
    mainFont = "Arial";
    break;
  default:
    mainFont = "system";
    break;
}

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    textThird: "#fff",
    primary: "#0366d6",
    appBar: "#24292e",
    errorColor: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: mainFont,
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
