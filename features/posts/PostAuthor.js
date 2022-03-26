import { useSelector } from "react-redux";
import { selectAllUser } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUser);

  const author = users.find((user) => user.id === userId);

  return <span>By {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
