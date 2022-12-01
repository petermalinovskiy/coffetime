import {Platform, StyleSheet, TextStyle, ViewStyle} from "react-native";
import {Fonts} from "./fonts";
import {CommonSizes} from "./commonSizes";
import {Colors} from "~/core/theme/colors";

export const CommonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  } as ViewStyle,
  flexGrow: {
    flexGrow: 1,
  } as ViewStyle,
  flexShrink: {
    flexShrink: 1,
  } as ViewStyle,
  flex1Padding: {
    flex: 1,
    paddingHorizontal: CommonSizes.spacing.medium,
  } as ViewStyle,
  flexCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  flexSpaceAround: {
    flex: 1,
    justifyContent: 'space-around',
  } as ViewStyle,
  flexColumnCenterStretch: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  } as ViewStyle,
  flexPlatformBackground: {
    flex: 1,
    backgroundColor: Colors.white,
  } as ViewStyle,
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  rowSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  } as ViewStyle,
  row: {
    flexDirection: "row",
  } as ViewStyle,
  columnAlignStart: {
    flexDirection: "column",
    alignItems: "flex-start",
  } as ViewStyle,
  shadow: {
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  } as ViewStyle,
  shadowTopBar: {
    ...Platform.select({
      ios: {
        shadowOffset: {height: 8, width: 0},
        shadowOpacity: 1,
        shadowRadius: 12,
        shadowColor: "rgba(0.22, 0.27, 0.28, 0.08)",
      },
      android: {
        elevation: 5,
      },
    }),
  },
  iPhoneXFooter: {
    height: 20,
  } as ViewStyle,
  normalText: {
    fontFamily: Fonts.system,
    fontSize: CommonSizes.font.medium,
    lineHeight: CommonSizes.lineHeight.medium,
    color: Colors.black,
  } as TextStyle,
  noTextTransform: {
    textTransform: "none",
  },
  logo: {
    fontFamily: Fonts.lobster,
    fontSize: CommonSizes.font.extraLargePlus,
    lineHeight: CommonSizes.lineHeight.extraLargePlus,
    color: Colors.white,
  } as TextStyle,
  button: {
    backgroundColor: Colors.blue,
    width: 300,
    height: 50,
    borderRadius: 25,
    marginTop: 30,
    alignSelf: 'center',
  },
  greenButton: {
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.green,
    marginTop: 30,
    alignSelf: 'center',
  },
  textInput: {
    height: 50,
    padding: 10,
    borderBottomWidth: 1,
    color: Colors.white,
    borderColor: Colors.white,
    minWidth: "80%",
    alignSelf: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    color: Colors.green,
    marginBottom: 10
  },
  subtext: {
    fontSize: 14,
    color: Colors.gray
  },
  text: {
    fontSize: 16,
    color: Colors.gray
  }
});
