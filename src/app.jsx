import React, { useMemo, useState } from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import { useLocation } from 'react-router'
import { Grid } from './components/grid'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { UrlPreview } from './components/url-preview'
import { LocaleContext } from './locale-provider'

const localeModules = import.meta.glob('./locales/*.json', {
  eager: true,
  import: 'default',
})

const getMessages = (locale) => {
  return localeModules[`./locales/${locale.toLowerCase()}.json`]
}

function App() {
  const defaultLocale =
    localStorage.getItem('locale') ||
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    'en-US'

  const [locale, setLocale] = useState(defaultLocale)
  const messages = useMemo(() => {
    const localeMessages = getMessages(locale)

    if (localeMessages) {
      return localeMessages
    }

    // Fallback to English and clean a potentially corrupted storage
    localStorage.removeItem('locale')
    return getMessages('en-US')
  }, [locale])

  const location = useLocation()
  const isRoot = location.pathname === '/'

  return (
    <IntlProvider locale={locale} messages={messages}>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <Header />
        <main>
          <Grid className="relative">
            <div className="[transition:margin_0.5s_ease] tall:mt-[50%] tall:translate-y-[50%]">
              {isRoot && (
                <p className="absolute top-[125%] left-0 right-0 text-center md:-top-1/2">
                  <FormattedMessage id="homepage.urlPreview.placeholder" />
                </p>
              )}
              <UrlPreview />
            </div>
          </Grid>
        </main>
        <Footer />
      </LocaleContext.Provider>
    </IntlProvider>
  )
}

export default App
