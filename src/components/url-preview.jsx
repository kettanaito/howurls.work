import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'
import { Heading } from './heading'
import { Chunk } from './chunk'

const createStandardComponent = (Name) => {
  return (...chunks) => <Name>{chunks}</Name>
}

const formattedMessageValues = {
  p: createStandardComponent('p'),
  em: createStandardComponent('em'),
  ul: createStandardComponent('ul'),
  li: createStandardComponent('li'),
  strong: createStandardComponent('strong'),
  code: createStandardComponent('code'),
  ProtocolLink: (...chunks) => {
    return <Link to="/protocol">{chunks}</Link>
  },
}

const urlBoxClassNames = [
  'inline-block w-full max-w-full px-[1.25rem] py-[1rem] overflow-x-auto whitespace-nowrap',
  'rounded-[0.5rem] border border-[hsla(220,15%,40%,0.16)] text-[hsl(220,15%,40%)]',
  'font-mono text-[1rem]',
  'md:overflow-x-visible md:text-[1.5rem]',
  'shadow-[0_2.8px_2.2px_rgba(0,0,0,0.006),0_6.7px_5.3px_rgba(0,0,0,0.008),0_12.5px_10px_rgba(0,0,0,0.01),0_22.3px_17.9px_rgba(0,0,0,0.012),0_41.8px_33.4px_rgba(0,0,0,0.014),0_100px_80px_rgba(0,0,0,0.02)]',
].join(' ')

export const UrlPreview = () => {
  return (
    <div className={urlBoxClassNames}>
      <Chunk
        url="protocol"
        color="#c64b5d"
        explanation={() => (
          <div>
            <Heading>
              <FormattedMessage id="url.http.protocol.name" />
            </Heading>
            <p>
              <FormattedMessage
                id="url.http.protocol.definition"
                values={formattedMessageValues}
              />
            </p>
            <FormattedMessage
              id="url.http.protocol.description"
              values={formattedMessageValues}
            />
          </div>
        )}
      >
        https://
      </Chunk>
      <Chunk
        url="domain"
        orientation="top"
        color="#307ab8"
        explanation={() => (
          <div>
            <Heading>
              <FormattedMessage id="url.http.domain.name" />
            </Heading>
            <p>
              <FormattedMessage
                id="url.http.domain.definition"
                values={formattedMessageValues}
              />
            </p>
            <FormattedMessage
              id="url.http.domain.description"
              values={formattedMessageValues}
            />
          </div>
        )}
      >
        site.com
      </Chunk>
      <Chunk
        url="port"
        color="#7f4ae4"
        explanation={() => (
          <div>
            <Heading>
              <FormattedMessage id="url.http.port.name" />
            </Heading>
            <p>
              <FormattedMessage id="url.http.port.definition" />
            </p>
            <FormattedMessage
              id="url.http.port.description"
              values={formattedMessageValues}
            />
          </div>
        )}
      >
        :443
      </Chunk>
      <Chunk
        url="path"
        orientation="top"
        align="right"
        color="#3caea3"
        explanation={() => (
          <div>
            <Heading>
              <FormattedMessage id="url.http.path.name" />
            </Heading>
            <p>
              <FormattedMessage
                id="url.http.path.definition"
                values={formattedMessageValues}
              />
            </p>
            <FormattedMessage
              id="url.http.path.description"
              values={formattedMessageValues}
            />
          </div>
        )}
      >
        /user
      </Chunk>
      <Chunk
        url="query"
        color="#9f8a2d"
        align="right"
        explanation={() => (
          <div>
            <Heading>
              <FormattedMessage id="url.http.query.name" />
            </Heading>
            <p>
              <FormattedMessage
                id="url.http.query.definition"
                values={formattedMessageValues}
              />
            </p>
            <FormattedMessage
              id="url.http.query.description"
              values={formattedMessageValues}
            />
          </div>
        )}
      >
        ?id=123
      </Chunk>
      <Chunk
        url="fragment"
        orientation="top"
        align="right"
        color="#ed553b"
        explanation={() => (
          <div>
            <Heading>
              <FormattedMessage id="url.http.fragment.name" />
            </Heading>
            <p>
              <FormattedMessage
                id="url.http.fragment.definition"
                values={formattedMessageValues}
              />
            </p>
            <FormattedMessage
              id="url.http.fragment.description"
              values={formattedMessageValues}
            />
          </div>
        )}
      >
        #settings
      </Chunk>
    </div>
  )
}
