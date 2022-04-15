import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { selectAllPosts } from "../posts/postsSlice";
import Link from "next/link";
import { useRouter } from "next/router";

const UserPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const postsForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter((post) => post.userId === Number(userId));
  });

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link href={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));
  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>{postTitles}</ol>
    </section>
  );
};

export default UserPage;
