/* global Phaser */

// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: nov 2022
// This is the phaser3 game configuration file

// scene import statements
import SplashScene from "./splahScene.js";

// crate the new scenes
const splashScene = new SplashScene()

/**
 * start phaser game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  //set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    //we replaced it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);
// console.log(game);

// load scenes
// note: remember any "key" is global and CAN NOT be reused!
game.scene.add("splashScene", splahScene);

// the start scene
game.scene.start(splahScene);
