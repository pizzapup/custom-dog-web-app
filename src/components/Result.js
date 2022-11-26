import { Medium, Chonky, Regular } from "../images/customize-dog/body";
import { deleteData, updateData } from "../firebase/dbHelpers";
const uids = "default-user";
export default function Result({ data, postKey }) {
  const updatePost = (e) => {
    e.preventDefault();
    const newUpdate = { ...data, name: "UPDATEDs" };
    updateData(newUpdate, postKey, ["posts", `user-posts/${uids}/${postKey}`]);
  };
  const deletePost = (e) => {
    e.preventDefault();
    deleteData(postKey, [`/posts/`, `/user-posts/${uids}/`]);
  };

  const componentMapping = {
    medium: <Medium />,
    regular: <Regular />,
    chonky: <Chonky />,
  };
  return (
    <>
      <div id={data.id}>
        {componentMapping[`${data.body}`]}
        <div>
          <ul>
            <li key="1">Name: {data.name}</li>
            <li key="2">Color: {data.color}</li>
            <li key="3">Body: {data.body}</li>
            <li key="4">Eyes: {data.eyes}</li>
            <li key="5">User: {data.uids}</li>
            <li key="6">Key: {postKey}</li>
          </ul>
        </div>
        <button onClick={deletePost}>delete</button>
        <button onClick={updatePost}>update</button>
      </div>
    </>
  );
}
