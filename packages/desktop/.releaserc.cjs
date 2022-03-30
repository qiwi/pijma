module.exports = {
  branch: 'master',
  plugins: [
    [
      '@qiwi/semrel-metabranch',
      {
        publish: {
          action: 'push',
          branch: 'gh-pages',
          from: './styleguide/lib',
          to: './desktop',
          message: 'update docs ${nextRelease.gitTag}',
        }
      }
    ],
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          {type: 'docs', release: 'patch'},
          {type: 'doc', release: 'patch'},
          {type: 'refactor', release: 'patch'},
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
        }
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semrel-extra/npm',
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'YARN_ENABLE_IMMUTABLE_INSTALLS=false yarn install && git add ../../yarn.lock'
      }
    ],
    [
      '@semantic-release/github',
      {
        successComment: false,
        failComment: false
      }
    ],
    [
      '@semantic-release/git',
      {
        message: 'chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ]
}
