import Theme from "../../styles/theme";
import Layout from "../Layout";

// Insert the theme and layout components here into the application so that component states are preserved
function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}

export default MyApp;
