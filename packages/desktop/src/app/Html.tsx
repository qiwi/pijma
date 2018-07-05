import React from 'react'

import HtmlProps from './HtmlProps'

const Html: React.SFC<HtmlProps> = (props) => (
  <html lang="ru">
  <head>
    <meta charSet="utf-8"/>
    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="viewport" content="width=1024"/>
    <meta name="apple-itunes-app" content="app-id=350905609"/>
    <title>pijma demo desktop</title>
  </head>
  <body>
  <div id="app">
    {props.children}
  </div>
  {props.scripts.map(script => (
    <script key={script} src={script}/>
  ))}
  </body>
  </html>
)

export default Html
