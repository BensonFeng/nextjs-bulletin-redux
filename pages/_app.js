import "../styles/globals.css";
import { store } from "../app/store";
import { Provider } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";
import { fetchUsers } from "../features/users/usersSlice";
import Layout from "../components/Layout";

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
