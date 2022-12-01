/* global Phaser */

// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: nov 2022
// This is Menu Scene

/**
 * This class is the Menu Scene
 */
class MenuScene extends phaser.scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "menuScene" })
  }

  /**
   * Can be defined on your own scenes
   * This mathod is called by the Scene Manager when  the scene starts,
   *  before preload() and crate().
   *  @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundcolor("FF0000")
  }

  /**
   * can be defined on your own scenes.
   * use it to load assets.
   */
  preload() {
    console.log("Menu Scene")
  }

  /**
   * can be defined on your own scene.
   * use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  crate(data) {
    // pass
  }

  /**
   * this should beoverridden by your own Scenes.
   * This mathod is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    // pass
  }
}

export default MenuScene
