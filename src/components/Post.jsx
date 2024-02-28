import React from 'react';
import { usePost } from './hooks';

export default function Post({ postId, setPostId }) {
    const { status, data, error, isFetching } = usePost(postId)
  
    return (
      <div className='max-w-3xl mx-auto py-2'>
        <div>
          <a onClick={() => setPostId(-1)} href="#"
          className='bg-gray-600 text-white rounded-md px-4 py-0.5'
          >
            Back
          </a>
        </div>
        {!postId || status === 'pending' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <h1 className='text-3xl font-semibold'>{data.title}</h1>
            <div>
              <p>{data.body}</p>
            </div>
            <div className='text-3xl font-semibold'>{isFetching ? 'Background Updating...' : ' '}</div>
          </>
        )}
      </div>
    )
  }
  