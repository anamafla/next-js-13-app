import Link from "next/link";

const fetchSinglePost = id => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  }).then(res => res.json());
};

export default async function Post({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);
  console.log("post", post);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>See comments</Link>
      <div>{children}</div>
    </article>
  );
}
