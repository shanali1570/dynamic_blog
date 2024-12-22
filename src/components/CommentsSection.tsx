import React, { useState } from 'react';

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8 p-4 bg-white shadow rounded">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      <div className="mb-4 flex flex-col">
        <textarea
          className="w-1/2 p-2 border rounded"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          className="md:w-1/2 mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>
      <ul className="space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="p-2 border md:w-1/2 rounded">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsSection;
