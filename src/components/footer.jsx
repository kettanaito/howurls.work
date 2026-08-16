import React from 'react'
import { FormattedMessage } from 'react-intl'
import GitHubLogo from '../images/github-logo.svg?react'
import VercelLogo from '../images/vercel-logo.svg?react'
import { Grid } from './grid'
import { LanguageSwitch } from './language-switch'

export const Footer = () => {
  return (
    <Grid>
      <footer className="flex items-center justify-between pt-[2rem] pb-[1rem] [&_a]:text-black [&_a:hover]:text-primary">
        <div>
          <FormattedMessage
            id="footer.copyright"
            values={{
              author: (
                <a
                  href="https://kettanaito.com/"
                  title="kettanaito's twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kettanaito
                </a>
              ),
            }}
          />

          <p className="flex items-center">
            <span>Powered by</span>
            <a
              className="-mb-[2px] ml-[0.5ch]"
              href="https://vercel.com/?utm_source=artemz"
            >
              <VercelLogo width={64} fill="currentColor" />
            </a>
          </p>
        </div>
        <div className="flex items-center">
          <div className="mr-[10px]">
            <LanguageSwitch />
          </div>
          <a
            className="-mr-[10px] box-content inline-block h-[24px] p-[10px]"
            href="https://github.com/Redd-Developer/howurls.work"
            title="GitHub repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogo width={24} />
          </a>
        </div>
      </footer>
    </Grid>
  )
}
