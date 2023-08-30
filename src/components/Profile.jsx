import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileDetails from './pages/ProfileDetails';
import Posts from './pages/Posts';
import Gallery from './pages/Gallery';
import ToDo from './pages/ToDo';
import "./landing.css"
import { Container, Row, Col, Nav } from "react-bootstrap";
import UserOverlay from './UserOverlay';
import ChatComponent from './ChatComponent';


const Profile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState("Profile");
    const { userData, data } = location.state;

    const [showOverlay, setShowOverlay] = useState(false);

    const handleLogoClick = () => {
        setShowOverlay(!showOverlay);
    };

    const handleLogout = () => {
        navigate("/")
    };

    const handleNavClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="sideBarContainer">
                <div className="sideBar">
                    <Container className="h-100">
                        <Row>
                            <Col sm={2} className="colSidebar">
                                <Nav defaultActiveKey="profile" className="flex-column">
                                    <Nav.Link
                                        eventKey="Profile"
                                        onClick={() => handleNavClick("Profile")}
                                    >
                                        Profile
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey="Posts"
                                        onClick={() => handleNavClick("Posts")}
                                    >
                                        Posts
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey="Gallery"
                                        onClick={() => handleNavClick("Gallery")}
                                    >
                                        Gallery
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey="Todo"
                                        onClick={() => handleNavClick("Todo")}
                                    >
                                        ToDo
                                    </Nav.Link>
                                </Nav>
                            </Col>
                            <Col sm={10} className="colRightBar">
                                <div className='navBar'>
                                    <h3>{currentPage}</h3>
                                    <div className="userLogo" onClick={handleLogoClick}>
                                        <img src={data.profilepicture} alt="profile-image" />
                                        <span>{data.name}</span>
                                    </div>
                                    {showOverlay && (
                                        <UserOverlay data={data} userData={userData} handleLogout={handleLogout} />
                                    )}
                                </div>
                                {currentPage === "Profile" && <ProfileDetails user={data} usersData={userData} />}
                                {currentPage === "Posts" && <Posts />}
                                {currentPage === "Gallery" && <Gallery />}
                                {currentPage === "Todo" && <ToDo />}
                                <div>
                                    <ChatComponent users={userData} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Profile