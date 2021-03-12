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
          message: 'update pijma-desktop docs'
        }
      }
    ],
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        successComment: false,
        failComment: false
      }
    ],
    '@semantic-release/git'
  ]
}
