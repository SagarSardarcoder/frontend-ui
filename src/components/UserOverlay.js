import React from 'react';
import "./landing.css"
import { useNavigate } from 'react-router-dom';


const UserOverlay = ({ data,userData, handleLogout }) => {
    const navigate = useNavigate()

    const handleClick = (user)=>{
        navigate("/user-details",{ state: { userData,data:user } })
      }
  return (
    <div className="userOverlay">
      <img src={data.profilepicture} alt="profile-image" />
      <div className="userInfo">
        <span style={{ fontWeight: "500" ,fontSize:"20px" }}>{data.name}</span>
        <p  style={{ color: "gray" }}>{data.email}</p>
        <div className="userOverlay-container">
                    {userData.map((user, index) => (
                        <div className="overlayUser" key={index} onClick={()=>handleClick(user)}>
                            <img id='userImg' src={user.profilepicture} alt={`User ${index + 1}`} />
                            <span>{user.name}</span>
                        </div>
                    ))}
                </div>
        <button  onClick={handleLogout}>Sign Out</button>
      </div>
    </div>
  );
};

export default UserOverlay;
