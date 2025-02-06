import "../styles/styles.css"; // Importer globale stilarter

export default function App({ Component, pageProps }) {
  return (
    <div className="app-wrapper">
      <Component {...pageProps} />
    </div>
  );
}
