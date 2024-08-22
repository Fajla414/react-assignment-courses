import React from 'react';
import './CourseDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock, faShoppingBag, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

const CourseDetail = (props) => {
    const { classDuration, courseDuration, courseName, image, price, description } = props.course;
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src={image} className="card-img-top img-fluid mh-299 mw-299" style={{ maxHeight: '150px' }} alt={courseName} />
                    <hr />
                    <div className="card-body">
                        <h5 className="card-title">{courseName}</h5>
                        <div className='d-flex justify-content-between'>
                            <p>Duration: {courseDuration}</p>
                            <span className="badge-design"><FontAwesomeIcon icon={faClock} className='icon' /> {classDuration}</span>
                        </div>
                        <p><small>{description}</small></p>
                        <p className="card-text">Price: {price}/=</p>
                        <button className='btn btn-info' onClick={()=> props.handleAddCourse(props.course)}><FontAwesomeIcon icon={faShoppingCart} /> Add Course</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;