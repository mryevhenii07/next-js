import NavBar from '../components/NavBar';
import '../styles/globals.css';
// import MyDocument from '../components/MyDocument.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
