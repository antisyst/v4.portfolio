import '@/styles/globals.scss'
import '@/styles/cursor.scss'
import type { AppProps } from 'next/app';
import Loader from '@/components/Loader';



export default function App({ Component, pageProps }: AppProps) {

  // useEffect(() => {
  //   const handleContextMenu = (event: MouseEvent) => {
  //     event.preventDefault();
  //   };

  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.ctrlKey && event.key === 'u') {
  //       event.preventDefault();
  //     }
  //   };

  //   const handleKeyDownSecond = (event: KeyboardEvent) => {
  //     if (event.key === 'F12') {
  //       event.preventDefault();
  //     }
  //   };

  //   document.addEventListener('contextmenu', handleContextMenu);
  //   document.addEventListener('keydown', handleKeyDown);
  //   document.addEventListener('keydown', handleKeyDownSecond);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //     document.removeEventListener('keydown', handleKeyDown);
  //     document.removeEventListener('keydown', handleKeyDownSecond);
  //   };
  // }, []);

  return(
    <>
    <Loader/>
    <Component {...pageProps} />
    </>
  )
}
