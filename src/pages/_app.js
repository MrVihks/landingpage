import '../styles/globals.css'
import Navbar from '../componets/navbar.js'


function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    </>
}

export default MyApp
