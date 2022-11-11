/* global Phaser */

// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: nov 2022
// This is Splash Scene

/**
 * this class is the splash scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This mathod is the construtor.
   */
  constructor() {
    super({ key: splahScene });
  }

/**
 * Can be defined on your own scenes
 * This mathod is called by the Scene Manager when  the scene start,
 *  before preload() and crate().
 *   @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
 */
init(data) {
    This.cameras.main.setBackgroundColor(ffffff)
}
/**
 * can be defined on your own scenes.
 * use it to load assets.
 */
preload() {
    console.log("Splash Scene")
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
   * this should beoverridden by your own Scenes.
   * This mathod is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    // pass
  }
}

export default SplashScene;
