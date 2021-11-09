import Phaser from "phaser";
import { talkStyle, menuActionsStyle } from "../modules/fonts.js";

export class ScummBarScene extends Phaser.Scene {
  constructor() {
    super("ScummBarScene");
  }

  preload() {
    // Background
    this.load.image("scummBar", "assets/backgrounds/scummbar.png");

    // Sprite
    this.load.aseprite({
      key: "guybrush",
      textureURL: "assets/sprites/guybrush.png",
      atlasURL: "assets/sprites/guybrush.json"
    });
  }

  create() {
    this.input.setDefaultCursor("crosshair");
    // Background
    const scummBar = this.add.image(0, 0, "scummBar")
      .setOrigin(0, 0)
      .setScale(3);

    // Camera
    this.cameras.main.setBounds(0, 0, scummBar.displayWidth, scummBar.displayHeight);
    this.cameras.main.setSize(scummBar.displayWidth, scummBar.displayHeight);
    this.cameras.main.setViewport(0, 0, 800, 600);

    // Sprite
    this.anims.createFromAseprite("guybrush", ["idle", "walk"]);
    this.anims.get("walk").repeat = -1;
    this.guybrush = this.add.sprite(300, 300, "guybrush")
      .setScale(3)
      .play("idle");

    // Input
    this.cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.startFollow(this.guybrush, true);

    // Character talk
    this.add.text(60, 130, "Hola, soy Guybrush Threepwood \ny quiero ser pirata", talkStyle);

    const menuActions = [
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
    const menuItems = menuActions.map(action => {
      const text = this.add.text(action.x, action.y, action.text, menuActionsStyle).setInteractive();
      text.on("pointerover", () => text.setColor("#F8FC50"));
      text.on("pointerout", () => text.setColor("#00A800"));
      return text;
    });
  }

  update() {
    if (this.cursors.left.isDown && this.guybrush.x > 30) {
      this.guybrush.x -= 2;
      this.guybrush.play("walk", true).setFlipX(true);
    } else if (this.cursors.right.isDown) {
      this.guybrush.x += 2;
      this.guybrush.play("walk", true).setFlipX(false);
    } else {
      this.guybrush.play("idle", true);
    }
  }
}
