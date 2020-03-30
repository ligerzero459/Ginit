'use strict'

const CLI = require('clui')
const Configstore = require('configstore')
const Octokit = require('@octokit/rest')
const Spinner = CLI.Spinner
const { createBasicAuth } = require('@octokit/auth-basic')

const inquirer = require('./inquirer.js')
const pkg = require('../package.json')

const conf = new Configstore(pkg.name)

let octokit

module.exports = {
  getInstance,
  getStoredGithubToken,
  getPersonalAccesToken
}

function getInstance() {
  return octokit
}

function getStoredGithubToken() {
  return conf.get('github.token')
}

async function getPersonalAccesToken() {

}
