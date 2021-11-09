import Phaser from "phaser";
import { talkStyle } from "../modules/fonts.js";

export class ScummBarScene extends Phaser.Scene {
  constructor() {
    super({ key: "ScummBarScene", active: true });
  }

  preload() {
    // Background
    this.load.image("scummBar", "assets/backgrounds/scummbar.png");

    // Images
    this.load.image("cloth", "assets/images/cloth.png");
    this.load.image("table1", "assets/images/table1.png");
    this.load.image("table2", "assets/images/table2.png");

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

    this.add.image(153, 392, "table1").setScale(3).setDepth(100);
    this.add.image(597, 387, "table2").setScale(3).setDepth(100);
    this.add.image(946, 312, "cloth").setScale(3).setDepth(100);

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
    this.cameras.main.startFollow(this.guybrush, false);

    // Character talk
    this.message = this.add.text(60, 130, "Hola, soy Guybrush Threepwood \ny quiero ser pirata", talkStyle).setVisible(false);
  }

  update() {
    if (this.cursors.left.isDown && this.guybrush.x > 190) {
      this.guybrush.x -= 2;
      this.guybrush.play("walk", true).setFlipX(true);
    } else if (this.cursors.right.isDown && this.guybrush.x < 910) {
      this.guybrush.x += 2;
      this.guybrush.play("walk", true).setFlipX(false);
    } else {
      this.guybrush.play("idle", true);
    }
  }
}
