// Needed to get the serverHost and serverPort
// const globals = require('./globals')

/**
 * Nightwatch
 * @url Setup Guide https://nightwatchjs.org/guide/
 * @url API Reference https://nightwatchjs.org/api/commands/
 */

// const playGame = require('./run_challenge_word.js')
const challengeWords = ['Hate', 'Love']
const numChallengeWords = challengeWords.length
const playerName = 'Player 1'

function testDisplayIndex (browser) {
  browser
    .waitForElementVisible('#start-button', 5000)
    .assert.titleContains('gyo-main')
    .assert.containsText('h1', 'Welcome to Gyoza')
    .assert.containsText('#how-to-play', 'How to play')
}

function testDisplayChallengeWord (browser, word) {
  browser
    .waitForElementVisible('#word-countdown')
    .assert.visible('#timer')
    .assert.visible('#answer-button')
    .assert.containsText('#word', word)
}

function testEnterAndSubmitAnswer (browser, songName, artist) {
  const inputSongNameId = '#song-name'
  const inputArtistId = '#artist-name'
  const submitBtnId = '#submit-answer-btn'
  const scoreId = '#score'
  browser
    .click('#answer-button')
    .waitForElementVisible('#enter-answer-form')
    .assert.visible(inputSongNameId)
    .assert.visible(inputArtistId)
    .assert.visible(submitBtnId)
    .assert.visible(scoreId)
    .setValue(inputSongNameId, songName)
    .pause(1000)
    .setValue(inputArtistId, artist)
    .pause(1000)
    .click(submitBtnId)
}

function testDisplayPossibleAnswer (browser) {
  browser
    .waitForElementVisible('#word-answer')
    .assert.visible('#answer-songs')
    .assert.visible('#next-btn')
    .click('#next-btn')
}

module.exports = {
  // Set true to disable this test
  disabled: false,
  'Open index page' (browser) {
    browser
      .url('http://localhost:3000')
    testDisplayIndex(browser)
  },

  'Click the Start button to select game mode' (browser) {
    const soloBtnId = '#solo-mode'
    const multiBtnId = '#multi-mode'
    browser
      .click('#start-button')
      .assert.visible(soloBtnId)
      .assert.visible(multiBtnId)
  },

  'Click the Solo button' (browser) {
    browser
      .click('#solo-mode')
      .waitForElementVisible('#set-username')
      .assert.visible('#username-form')
      // .assert.visible
  },

  'Enter the username and click the Enter button' (browser) {
    browser
      .setValue('#username', playerName)
      .pause(1000)
      .click('#enter-btn')
  },

  'Enter the genre "Pop" and click the Start round button' (browser) {
    browser
      .waitForElementVisible('#select-genre', 5000)
      .setValue('#genre', 'Pop')
      .pause(1000)
      .click('#start-round-btn')
  },

  'Wait for the round to start' (browser) {
    browser
      .waitForElementVisible('#wait-round')
      .assert.containsText('#wait-round', 'Round')
      // .pause(3000)
  },

  'Play the game' (browser) {
    for (let i = 0; i < numChallengeWords; i++) {
      testDisplayChallengeWord(browser, challengeWords[i])
      testEnterAndSubmitAnswer(browser, 'Song name', 'Artist name')
      testDisplayChallengeWord(browser, challengeWords[i])
      testDisplayPossibleAnswer(browser)
    }
  },

  'Display the leadboard when there is no challenge word left' (browser) {
    browser
      .url('http://localhost:3000/round/_id/leaderboard')
      .waitForElementVisible('#leaderboard')
      .assert.containsText('h1', 'Leader Board')
      .assert.visible('#exit')
      .assert.visible('#next-round')
  },

  'Back to the welcome screen' (browser) {
    browser
      .click('#exit')
    testDisplayIndex(browser)
  }

}
