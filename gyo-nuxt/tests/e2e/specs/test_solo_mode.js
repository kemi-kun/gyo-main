// Needed to get the serverHost and serverPort
// const globals = require('./globals')

/**
 * Nightwatch
 * @url Setup Guide https://nightwatchjs.org/guide/
 * @url API Reference https://nightwatchjs.org/api/commands/
 */
module.exports = {
  // Set true to disable this test
  disabled: false,
  'Open index page' (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('#start-button', 5000)
      .assert.titleContains('gyo-main')
      .assert.containsText('h1', 'Welcome to Gyoza')
      .assert.containsText('#how-to-play', 'How to play')
      // .end()
  },

  'Click the Start button to select game mode' (browser) {
    const soloBtnId = '#solo-mode'
    const multiBtnId = '#multi-mode'
    browser
      .click('#start-button')
      .assert.visible(soloBtnId)
      .assert.visible(multiBtnId)
  },

  /* TODO: change to #set-playername */
  'Click the Solo button' (browser) {
    browser
      .click('#solo-mode')
      .waitForElementVisible('#set-username')
      .assert.visible('#username-form')
      // .assert.visible
  },

  'Enter the username and click the Enter button' (browser) {
    browser
      .setValue('#username', 'Player 1')
      .pause(1000)
      .click('#enter-btn')
  },

  'Enter the genre "Pop" and click the Start round button' (browser) {
    browser
      .waitForElementVisible('#select-genre ', 5000)
      .setValue('#genre', 'Pop')
      .pause(1000)
      .click('#start-round-btn')
  }

  // 'Wait for the round start' (browser) {

  // }
}
