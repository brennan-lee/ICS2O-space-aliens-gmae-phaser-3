/* global Phaser */

// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: nov 2022
// This is the phaser3 game configuration file

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
      debug: true
   },
 },
   //set background color
  backgroundColor: 0x5f6e7a,
 scale: {
     mode: phaser.scale.FIT,
  //we replaced it in the middle of the page
      autocenter: phaser.scale.CENTER_BOTH
   },
},

const game = new Phaser.Game(config);
console.log(game);
