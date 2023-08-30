import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./landing.css"

const Landing = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://panorbit.in/api/users.json');
      const data = await response.json();
      setUserData(data.users);
    };

    fetchData();
  }, []);

  const handleClick = (user)=>{
    navigate("/user-details",{ state: { userData,data:user } })
  }
    return (
        <>
            <div className='UpperDiv'>
                <h3>Select an account</h3>
            </div>
            <div className='LowerDiv'>
                <div className="user-container">
                    {userData.map((user, index) => (
                        <div className="user" key={index} onClick={()=>handleClick(user)}>
                            <img src={user.profilepicture} alt={`User ${index + 1}`} />
                            <span>{user.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Landing