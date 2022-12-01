/* global Phaser */

// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: nov 2022
// This is Game Scene

/**
 *  This is the Title Scene.
 */
class GameScene extends Phaser.Scene {
  /**
   * This is the construtor.
   */
  constructor() {
    super({ key: "gameScene" })
  }
  

  /**
   * can be definded on your own scenes.
   * this mathod is called by the scene manager when the scene starts,
   * before payload() and crate().
   * @param {object} data - any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("FFFFFF")
  }

  /**
   * this can be definded on your own scenes.
   * use it to load assets.
   */
  preload() {
    console.log("Game Scene")
  }
  
  /**
   * can be defined on your own scene.
   * use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
// pass
  }

  /**
   * this can be definded on your own scenes.
   * use it to crate your game objects.
   * @param {number} time - current time
   * @param {number} delta - the delta time in ms since last frame.
   */
  update(time, delta) {
  // pass
  }
}
export default GameScene
