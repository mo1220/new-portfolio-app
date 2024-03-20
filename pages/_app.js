import { Noto_Sans_KR } from 'next/font/google'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Noto_Sans_KR({
  weight: ['100', '300', '400' , '500','700', '900'],
    style: ['normal'],
    display: 'swap',
    subsets: ['latin']
 })
  
function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
