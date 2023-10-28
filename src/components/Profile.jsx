import React, { useState } from 'react';
import "./Profile.css"

function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState('Username'); 
  const [userEmail, setUserEmail] = useState('example@gmail.com');
  const [userPhone, setUserPhone] = useState('+7 (777) 77 7777');
  const [tempName, setTempName] = useState(userName); 
  const [tempEmail, setTempEmail] = useState(userEmail); 
  const [tempPhone, setTempPhone] = useState(userPhone); 
  const [isEditing, setIsEditing] = useState(false);
  const [editingpostIndex, setEditingPostIndex] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    name: '',
    text: '',
    image: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e) => {
    if (isEditing) {
      setTempName(e.target.value);
    }
  };

  const handleEmailChange = (e) => {
    if (isEditing) {
      setTempEmail(e.target.value);
    }
  };

  const handlePhoneChange = (e) => {
    if (isEditing) {
      setTempPhone(e.target.value);
    }
  };

  const handleEditClick = () => {
    if (isEditing) {
     
      setUserName(tempName);
      setUserEmail(tempEmail);
      setUserPhone(tempPhone);
    } else {
      
      setTempName(userName);
      setTempEmail(userEmail);
      setTempPhone(userPhone);
    }
    setIsEditing(!isEditing);
  };

  const handleAddpost = () => {
    if (
      newPost.name &&
      newPost.text
    ) {
      setUserPosts([...userPosts, newPost]);
      setNewPost({
        name: '',
        text: '',
        image: '',
      });
    }else {
      alert("Please fill in all fields before adding a new post.");
    }
  };

  const handleDeletepost = (index) => {
    const updatedposts = [...userPosts];
    updatedposts.splice(index, 1);
    setUserPosts(updatedposts);
  };

  const handleEditpost = (index) => {
    setEditingPostIndex(index);
    const postToEdit = userPosts[index];
    setNewPost({
      name: postToEdit.name,
      address: postToEdit.address,
      text: postToEdit.text,
      image: postToEdit.image,
    });
  };

  const handleUpdatePost = (index) => {
    if (
      newPost.name &&
      newPost.text 
    ) {
      const updatedposts = [...userPosts];
      updatedposts[index] = {
        name: newPost.name,
        address: newPost.text,
        image: newPost.image,
      };
      setUserPosts(updatedposts);
      setEditingPostIndex(null);
      setNewPost({
        name: '',
        address: '',
        text: '',
        image: '',
      });
    }
  };

  return (
    <div>
      <div className="user-profile">
        <div className="profile-image-container">
          <img
            src={profileImage || '/images/defaultProfile.jpg'} 
            alt="Profile"
            className="profile-image"
          />
        </div>

      <div className="profileEdit">
        

        <div className="user-details">
          <div className="user-name">
            <label htmlFor="userName">Username:< br /></label>
            {isEditing ? (
              <input
                type="text"
                id="userName"
                value={tempName}
                onChange={handleNameChange}
              />
            ) : (
              <span>{userName}</span>
            )}
          </div>
          <div className="user-email">
            <label htmlFor="userEmail">Email: <br /></label>
            {isEditing ? (
              <input
                type="email"
                id="userEmail"
                value={tempEmail}
                onChange={handleEmailChange}
              />
            ) : (
              <span>{userEmail}</span>
            )}
          </div>
          <div className="user-phone">
            <label htmlFor="userPhone">Phone: <br /></label>
            {isEditing ? (
              <input
                type="tel"
                id="userPhone"
                value={tempPhone}
                onChange={handlePhoneChange}
              />
            ) : (
              <span>{userPhone}</span>
            )}
          </div>

          
        </div>
        {isEditing ? (
          <input type="file" accept="image/*" onChange={handleImageChange} />
        ) : null}
      </div>
    </div>

    <button onClick={handleEditClick} className="editButton">
        {isEditing ? 'Сохранить' : 'Редактировать'}
    </button>

    <div className="newPost">
      <h3>Add new post</h3>
      <label>Title</label>
      <input
          type="text"
          placeholder="Post Name"
          value={newPost.name}
          onChange={(e) =>
            setNewPost({ ...newPost, name: e.target.value })
          }
        />
       
        <label>Post Text</label>
        <br />
        <input
          type="text"
          placeholder="Post Text"
          value={newPost.text}
          onChange={(e) =>
            setNewPost({ ...newPost, text: e.target.value })
          }
        />
       
        <label>Add image for your post</label>
        <br />
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setNewPost({ ...newPost, image: e.target.files[0] })
          }
          className="imageForpost"
        />
        <br />
        <button onClick={handleAddpost} className="addButton">Add</button>
      </div>

      <div className="user-posts">
        <h3>Your posts:</h3>
        {userPosts.length > 0 ? (
          userPosts.map((post, index) => (
            <div key={index} className="postCard">
              <img src={URL.createObjectURL(post.image)} alt={post.name} className="imageAcpartment"/>
              <h3>{post.name}</h3>
              <button onClick={() => handleEditpost(index)} className="editpostButton">Edit</button>
              <button onClick={() => handleDeletepost(index)}className="deletepostButton">Delete</button>
              {editingpostIndex === index && (
                <div className="newPostDetails">
                <input
                  type="text"
                  className = 'post-name'
                  placeholder="Post Name"
                  value={newPost.name}
                  onChange={(e) =>
                    setNewPost({ ...newPost, name: e.target.value })
                  }
                />
                
                  <input
                  className='post-text'
                    type="text"
                    placeholder="Type the text"
                    value={newPost.rooms}
                    onChange={(e) =>
                      setNewPost({ ...newPost, text: e.target.value })
                    }
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setNewPost({ ...newPost, image: e.target.files[0] })
                    }
                    className="imageForpost"
                  />
                  <br />
                  <button onClick={() => handleUpdatePost(index)}className="updatepostButton">Update</button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Nothing Found</p>
        )}
      </div>

    </div>
  );
}

export default Profile;
