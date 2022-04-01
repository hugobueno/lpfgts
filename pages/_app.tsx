import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import Toast from '../src/contexts/ToastContext'
import Theme from '../src/contexts/modeContext'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyles />
      <Toast>
        <Component {...pageProps} />
      </Toast>
    </Theme>
  )
}
export default MyApp
