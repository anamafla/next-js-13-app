import { Suspense } from "react";
import ListOfPosts from "./ListOfPosts";

export default function PostsPage({ params }) {
  return (
    <section>
      <Suspense fallback={<p>Loading posts.. </p>}>
        <ListOfPosts />
      </Suspense>
    </section>
  );
}
