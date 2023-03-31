import { LikeButton } from "./LikeButton";
import Link from "next/link";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60
    }
  }).then(res => res.json(9));
};

export default async function ListOfPosts({ params }) {
  const posts = await fetchPosts();

  return (
    <>
      {posts.map(post => (
        <article key={post.id}>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <h2 style={{ color: "cyan" }}>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id} />
          </Link>
        </article>
      ))}
    </>
  );
}
