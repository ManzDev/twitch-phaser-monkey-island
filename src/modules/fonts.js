import WebFont from "webfontloader";

const baseTextStyle = {
  fontFamily: "EnterCommand",
  fontSize: 32,
  color: "#fff"
};

export const talkStyle = {
  ...baseTextStyle,
  stroke: "red",
  strokeThickness: 3,
  padding: 20
};

export const menuActionsStyle = {
  ...baseTextStyle,
  fontSize: 48,
  color: "#00A200",
};

export const menuActionsHoverStyle = {
  ...baseTextStyle,
  fontSize: 48,
  color: "#F2F64E",
};

WebFont.load({
  custom: {
    families: ["Monkey Island 1991"]
  },
  active() {
    console.log("Cargado");
  }
});
