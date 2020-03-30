'use strict'

const fs = require('fs')
const path = require('path')

module.exports = {
  getCurrentDirectoryBase
, directoryExists
}

function getCurrentDirectoryBase() {
  return path.basename(process.cwd())
}

function directoryExists(filePath) {
  return fs.existsSync(filePath)
}
