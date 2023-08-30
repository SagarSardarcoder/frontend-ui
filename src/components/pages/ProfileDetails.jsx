import React from 'react'
import { Row, Col } from "react-bootstrap";
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import ChatComponent from '../ChatComponent';

const containerStyle = {
    width: '400px',
    height: '300px',
};

const ProfileDetails = ({ user ,usersData}) => {
    const center = {
        lat: parseFloat(user.address.geo.lat) ,
        lng: parseFloat(user.address.geo.lng) ,
    };
    return (
        <div className='details-div'>
            <Row className='h-100'>
                <Col sm={5} className='leftDiv'>
                    <div>
                        <div className='personalDetails'>
                            <img src={user.profilepicture} alt='Image' />
                            <p style={{ fontWeight: "500" }}>{user.name}</p>
                            <p>
                                <span style={{ color: "gray" }}> UserName</span> : <span style={{ fontWeight: "500" }}>{user.username}</span>
                            </p>
                            <p>
                                <span style={{ color: "gray" }}> e-mail</span> : <span style={{ fontWeight: "500" }}>{user.email}</span>
                            </p>
                            <p>
                                <span style={{ color: "gray" }}> Phone</span> : <span style={{ fontWeight: "500" }}>{user.phone}</span>
                            </p>
                            <p>
                                <span style={{ color: "gray" }}> Website</span> : <span style={{ fontWeight: "500" }}>{user.website}</span>
                            </p>
                        </div>
                        <div className='companyDetails'>
                            <p style={{ color: "gray" }}>Company </p>
                            <p>
                                <span style={{ color: "gray" }}> Name</span> : <span style={{ fontWeight: "500" }}>{user.company.name}</span>
                            </p>
                            <p>
                                <span style={{ color: "gray" }}> CatchPhrase</span> : <span style={{ fontWeight: "500" }}>{user.company.catchPhrase}</span>
                            </p>
                            <p>
                                <span style={{ color: "gray" }}> bs</span> : <span style={{ fontWeight: "500" }}>{user.company.bs}</span>
                            </p>
                        </div>
                    </div>
                </Col>
                <Col sm={7}>
                    <div>
                        <div>
                            <p style={{ color: "gray" }}>Address: </p>
                            <p>
                                <span style={{ color: "gray" }}> Street</span> : <span style={{ fontWeight: "500" }}>{user.address.street}</span>
                            </p>
                            <p>
                                <span style={{ color: "gray" }}> Suite</span> : <span style={{ fontWeight: "500" }}>{user.address.suite}</span>
                            </p>
                            <p>
                                <span style={{ color: "gray" }}> City</span> : <span style={{ fontWeight: "500" }}>{user.address.city}</span>
                            </p>
                            <p>
                                <span style={{ color: "gray" }}> Zipcode</span> : <span style={{ fontWeight: "500" }}>{user.address.zipcode}</span>
                            </p>
                        </div>
                    </div>
                    <div >    
                        <p>GOOGLE API KEY NEEDED TO VIEW MAP</p>                        {/* GOOGLE API KEY NEEDED FOR THE LOCATION */}
                        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                                <Marker position={center} />
                            </GoogleMap>
                        </LoadScript>
                        <div style={{display:"flex",gap:"15px"}}><p>lat: {center.lat}</p> <p>long: {center.lng}</p> </div>
                    </div>

                    <div>
                        <ChatComponent users={usersData}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProfileDetails