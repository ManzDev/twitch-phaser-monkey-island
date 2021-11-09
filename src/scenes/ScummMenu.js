import Phaser from "phaser";
import { menuActionsStyle } from "../modules/fonts.js";

export class ScummMenu extends Phaser.Scene {
  constructor() {
    super({ key: "ScummMenu", active: true });
  }

  create() {
    const menuActionsData = [
      { x: 15, y: 460, text: "Open" },
      { x: 15, y: 460, text: "Open" },
      { x: 15, y: 490, text: "Close" },
      { x: 15, y: 520, text: "Push" },
      { x: 15, y: 550, text: "Pull" },
      { x: 150, y: 460, text: "Walk to" },
      { x: 150, y: 490, text: "Pick up" },
      { x: 150, y: 520, text: "Talk to" },
      { x: 150, y: 550, text: "Give" },
      { x: 335, y: 460, text: "Use" },
      { x: 335, y: 490, text: "Look at" },
      { x: 335, y: 520, text: "Turn on" },
      { x: 335, y: 550, text: "Turn off" }
    ];

    // Menu Action
    const menuItems = menuActionsData.map(action => {
      const text = this.add.text(action.x, action.y, action.text, menuActionsStyle).setInteractive();
      text.on("pointerover", () => text.setColor("#F8FC50"));
      text.on("pointerout", () => text.setColor("#00A800"));
      return text;
    });

    menuItems[7].on("pointerdown", () => {
      console.log("lala");
      const scene = this.scene.get("ScummBarScene");
      scene.message.x = scene.guybrush.x - 30;
      scene.message.setVisible(true);
    });
  }
}
