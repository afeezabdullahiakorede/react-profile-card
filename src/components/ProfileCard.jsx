import { useState } from 'react';
export default function ProfileCard({ picture, name, age }) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="profile-card"> 
      {/* The img tag uses the 'picture' prop for its source */}
      <img 
       src={picture} 
       alt={name} 
     className="profile-image"
      />
      
      {/* The h2 and p tags use the 'name' and 'age' props */}
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <button onClick={() => setIsFollowing(!isFollowing)}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}