import Phaser from "phaser";
import { ScummBarScene } from "./scenes/ScummBarScene.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  autoCenter: Phaser.Scale.Center.CENTER_BOTH,
  backgroundColor: "#000000",
  pixelArt: true,
  scene: [ScummBarScene]
};

// eslint-disable-next-line
const game = new Phaser.Game(config);
