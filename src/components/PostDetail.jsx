import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApartmentById } from '../mockApi';
import "./PostDetail";

function PostDetail() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [editingCommentIndex, setEditingCommentIndex] = useState(-1);
  const [comments, setComments] = useState([]); // Добавьте состояние для комментариев

  // Функция для добавления комментария
  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  // Функция для обновления комментария
  const updateComment = (index, comment) => {
    const updatedComments = [...comments];
    updatedComments[index] = comment;
    setComments(updatedComments);
  };

  // Функция для удаления комментария
  const deleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const handleAddComment = () => {
    if (newComment) {
      addComment(newComment);
      setNewComment('');
    }
  };

  const handleEditComment = (index) => {
    setEditingCommentIndex(index);
    setNewComment(comments[index]);
  };

  const handleUpdateComment = () => {
    if (newComment) {
      updateComment(editingCommentIndex, newComment);
      setEditingCommentIndex(-1);
      setNewComment('');
    }
  };


  useEffect(() => {
    // Загрузка данных о квартире по идентификатору
    fetchApartmentById(parseInt(id, 10))
      .then((data) => {
        setApartment(data);
      })
      .catch((error) => {
        console.error('Error loading apartment data:', error);
      });
  }, [id]);

  if (!apartment) {
    return <div>The apartment was not found.</div>;
  }

return (
    <div className='main'>
      <div>
        <div>
          <h2 className='info-section'>{apartment.rooms}-bedroom, monthly, {apartment.address}</h2>
          <p>{apartment.name}</p> 
          <p>{apartment.text}</p>

        </div>



       <div className='line'>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className='add-comment'
        />
        <button className='but' onClick={editingCommentIndex === -1 ? handleAddComment : handleUpdateComment}>
          {editingCommentIndex === -1 ? 'Send' : 'Update'}
        </button>
      </div>

      <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="comment-box">
            <p> <strong> {comment} </strong> </p>
            <div className='deled'>
            <button onClick={() => deleteComment(index)}>Delete</button>
            <button onClick={() => handleEditComment(index)}>Edit</button>
          </div>
          </div>
        ))}
      
      </div>

 </div>
);
};

export default PostDetail;