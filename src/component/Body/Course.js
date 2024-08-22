import React, { useState } from 'react';
import CourseData from '../data/data';
import CourseDetail from './CourseDetail';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './course.css';

const Course = () => {
    const [course, setCourse] = useState(CourseData);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
        showCourse()
    }

    let price = 0;
    for (let a = 0; a < cart.length; a++) {
        const element = cart[a];
        price = price + Number(element.price)
    }

    const showCourse = () => {
        if (cart.length >= 0) {
            const showCourses = document.getElementById('show-courses');
            showCourses.style.display = 'block';
        }
    }


    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {course.map(course => <CourseDetail course={course} handleAddCourse={handleAddCourse} key={course.id} />)}
            </div>
            <hr />

            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                <div className="card">
                    <h5 className="card-header">Your Courses</h5>
                    <div className="card-body">
                        <h4 className="card-title">Total Course: {cart.length}</h4>
                        <h5 className="card-title">Total Price: {price}/=</h5>
                        <button type="button" id='show-courses' className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">See your courses</button>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Your Courses</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <ul>
                                            {cart.map(course => <li>{course.courseName}</li>)}
                                        </ul>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="card-text"><small>If you want to buy the courses then click on the button below.</small></p>
                        <a href="/buy" className="btn btn-success"><FontAwesomeIcon icon={faArrowRight} /> Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;