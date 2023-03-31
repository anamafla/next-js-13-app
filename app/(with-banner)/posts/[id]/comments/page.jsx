import Image from "next/image.js";

const fetchComments = async id => {
  await new Promise(resolve => setTimeout(resolve, 5000));
  //throw new Error("Error when loading comments");
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then(res => res.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);
  console.log("comments", comments);

  return (
    <ul style={{ fontSize: "12px", padding: "15px" }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image
            width="50"
            height="50"
            style={{ "border-radius": "50%" }}
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
          ></Image>
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}
