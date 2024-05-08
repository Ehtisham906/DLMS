import React, { useState } from 'react'
import heroimg from '../Assests/Images/heroImg.png'
import overviewImg from '../Assests/Images/overviewImg.png'
import goal1 from '../Assests/Images/goals/goal1.svg'
import goalicon from '../Assests/Images/goals/goalpicons.svg'
import savemoney from '../Assests/Images/goals/savemoney.svg'
import flexibleLearning from '../Assests/Images/goals/flexibleLearning.svg'
import certification from '../Assests/Images/goals/certification.svg'
import leftsvg from '../Assests/Images/learn svgs/leftsvg.svg'
import rightsvg from '../Assests/Images/learn svgs/rightsvg.svg'
import ai1 from '../Assests/Images/courses/ai-1.svg'
import ai2 from '../Assests/Images/courses/ai-2.svg'
import ai3 from '../Assests/Images/courses/ai-3.svg'
import ai4 from '../Assests/Images/courses/ai-4.png'
import teacher from '../Assests/Images/lecturers/1.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    return (
        <>
            {/* hero landing page */}
            <Navbar/>
            <div className='container hero-container'>
                <div className="row ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 left-side ">


                        <h1 >Courses Now <span>Available On</span> Our Platfrom</h1>

                        <p >
                            100% Learning and free courses <br /> for students now.
                        </p>

                        <div className="hero-buttons">
                            <button className='join-btn'>Join Now
                            </button>
                            <button className='play-btn'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M12 23.2L23.2 16L12 8.8V23.2ZM16 32C13.7867 32 11.7067 31.5797 9.76 30.7392C7.81333 29.8997 6.12 28.76 4.68 27.32C3.24 25.88 2.10027 24.1867 1.2608 22.24C0.420267 20.2933 0 18.2133 0 16C0 13.7867 0.420267 11.7067 1.2608 9.76C2.10027 7.81333 3.24 6.12 4.68 4.68C6.12 3.24 7.81333 2.09973 9.76 1.2592C11.7067 0.419733 13.7867 0 16 0C18.2133 0 20.2933 0.419733 22.24 1.2592C24.1867 2.09973 25.88 3.24 27.32 4.68C28.76 6.12 29.8997 7.81333 30.7392 9.76C31.5797 11.7067 32 13.7867 32 16C32 18.2133 31.5797 20.2933 30.7392 22.24C29.8997 24.1867 28.76 25.88 27.32 27.32C25.88 28.76 24.1867 29.8997 22.24 30.7392C20.2933 31.5797 18.2133 32 16 32ZM16 28.8C19.5733 28.8 22.6 27.56 25.08 25.08C27.56 22.6 28.8 19.5733 28.8 16C28.8 12.4267 27.56 9.4 25.08 6.92C22.6 4.44 19.5733 3.2 16 3.2C12.4267 3.2 9.4 4.44 6.92 6.92C4.44 9.4 3.2 12.4267 3.2 16C3.2 19.5733 4.44 22.6 6.92 25.08C9.4 27.56 12.4267 28.8 16 28.8Z" fill="#316CF9" />
                                </svg>

                                <h6 className='my-auto'>

                                    Play Video
                                </h6>
                            </button>
                        </div>

                        <div className='svg-decorate'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="79" viewBox="0 0 77 79" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M34.2414 1C34.3026 12.6672 22.8023 34.3302 66.9704 39.4312C39.5523 42.1661 34.8334 56.2531 34.2466 75.0387C33.5742 60.8581 32.1991 44.3602 1 39.6279C31.2412 37.1338 30.7311 16.9216 34.2414 1Z" fill="#316CF9" stroke="#010C16" strokeWidth="1.48363" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.0581 12.5984C11.8411 13.4259 12.7858 14.18 13.6389 14.974" stroke="#316CF9" strokeWidth="1.48363" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.1665 59.7957C3.87327 58.621 5.6407 57.4889 7.32143 56.2957" stroke="#316CF9" strokeWidth="1.48363" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M52.376 21.5779C59.9293 16.854 66.4994 11.6643 72.859 6.17822" stroke="#316CF9" strokeWidth="1.48363" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M54.2202 60.2048C63.1253 64.0338 69.3225 71.9179 75.4839 77.6773" stroke="#316CF9" strokeWidth="1.48363" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 right-side">
                        <img src={heroimg} alt="HeroImg" />
                    </div>
                </div>
            </div>


            {/* Features Container */}
            <div className="container-fluid  w-100 featuers-container">
                <div className="row text-center">
                    <div className='col-12 col-sm-12 col-md-3  my-5 featuers'>Dowanload Lectures</div>
                    <div className='col-12 col-sm-12 col-md-3  my-5 featuers'>Free Courses</div>
                    <div className='col-12 col-sm-12 col-md-3  my-5 featuers'>Online Quiz</div>
                    <div className='col-12 col-sm-12 col-md-3  my-5 '>Assigments</div>
                </div>
            </div>



            {/* Overview Container */}
            <div className="overview" >
                <div className="container">
                    <div className="row">
                        <div className="overview-img col-12 col-sm-12 col-md-6"><img src={overviewImg} alt="" /></div>
                        <div className="overview-texts col-12 col-sm-12 col-md-6">
                            <h1 className='overview-heading'><span className='overview-span'>Over</span>view</h1>
                            Digital learning management system" is Web based System having two modules, like a Website, where which visitor's visit and get data about the framework and get information about courses which are shows on Digital Learning Room (DLR). <br />
                            <p className={isVisible ? 'visible' : 'hidden'}>
                                The DLR will have three modules, like Admin, coach and learner where administrator will oversee mentor and student and produce course as a class where learners will get worked with by the administrations gave to them by the coach.  <br />
                                Student will get enlisted to learn various courses offered with the goal that they can succeed in their future life. Student will be furnished with learning material to learn, than they will be surveyed with tests and tasks. Afterward, testament will be allocated to learner for the sake of their evaluation.
                                The students can learn whenever they need through this DLR at liberated from cost. Website will allow user to look for
                            </p>
                            <button className="readmore-btn" onClick={toggleVisibility}>
                                {isVisible ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* GOALS container */}

            <div className="goals mt-5">
                <div className=" goals-texts">
                    <h4 className='goals-text-heading'>
                        Invest in your professional goals with DLMS
                    </h4>
                    <p className='goals-text-para'>Get unlimited access to over 90% of courses, Projects, Specializations, and Professional Certificates on DLMS, taught by top instructors from leading universities and companies.</p>
                </div>

                <div className="goals-div-outer" id="scrollContainer">


                    <div className='goals-div'>
                        <div className='goals-div-inner'>
                            <img src={goal1} alt="" />
                            <h5>Learn Anything</h5>
                            <h6 className='text-center d-flex align-items-start'>
                                <img src={goalicon} alt="" />
                                <span>

                                    Explore any interest or trending topic, take prerequisites, and advance your skills
                                </span>
                            </h6>
                        </div>

                    </div>
                    <div className='goals-div'>
                        <div className='goals-div-inner'>
                            <img src={savemoney} alt="" />
                            <h5>Save Money</h5>
                            <h6 className='text-center  align-items-start'>
                                <img src={goalicon} alt="" />
                                <span className='mx-1'>Spend less money on your learning if you plan to take multiple courses this year
                                </span>
                            </h6>
                        </div>

                    </div>
                    <div className='goals-div'>
                        <div className='goals-div-inner'>
                            <img src={flexibleLearning} alt="" />
                            <h5>Flexible Learning</h5>
                            <h6 className='text-center  align-items-start'>
                                <img src={goalicon} alt="" />
                                <span className='mx-1'>
                                    Learn at your own pace, move between multiple courses, or switch to a different course
                                </span>
                            </h6>
                        </div>

                    </div>


                    <div className='goals-div'>
                        <div className='goals-div-inner'>
                            <img src={certification} alt="" />
                            <h5>Unlimited Certificate</h5>
                            <h6 className='text-center  align-items-start'>
                                <img src={goalicon} alt="" />
                                <span className='mx-1'>Earn a certificate for every learning program that you complete at no additional cost
                                </span>
                            </h6>
                        </div>


                    </div>

                </div>
            </div>


            {/* What you can learn  */}

            <div className='container-fluid learndlms mt-5'>
                <div className="left-svg">
                    <img src={leftsvg} alt="" />
                </div>
                <div className="right-svg">
                    <img src={rightsvg} alt="" />
                </div>

                <div className="texts-learndlms text-center">
                    <h4>See What You Can Learn  with <span>DLMS</span> </h4>
                    <p>Explore our newest programs, focused on delivering in-demand skills.</p>

                </div>

                <div className='sml-nav'>
                    <div><h6>All</h6></div>
                    <div><h6>Graphic Design</h6></div>
                    <div><h6>Web Development</h6></div>

                </div>

                <div className='container courses'>
                    <div className="row  ">

                        <div className='col m-1  ai-courses'>
                            <img src={ai1} alt="" width={"100%"} />
                            <p>Deeplearning.AI</p>
                            <h6>Generative AI for Everyone</h6>
                            <p>Course</p>
                        </div>

                        <div className='col m-1 ai-courses'>
                            <img src={ai2} alt="" width={"100%"} />
                            <p>IBM</p>
                            <h6>Generative AI Fundamentals</h6>
                            <p>Specialization</p>

                        </div>

                        <div className='col m-1  ai-courses'>
                            <img src={ai3} alt="" width={"100%"} />
                            <p>Vanderbilt University</p>
                            <h6>ChatGPT Advanced Data Analysis</h6>
                            <p>Course</p>
                        </div>

                        <div className='col m-1  ai-courses'>
                            <img src={ai4} alt="" width={"100%"} />
                            <p>Google Cloud</p>
                            <h6>Introduction to Generative AI</h6>
                            <p>Course</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <button className='btn join-now-btn mx-auto'>Join Now</button>
                </div>
            </div>


            {/* Popular Courses */}
            <div className="container-fluid popular-courses mt-5">
                <div className="popular-courses-left-svg">
                    <img src={leftsvg} alt="" />
                </div>
                <div className="popular-courses-right-svg">
                    <img src={rightsvg} alt="" />
                </div>

                <div className='popular-courses-texts text-center'>
                    <h4>See What You Can Learn  with <span>DLMS</span> </h4>
                    <p>Explore our newest programs, focused on delivering in-demand skills.</p>
                </div>


                <div className="container ">

                    <div className='row justify-content-between'>
                        <div className="col-12 col-sm-12 col-md-3 mx-1 my-1 course1">
                            <div className="svg-box">
                                <h6 className='mt-4 ms-4'>
                                    Web Development
                                </h6>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 mx-1 my-1  course2">
                            <div className="svg-box">
                                <h6 className='mt-4 ms-4'>
                                    Structured Programming
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-3 mx-1 my-1 course3">
                            <div className="svg-box">
                                <h6 className='mt-4 ms-4'>
                                    Database Systems
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-3 mx-1 my-1 course4">
                            <div className="svg-box">
                                <h6 className='mt-4 ms-4'>
                                    Software Enginering Requirments
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-3 mx-1 my-1 course5">
                            <div className="svg-box">
                                <h6 className='mt-4 ms-4'>
                                    <img src={leftsvg} alt="" />
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-3 mx-1 my-1 course6">
                            <div className="svg-box">
                                <h6 className='mt-4 ms-4'>
                                    Software Testing
                                </h6>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container text-center mt-5">
                    <button className='join-btn'>Join Now
                    </button>
                </div>

            </div>
            {/* =============== */}

            {/* Testimonials */}
            <div className="container testimonials">
                <div className="row testimonials-main-container">
                    <div className="col-5 testimonials1">
                        <div className="deatils">
                            <div className='detail-img'>
                                <img src={teacher} alt="" />
                                <h6>
                                    Arif Ali
                                    <p>Lecturer</p>
                                </h6>

                            </div>


                            <div className="details-icons" >
                                <i className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="63" height="28" viewBox="0 0 63 28" fill="none">
                                        <circle cx="14" cy="14" r="14" fill="white" />
                                        <circle cx="49" cy="14" r="14" fill="white" />
                                        <path d="M63 14.0351C63 6.28772 56.728 0 49 0C41.272 0 35 6.28772 35 14.0351C35 20.8281 39.816 26.4842 46.2 27.7895V18.2456H43.4V14.0351H46.2V10.5263C46.2 7.81754 48.398 5.61403 51.1 5.61403H54.6V9.82456H51.8C51.03 9.82456 50.4 10.4561 50.4 11.2281V14.0351H54.6V18.2456H50.4V28C57.47 27.2982 63 21.3193 63 14.0351Z" fill="#316CF9" />
                                        <path d="M14 0C6.26792 0 0 6.26792 0 14C0 21.7321 6.26792 28 14 28C21.7321 28 28 21.7321 28 14C28 6.26792 21.7321 0 14 0ZM19.6948 11.4683C19.7006 11.5879 19.7021 11.7075 19.7021 11.8242C19.7021 15.47 16.9298 19.6715 11.8577 19.6715C10.359 19.674 8.89141 19.2435 7.63146 18.4319C7.84583 18.4581 8.06604 18.4683 8.28917 18.4683C9.58125 18.4683 10.7698 18.0294 11.7133 17.2885C11.1383 17.2772 10.5812 17.0868 10.1195 16.7439C9.65789 16.4009 9.31474 15.9225 9.13792 15.3752C9.55085 15.4537 9.97624 15.4373 10.3819 15.3271C9.75778 15.2009 9.19654 14.8627 8.79332 14.3699C8.39011 13.8771 8.16974 13.2601 8.16958 12.6233V12.5898C8.54146 12.7954 8.96729 12.9208 9.41937 12.9354C8.83429 12.5459 8.4201 11.9476 8.26152 11.2629C8.10294 10.5782 8.21195 9.8587 8.56625 9.25167C9.25889 10.1033 10.1227 10.8 11.1017 11.2967C12.0807 11.7934 13.153 12.0789 14.2494 12.1348C14.11 11.5432 14.17 10.922 14.42 10.368C14.67 9.814 15.0961 9.35811 15.632 9.07122C16.1678 8.78433 16.7835 8.68251 17.3832 8.7816C17.9829 8.8807 18.533 9.17514 18.9481 9.61917C19.5652 9.49707 20.1571 9.2707 20.6981 8.94979C20.4924 9.58874 20.0618 10.1313 19.4862 10.4767C20.0329 10.4108 20.5667 10.2639 21.07 10.0406C20.7003 10.5946 20.2346 11.0781 19.6948 11.4683Z" fill="#316CF9" />
                                    </svg>
                                </i>
                                <i className=''><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <circle cx="14" cy="14" r="14" fill="#316CF9" />
                                    <path d="M21.9561 13.3851C21.8961 13.117 21.7295 12.868 21.5379 12.7647C21.4795 12.7322 21.103 12.6914 20.7015 12.6739C20.0275 12.6439 19.9534 12.6306 19.7418 12.5065C19.4044 12.3092 19.3119 12.096 19.3103 11.518C19.3086 10.4128 18.8488 9.38683 17.9391 8.46158C17.2926 7.80116 16.5687 7.35478 15.7448 7.10493C15.5482 7.04497 15.105 7.02415 13.6247 7.00666C11.3029 6.97918 10.7881 7.02665 9.99588 7.34145C8.5397 7.92192 7.49005 9.14531 7.10934 10.7143C7.03687 11.0083 7.02354 11.4805 7.00604 14.193C6.98522 17.5908 7.00938 18.0905 7.22097 18.7634C7.39758 19.3197 7.57502 19.6604 7.93823 20.1434C8.63383 21.0661 9.67349 21.7316 10.7156 21.9198C11.2113 22.0089 17.3226 22.0322 17.9491 21.9464C19.037 21.7982 19.8909 21.3618 20.6923 20.544C21.2704 19.9527 21.6328 19.3122 21.8702 18.4628C21.9677 18.1097 21.976 17.9381 21.9944 15.8669C22.0085 14.3029 21.996 13.57 21.9561 13.3851ZM11.1705 11.254C11.4312 10.9908 11.5029 10.98 13.1398 10.98C14.6093 10.98 14.6577 10.9833 14.8734 11.0916C15.1858 11.249 15.3216 11.4713 15.3216 11.8245C15.3216 12.1443 15.1941 12.3683 14.9109 12.5482C14.7576 12.6439 14.6668 12.6506 13.2273 12.6589C12.3384 12.6648 11.6312 12.6481 11.5254 12.619C10.9681 12.4657 10.7606 11.6671 11.1705 11.254ZM17.59 17.9473L17.0927 18.0289L14.4985 18.058C12.2193 18.0855 11.5737 18.043 11.4562 17.9914C11.2163 17.8881 10.9947 17.5983 10.9547 17.3418C10.9197 17.0986 11.0414 16.7622 11.2296 16.5923C11.4671 16.3783 11.5704 16.3708 14.4877 16.3674C17.4884 16.3658 17.4725 16.3649 17.7575 16.6298C18.159 17.0045 18.0748 17.6716 17.59 17.9473Z" fill="white" />
                                </svg></i>
                            </div>

                        </div>
                        <div>
                            <p>“For the things we have to learn before we can do them, we learn by doing them.” “Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.” “The beautiful thing about learning is that nobody can take it away from you.”</p>
                        </div>
                    </div>
                    <div className="col-5 my-3 testimonials1">
                        <div className="deatils">
                            <div className='detail-img'>
                                <img src={teacher} alt="" />
                                <h6>
                                    Javed Khan
                                    <p>Lead Courses</p>
                                </h6>

                            </div>


                            <div className="details-icons" >
                                <i className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="63" height="28" viewBox="0 0 63 28" fill="none">
                                        <circle cx="14" cy="14" r="14" fill="white" />
                                        <circle cx="49" cy="14" r="14" fill="white" />
                                        <path d="M63 14.0351C63 6.28772 56.728 0 49 0C41.272 0 35 6.28772 35 14.0351C35 20.8281 39.816 26.4842 46.2 27.7895V18.2456H43.4V14.0351H46.2V10.5263C46.2 7.81754 48.398 5.61403 51.1 5.61403H54.6V9.82456H51.8C51.03 9.82456 50.4 10.4561 50.4 11.2281V14.0351H54.6V18.2456H50.4V28C57.47 27.2982 63 21.3193 63 14.0351Z" fill="#316CF9" />
                                        <path d="M14 0C6.26792 0 0 6.26792 0 14C0 21.7321 6.26792 28 14 28C21.7321 28 28 21.7321 28 14C28 6.26792 21.7321 0 14 0ZM19.6948 11.4683C19.7006 11.5879 19.7021 11.7075 19.7021 11.8242C19.7021 15.47 16.9298 19.6715 11.8577 19.6715C10.359 19.674 8.89141 19.2435 7.63146 18.4319C7.84583 18.4581 8.06604 18.4683 8.28917 18.4683C9.58125 18.4683 10.7698 18.0294 11.7133 17.2885C11.1383 17.2772 10.5812 17.0868 10.1195 16.7439C9.65789 16.4009 9.31474 15.9225 9.13792 15.3752C9.55085 15.4537 9.97624 15.4373 10.3819 15.3271C9.75778 15.2009 9.19654 14.8627 8.79332 14.3699C8.39011 13.8771 8.16974 13.2601 8.16958 12.6233V12.5898C8.54146 12.7954 8.96729 12.9208 9.41937 12.9354C8.83429 12.5459 8.4201 11.9476 8.26152 11.2629C8.10294 10.5782 8.21195 9.8587 8.56625 9.25167C9.25889 10.1033 10.1227 10.8 11.1017 11.2967C12.0807 11.7934 13.153 12.0789 14.2494 12.1348C14.11 11.5432 14.17 10.922 14.42 10.368C14.67 9.814 15.0961 9.35811 15.632 9.07122C16.1678 8.78433 16.7835 8.68251 17.3832 8.7816C17.9829 8.8807 18.533 9.17514 18.9481 9.61917C19.5652 9.49707 20.1571 9.2707 20.6981 8.94979C20.4924 9.58874 20.0618 10.1313 19.4862 10.4767C20.0329 10.4108 20.5667 10.2639 21.07 10.0406C20.7003 10.5946 20.2346 11.0781 19.6948 11.4683Z" fill="#316CF9" />
                                    </svg>
                                </i>
                                <i className=''><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <circle cx="14" cy="14" r="14" fill="#316CF9" />
                                    <path d="M21.9561 13.3851C21.8961 13.117 21.7295 12.868 21.5379 12.7647C21.4795 12.7322 21.103 12.6914 20.7015 12.6739C20.0275 12.6439 19.9534 12.6306 19.7418 12.5065C19.4044 12.3092 19.3119 12.096 19.3103 11.518C19.3086 10.4128 18.8488 9.38683 17.9391 8.46158C17.2926 7.80116 16.5687 7.35478 15.7448 7.10493C15.5482 7.04497 15.105 7.02415 13.6247 7.00666C11.3029 6.97918 10.7881 7.02665 9.99588 7.34145C8.5397 7.92192 7.49005 9.14531 7.10934 10.7143C7.03687 11.0083 7.02354 11.4805 7.00604 14.193C6.98522 17.5908 7.00938 18.0905 7.22097 18.7634C7.39758 19.3197 7.57502 19.6604 7.93823 20.1434C8.63383 21.0661 9.67349 21.7316 10.7156 21.9198C11.2113 22.0089 17.3226 22.0322 17.9491 21.9464C19.037 21.7982 19.8909 21.3618 20.6923 20.544C21.2704 19.9527 21.6328 19.3122 21.8702 18.4628C21.9677 18.1097 21.976 17.9381 21.9944 15.8669C22.0085 14.3029 21.996 13.57 21.9561 13.3851ZM11.1705 11.254C11.4312 10.9908 11.5029 10.98 13.1398 10.98C14.6093 10.98 14.6577 10.9833 14.8734 11.0916C15.1858 11.249 15.3216 11.4713 15.3216 11.8245C15.3216 12.1443 15.1941 12.3683 14.9109 12.5482C14.7576 12.6439 14.6668 12.6506 13.2273 12.6589C12.3384 12.6648 11.6312 12.6481 11.5254 12.619C10.9681 12.4657 10.7606 11.6671 11.1705 11.254ZM17.59 17.9473L17.0927 18.0289L14.4985 18.058C12.2193 18.0855 11.5737 18.043 11.4562 17.9914C11.2163 17.8881 10.9947 17.5983 10.9547 17.3418C10.9197 17.0986 11.0414 16.7622 11.2296 16.5923C11.4671 16.3783 11.5704 16.3708 14.4877 16.3674C17.4884 16.3658 17.4725 16.3649 17.7575 16.6298C18.159 17.0045 18.0748 17.6716 17.59 17.9473Z" fill="white" />
                                </svg></i>
                            </div>

                        </div>
                        <div>
                            <p>“For the things we have to learn before we can do them, we learn by doing them.” “Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.” “The beautiful thing about learning is that nobody can take it away from you.”</p>
                        </div>
                    </div>
                    <div className="col-5 my-3 testimonials1">
                        <div className="deatils">
                            <div className='detail-img'>
                                <img src={teacher} alt="" />
                                <h6>
                                    Ali Karim
                                    <p>Lecturer</p>
                                </h6>

                            </div>


                            <div className="details-icons" >
                                <i className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="63" height="28" viewBox="0 0 63 28" fill="none">
                                        <circle cx="14" cy="14" r="14" fill="white" />
                                        <circle cx="49" cy="14" r="14" fill="white" />
                                        <path d="M63 14.0351C63 6.28772 56.728 0 49 0C41.272 0 35 6.28772 35 14.0351C35 20.8281 39.816 26.4842 46.2 27.7895V18.2456H43.4V14.0351H46.2V10.5263C46.2 7.81754 48.398 5.61403 51.1 5.61403H54.6V9.82456H51.8C51.03 9.82456 50.4 10.4561 50.4 11.2281V14.0351H54.6V18.2456H50.4V28C57.47 27.2982 63 21.3193 63 14.0351Z" fill="#316CF9" />
                                        <path d="M14 0C6.26792 0 0 6.26792 0 14C0 21.7321 6.26792 28 14 28C21.7321 28 28 21.7321 28 14C28 6.26792 21.7321 0 14 0ZM19.6948 11.4683C19.7006 11.5879 19.7021 11.7075 19.7021 11.8242C19.7021 15.47 16.9298 19.6715 11.8577 19.6715C10.359 19.674 8.89141 19.2435 7.63146 18.4319C7.84583 18.4581 8.06604 18.4683 8.28917 18.4683C9.58125 18.4683 10.7698 18.0294 11.7133 17.2885C11.1383 17.2772 10.5812 17.0868 10.1195 16.7439C9.65789 16.4009 9.31474 15.9225 9.13792 15.3752C9.55085 15.4537 9.97624 15.4373 10.3819 15.3271C9.75778 15.2009 9.19654 14.8627 8.79332 14.3699C8.39011 13.8771 8.16974 13.2601 8.16958 12.6233V12.5898C8.54146 12.7954 8.96729 12.9208 9.41937 12.9354C8.83429 12.5459 8.4201 11.9476 8.26152 11.2629C8.10294 10.5782 8.21195 9.8587 8.56625 9.25167C9.25889 10.1033 10.1227 10.8 11.1017 11.2967C12.0807 11.7934 13.153 12.0789 14.2494 12.1348C14.11 11.5432 14.17 10.922 14.42 10.368C14.67 9.814 15.0961 9.35811 15.632 9.07122C16.1678 8.78433 16.7835 8.68251 17.3832 8.7816C17.9829 8.8807 18.533 9.17514 18.9481 9.61917C19.5652 9.49707 20.1571 9.2707 20.6981 8.94979C20.4924 9.58874 20.0618 10.1313 19.4862 10.4767C20.0329 10.4108 20.5667 10.2639 21.07 10.0406C20.7003 10.5946 20.2346 11.0781 19.6948 11.4683Z" fill="#316CF9" />
                                    </svg>
                                </i>
                                <i className=''><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <circle cx="14" cy="14" r="14" fill="#316CF9" />
                                    <path d="M21.9561 13.3851C21.8961 13.117 21.7295 12.868 21.5379 12.7647C21.4795 12.7322 21.103 12.6914 20.7015 12.6739C20.0275 12.6439 19.9534 12.6306 19.7418 12.5065C19.4044 12.3092 19.3119 12.096 19.3103 11.518C19.3086 10.4128 18.8488 9.38683 17.9391 8.46158C17.2926 7.80116 16.5687 7.35478 15.7448 7.10493C15.5482 7.04497 15.105 7.02415 13.6247 7.00666C11.3029 6.97918 10.7881 7.02665 9.99588 7.34145C8.5397 7.92192 7.49005 9.14531 7.10934 10.7143C7.03687 11.0083 7.02354 11.4805 7.00604 14.193C6.98522 17.5908 7.00938 18.0905 7.22097 18.7634C7.39758 19.3197 7.57502 19.6604 7.93823 20.1434C8.63383 21.0661 9.67349 21.7316 10.7156 21.9198C11.2113 22.0089 17.3226 22.0322 17.9491 21.9464C19.037 21.7982 19.8909 21.3618 20.6923 20.544C21.2704 19.9527 21.6328 19.3122 21.8702 18.4628C21.9677 18.1097 21.976 17.9381 21.9944 15.8669C22.0085 14.3029 21.996 13.57 21.9561 13.3851ZM11.1705 11.254C11.4312 10.9908 11.5029 10.98 13.1398 10.98C14.6093 10.98 14.6577 10.9833 14.8734 11.0916C15.1858 11.249 15.3216 11.4713 15.3216 11.8245C15.3216 12.1443 15.1941 12.3683 14.9109 12.5482C14.7576 12.6439 14.6668 12.6506 13.2273 12.6589C12.3384 12.6648 11.6312 12.6481 11.5254 12.619C10.9681 12.4657 10.7606 11.6671 11.1705 11.254ZM17.59 17.9473L17.0927 18.0289L14.4985 18.058C12.2193 18.0855 11.5737 18.043 11.4562 17.9914C11.2163 17.8881 10.9947 17.5983 10.9547 17.3418C10.9197 17.0986 11.0414 16.7622 11.2296 16.5923C11.4671 16.3783 11.5704 16.3708 14.4877 16.3674C17.4884 16.3658 17.4725 16.3649 17.7575 16.6298C18.159 17.0045 18.0748 17.6716 17.59 17.9473Z" fill="white" />
                                </svg></i>
                            </div>

                        </div>
                        <div>
                            <p>“For the things we have to learn before we can do them, we learn by doing them.” “Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.” “The beautiful thing about learning is that nobody can take it away from you.”</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* =============== */}

            <div className='container-fluid  outer-subscribe mt-5 p-5'>
                <div className='subscribe'>

                    <div className="subscribe-left-svg mx-2">
                        <img src={leftsvg} width={' 51.484px'} alt="" />
                    </div>

                    <h1 className='text-center'>
                        Subscribe To Our <br /> Newsletter
                    </h1>
                    <div className="subscribe-left-svg">
                        <img src={leftsvg} width={"36.484px"} alt="" />
                    </div>
                </div>
                <div className='subscribe-btn'>
                    <input className='' type="text" placeholder='Enter Your Email Address' />
                    <button className='btn btn-primary'> Join Now</button>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Hero
