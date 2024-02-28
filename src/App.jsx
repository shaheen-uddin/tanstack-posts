
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Post from "./components/Post";
import Posts from "./components/Posts";
import { useState } from "react";

const queryClient = new QueryClient();

export default function App() {
  const [postId, setPostId] = useState(-1)
  console.log(postId);

  return (
    <QueryClientProvider client={queryClient}>
      <p className="max-w-3xl p-2 mx-auto">
        As you visit the posts below, you will notice them in a loading state
        the first time you load them. However, after you return to this list and
        click on any posts you have already visited again, you will see them
        load instantly and background refresh right before your eyes!{' '}
        <strong>
          (You may need to throttle your network speed to simulate longer
          loading sequences)
        </strong>
      </p>
      {postId > -1 ? (
        <Post postId={postId} setPostId={setPostId} />
      ) : (
        <Posts setPostId={setPostId} />
      )}
     {/*  <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  )
}