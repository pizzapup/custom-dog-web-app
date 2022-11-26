import { updateData, writeData } from "../../firebase/dbHelpers";

const uids = "default-user";
const writePost = (e, values) => {
  e.preventDefault();
  writeData(values, ["posts", `user-posts/${uids}`]);
};
export function writePosts(values) {
  writeData(values, ["posts", `user-posts/${uids}`]);
}
const updatePost = (e, values) => {
  e.preventDefault();
  updateData(values, values.postKey, [("posts", `user-posts/${uids}`)]);
};

const deletePost = (e, values) => {
  e.preventDefault();
  updateData(values.postKey, [("posts", `user-posts/${uids}`)]);
};

export { writePost, updatePost, deletePost };
