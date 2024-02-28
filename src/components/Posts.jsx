import { useQueryClient } from "@tanstack/react-query";
import { usePosts } from "./hooks";
import axios from 'axios';
import { ImCircleRight } from "react-icons/im";


export default function Posts({ setPostId }) {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = usePosts();
   // console.log(data);
  
    return (
      <div className="max-w-3xl mx-auto p-2">
        <h1 className="text-3xl font-medium">Posts</h1>
        <div>
          {status === 'pending' ? (
            'Loading...'
          ) : status === 'error' ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              <div>
                {data.map((post) => (
                  <p key={post.id}
                  className="text-lg font-mono py-0.5 px-2 hover:bg-teal-100 rounded-md flex items-center gap-1"
                  >
                    <ImCircleRight />

                    <a className="  "
                      onClick={() => setPostId(post.id)}
                      href="#"
                      style={
                        // We can access the query data here to show bold links for
                        // ones that are cached
                        queryClient.getQueryData(['post', post.id])
                          ? {
                              fontWeight: 'bold',
                              color: 'green',
                            }
                          : {}
                      }
                    >
                      {post.title}
                    </a>
                  </p>
                ))}
              </div>
              <div className="text-2xl font-medium">{isFetching ? 'Background Updating...' : ' '}</div>
            </>
          )}
        </div>
      </div>
    )
  }