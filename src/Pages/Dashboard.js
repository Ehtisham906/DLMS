import React from 'react'
import logo from '../Assests/Images/logo.svg'
import dashboard from '../Assests/Images/nav icons/Dashboard/Icon.svg'
import './Pagescss/Dashboard.css'
import personImg from '../Assests/Images/nav icons/Dashboard/personimg.png'
import quizuiux from '../Assests/Images/nav icons/Dashboard/Frameuiux.png'
import quizweb from '../Assests/Images/nav icons/Dashboard/Frameweb.png'

export default function Dashboard() {
    return (
        <div className='container-fluid parentDiv'>
            <div className="left">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h1 className="navbar-brand">DLMS</h1>
                </div>

                <div className="left-navbar">
                    <button className='left-navbar-button w-100'> <img src={dashboard} alt="" /> Dashboard</button>
                </div>
                <div className="left-navbar">
                    <button className='left-navbar-button w-100'> <img src={dashboard} alt="" /> Courses</button>
                </div>
                <div className="left-navbar">
                    <button className='left-navbar-button w-100'> <img src={dashboard} alt="" /> Courses Path</button>
                </div>
                <div className="left-navbar">
                    <button className='left-navbar-button w-100'> <img src={dashboard} alt="" /> Courses Schedule</button>
                </div>
                <div className="left-navbar">
                    <button className='left-navbar-button w-100'> <img src={dashboard} alt="" /> Quiz</button>
                </div>
                <div className="left-navbar">
                    <button className='left-navbar-button w-100'> <img src={dashboard} alt="" /> Grades</button>
                </div>
                <div className="left-navbar">
                    <button className='left-navbar-button w-100'> <img src={dashboard} alt="" /> Setting</button>
                </div>

                <div className='logout'><h1>Logout</h1></div>
            </div>

            <div className="right">
                <div className="right-top-nav">
                    <div className='top-nav-button'>
                        <button  className='search-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clip-path="url(#clip0_1_116)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8.0357C1.5 4.42613 4.42613 1.5 8.0357 1.5C11.6453 1.5 14.5714 4.42613 14.5714 8.0357C14.5714 9.57027 14.0425 10.9813 13.1571 12.0965L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5125 16.5732 15.2196 16.2803L12.0964 13.1571C10.9813 14.0425 9.57024 14.5714 8.0357 14.5714C4.42613 14.5714 1.5 11.6453 1.5 8.0357ZM8.0357 3C5.25456 3 3 5.25456 3 8.0357C3 10.8168 5.25456 13.0714 8.0357 13.0714C10.8168 13.0714 13.0714 10.8168 13.0714 8.0357C13.0714 5.25456 10.8168 3 8.0357 3Z" fill="#808281" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_116">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h6>Search</h6>
                            
                            </button>
                    </div>

                    <div className='right-top-nav-details'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 17.5556L2.33086 17.2168C2.21316 17.4493 2.22458 17.7262 2.36103 17.9483C2.49748 18.1703 2.7394 18.3056 3 18.3056L3 17.5556ZM21 17.5556V18.3056C21.2606 18.3056 21.5025 18.1703 21.639 17.9483C21.7754 17.7262 21.7868 17.4493 21.6691 17.2168L21 17.5556ZM6 8.66667C6 5.40774 8.67748 2.75 12 2.75V1.25C7.86668 1.25 4.5 4.5618 4.5 8.66667H6ZM12 2.75C15.3225 2.75 18 5.40774 18 8.66667H19.5C19.5 4.5618 16.1333 1.25 12 1.25V2.75ZM4.5 8.66667C4.5 10.774 3.96416 12.909 3.41438 14.5379C3.14103 15.3479 2.86776 16.0225 2.66355 16.4931C2.56152 16.7282 2.47696 16.9119 2.41857 17.0355C2.38937 17.0973 2.36674 17.144 2.35175 17.1746C2.34426 17.1899 2.33868 17.2011 2.33516 17.2082C2.33339 17.2118 2.33214 17.2143 2.33142 17.2157C2.33106 17.2164 2.33083 17.2169 2.33074 17.2171C2.33069 17.2171 2.33068 17.2172 2.3307 17.2171C2.33071 17.2171 2.33075 17.217 2.33075 17.217C2.3308 17.2169 2.33086 17.2168 3 17.5556C3.66914 17.8943 3.66921 17.8942 3.6693 17.894C3.66934 17.8939 3.66943 17.8937 3.66951 17.8936C3.66967 17.8933 3.66986 17.8929 3.67008 17.8924C3.67054 17.8915 3.67112 17.8904 3.67184 17.8889C3.67328 17.8861 3.67526 17.8821 3.67775 17.8771C3.68274 17.8671 3.6898 17.8529 3.69878 17.8345C3.71676 17.7978 3.74246 17.7447 3.77479 17.6763C3.83944 17.5395 3.93067 17.3412 4.03958 17.0902C4.25724 16.5886 4.54647 15.8744 4.83562 15.0176C5.41084 13.3133 6 11.0037 6 8.66667H4.5ZM3 18.3056H21V16.8056H3V18.3056ZM21 17.5556C21.6691 17.2168 21.6692 17.2169 21.6692 17.217C21.6693 17.217 21.6693 17.2171 21.6693 17.2171C21.6693 17.2172 21.6693 17.2171 21.6693 17.2171C21.6692 17.2169 21.6689 17.2164 21.6686 17.2157C21.6679 17.2143 21.6666 17.2118 21.6648 17.2082C21.6613 17.2011 21.6557 17.1899 21.6482 17.1746C21.6333 17.144 21.6106 17.0973 21.5814 17.0355C21.523 16.9119 21.4385 16.7282 21.3365 16.4931C21.1322 16.0225 20.859 15.3479 20.5856 14.5379C20.0358 12.909 19.5 10.774 19.5 8.66667H18C18 11.0037 18.5892 13.3133 19.1644 15.0176C19.4535 15.8744 19.7428 16.5886 19.9604 17.0902C20.0693 17.3412 20.1606 17.5395 20.2252 17.6763C20.2575 17.7447 20.2832 17.7978 20.3012 17.8345C20.3102 17.8529 20.3173 17.8671 20.3222 17.8771C20.3247 17.8821 20.3267 17.8861 20.3282 17.8889C20.3289 17.8904 20.3295 17.8915 20.3299 17.8924C20.3301 17.8929 20.3303 17.8933 20.3305 17.8936C20.3306 17.8937 20.3307 17.8939 20.3307 17.894C20.3308 17.8942 20.3309 17.8943 21 17.5556ZM14.625 18.6667C14.625 20.0846 13.4586 21.25 12 21.25V22.75C14.2694 22.75 16.125 20.9306 16.125 18.6667H14.625ZM12 21.25C10.5414 21.25 9.375 20.0846 9.375 18.6667H7.875C7.875 20.9306 9.73064 22.75 12 22.75V21.25ZM9.375 18.6667V17.5556H7.875V18.6667H9.375ZM16.125 18.6667V17.5556H14.625V18.6667H16.125Z" fill="#777E90" />
                            <rect x="15" y="3" width="6" height="6" rx="3" fill="#FF5263" />
                        </svg>
                        <img className='personImg' src={personImg} width={'40px'} alt="" />
                        <h6>Waqar Younus</h6>

                    </div>
                </div>

                <div className='welcome-quiz mt-4'>
                    <div className="welcome">
                        <h3>WELCOME WAQAR YOUNUS</h3>
                        <p>well come to our new exam to attend  and chek your results how log are you perctice for your  papers, we provide the best survice  for every one this platfoam boost your </p>

                        <button>
                            Explore More &gt;
                        </button>
                    </div>

                    <div className="quiz">
                        <h3>Quizes</h3>
                        <div className='d-flex quizeuiux'>
                            <img src={quizuiux} width={'40px'} alt="" />
                            <h6>UI UX DESIGN</h6>
                            
                            <h6>CC:206</h6>

                        </div>
                        <div className='d-flex quizweb'>
                            <img src={quizweb} width={'40px'}  alt="" />
                            <h6>UI UX DESIGN</h6>
                            
                            <h6>CC:206</h6>

                        </div>
                        <div className='d-flex quizwordpress'>
                            <img src={quizweb} width={'40px'} alt="" />
                            <h6>UI UX DESIGN</h6>
                            
                            <h6>CC:206</h6>

                        </div>

                        <div className="view text-center">
                            View All
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
