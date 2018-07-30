import React from 'react'
import {renderToNodeStream} from 'react-dom/server'
import {Request, Response, NextFunction} from 'express'
import {renderStylesToNodeStream} from 'emotion-server'

import {server as desktop} from '@qiwi/pijma-desktop/lib/es5/app'
import {server as mobile} from '@qiwi/pijma-mobile/lib/es5/app'

type ClientStatsChunk = {
  initial: boolean
  files: string[]
}

type ClientStats = {
  publicPath: string
  chunks: ClientStatsChunk[]
}

type Stats = {
  clientStats: ClientStats[]
}

type ExtendedRequest = Request & {
  device: {
    type: string
  }
}

const servers: {[device: string]: (props: any) => React.ReactElement<any>} = {
  desktop: desktop,
  phone: mobile,
  tablet: mobile,
  tv: mobile,
  bot: mobile,
  car: mobile,
}

const devices: {[device: string]: number} = {
  desktop: 0,
  phone: 1,
  tablet: 1,
  tv: 1,
  bot: 1,
  car: 1,
}

const server = ({clientStats}: Stats) => {

  return (req: ExtendedRequest, res: Response, next: NextFunction) => {

    const device = devices[req.device.type]

    const props = {
      scripts: clientStats[device]
        .chunks
        .filter(chunk => chunk.initial)
        .reduce<string[]>((files, chunk) => files.concat(`${clientStats[device].publicPath}${chunk.files[0]}`), []),
    }

    res.status(200)
    res.contentType('text/html; charset=utf-8')
    res.write('<!DOCTYPE html>')

    const Server = servers[req.device.type]

    const stream = renderToNodeStream(<Server {...props}/>).pipe(renderStylesToNodeStream())

    stream.pipe(res, {end: false})
    stream.on('end', () => res.end())

  }

}

export default server
