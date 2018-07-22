const readPkg = require('read-pkg')
const hooks = require('semantic-release-monorepo-hooks')
const output = hooks()
const packName = readPkg.sync().name
const publish = output.isLastChanged
  ? [
    '@semantic-release/github',
    '@semantic-release/npm'
  ]
  : [
    '@semantic-release/npm'
  ]

module.exports = {
  branch: 'master',
  tagFormat: 'v${version}',
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    {
      'path': '@semantic-release/git',
      'message': 'chore(' + packName + '): release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
  ],
  publish: publish,
  verifyConditions: ['@semantic-release/npm', '@semantic-release/git']
};
