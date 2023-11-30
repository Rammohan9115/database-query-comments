"use client"// components/Comments.tsx
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'react-feather';

interface Comment {
  id: number;
  name: string;
  text: string;
  likes: number;
  dislikes: number;
}

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: '', text: '' });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment({ ...newComment, name: e.target.value });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment({ ...newComment, text: e.target.value });
  };

  const handleAddComment = () => {
    if (newComment.name && newComment.text) {
      setComments((prevComments) => [
        ...prevComments,
        {
          id: Date.now(),
          name: newComment.name,
          text: newComment.text,
          likes: 0,
          dislikes: 0,
        },
      ]);
      setNewComment({ name: '', text: '' });
    }
  };

  const handleLike = (commentId: number) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  const handleDislike = (commentId: number) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, dislikes: comment.dislikes + 1 }
          : comment
      )
    );
  };

  return (
    <div className="w-full mx-auto mt-8 p-4 bg-gray-100 rounded-md">
  <h2 className="text-2xl font-bold mb-4">Comments</h2>
  <div className="mb-4 flex items-center">
    <label className="block text-sm font-semibold mb-1 -mr-80" style={{ width: '25%' }}>Name:</label>
    <input
        type="text"
        value={newComment.name}
        onChange={handleNameChange}
        className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
        style={{ width: '250px' }}
    />
</div>

  <div className="mb-4">
    <label className="block text-sm font-semibold mb-1">Comment:</label>
    <input
      type="text"
      value={newComment.text}
      onChange={handleTextChange}
      className="w-full p-4 border rounded-md focus:outline-none focus:border-blue-500"
      style={{ height: '100px' }}
    />
  </div>
  <button
    onClick={handleAddComment}
    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
  >
    Add Comment
  </button>
  <ul className="mt-4">
    {comments.map((comment) => (
      <li key={comment.id} className="mb-2 flex items-center">
        <strong className="text-blue-500">{comment.name}:</strong> {comment.text}{' '}
        <button
          onClick={() => handleLike(comment.id)}
          className="text-green-500 hover:text-green-700 focus:outline-none flex items-center"
        >
          <ThumbsUp size={16} className="mr-1" /> ({comment.likes})
        </button>{' '}
        <button
          onClick={() => handleDislike(comment.id)}
          className="text-red-500 hover:text-red-700 focus:outline-none flex items-center"
        >
          <ThumbsDown size={16} className="mr-1" /> ({comment.dislikes})
        </button>
      </li>
    ))}
  </ul>
</div>

  );
};

export default Comments;
