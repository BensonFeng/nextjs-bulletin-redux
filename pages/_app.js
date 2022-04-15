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
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
