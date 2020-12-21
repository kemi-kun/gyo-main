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
      .waitForElementVisible('body')
      .assert.titleContains('gyo-main')
  },

  'Click documentation button' (browser) {
    browser
      .click('#page-1')
      .waitForElementPresent('#heading', 5000)
  }

  // 'Open page 1' (browser) {
  //   browser
  //     .url('http://localhost:3000/page1')
  //     .waitForElementPresent('#heading', 5000)
  //     .assert.containsText('#heading', 'Hello!')
  //     .end()
  //     //    .click('#page-1')
  // }
}
