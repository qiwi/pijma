const path = require('path')
const docgen = require('react-docgen-typescript')

const pkg = require(path.resolve(__dirname, 'package.json'))

const styleguide = path.resolve(__dirname, 'styleguide')

const tsConfig = require(path.resolve(__dirname, '..', '..', 'tsconfig.json'))

const alias = Object.keys(tsConfig.compilerOptions.paths).reduce((p, c) => Object.assign(p, {
  [c.replace(/\/\*$/, '')]: path.resolve(__dirname, '..', '..', tsConfig.compilerOptions.baseUrl, tsConfig.compilerOptions.paths[c][0].replace(/\/\*$/, '')),
}), {})

module.exports = {
  resolver: docgen.resolver,
  propsParser: docgen.parse,
  serverPort: 7070,
  styleguideDir: path.resolve(styleguide, 'lib'),
  styleguideComponents: {
    Wrapper: path.resolve(styleguide, 'Wrapper'),
  },
  theme: {
    fontFamily: {
      base: '\'Museo Sans\', \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif'
    },
    mq: {
      small: '@media (min-width: 0px)'
    }
  },
  require: [
    path.resolve(styleguide, 'require.js')
  ],
  defaultExample: path.resolve(styleguide, 'DefaultExample.md'),
  getComponentPathLine(componentPath) {
    return `import {${path.basename(componentPath, path.extname(componentPath))}} from '${pkg.name}'`
  },
  pagePerSection: true,
  sections: [
    {
      name: 'Intro',
      sectionDepth: Number.MAX_VALUE
    },
    {
      name: 'Buttons',
      components: [
        'src/**/*Button.{js,jsx,ts,tsx}'
      ],
      sectionDepth: Number.MAX_VALUE
    },
    {
      name: 'Modals',
      components: [
        'src/**/*Modal.{js,jsx,ts,tsx}'
      ],
      sectionDepth: Number.MAX_VALUE
    },
    {
      name: 'Fields',
      components: [
        'src/**/*Field.{js,jsx,ts,tsx}'
      ],
      sectionDepth: Number.MAX_VALUE
    },
    {
      name: 'Typography',
      components: [
        'src/typography/*.tsx'
      ],
      sectionDepth: Number.MAX_VALUE
    },
    {
      name: 'Other',
      sections: [
        {
          name: 'Icons',
          content: path.resolve(styleguide, 'Icons.md'),
          sectionDepth: Number.MAX_VALUE
        },
        {
          name: 'Weak icons',
          content: path.resolve(styleguide, 'WeakIcons.md'),
          sectionDepth: Number.MAX_VALUE
        }
      ],
      components: [
        'src/**/*Actions.{js,jsx,ts,tsx}'
      ],
      sectionDepth: Number.MAX_VALUE
    },
    {
      name: 'Primitives',
      sections: [
        {
          name: 'Flex',
          content: path.resolve(styleguide, 'Flex.md'),
          sectionDepth: Number.MAX_VALUE
        }
      ],
      sectionDepth: Number.MAX_VALUE
    },
  ],
  logger: {
    info: () => null,
    warn: () => null
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'ts-loader'
            }
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(?:png|jpg|gif|ico|eot|woff|woff2|ttf|svg)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias,
      extensions: ['.tsx', '.ts', '.js']
    }
  }
};
