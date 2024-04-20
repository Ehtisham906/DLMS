import React from 'react'
import '../styles/footer.css'
import logo from '../Assests/Images/logo.svg'
export default function Footer() {
    return (
        <div className='footer-outermost'>
            <div className="fotter">
                <div className='footer-column-1'>
                    <div className='logo-div'>
                        <img src={logo} alt="" />
                        <h1 className="navbar-brand" href="#">DLMS</h1>
                    </div>
                    <div>
                        <p>Contact With Us</p>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="161" height="35" viewBox="0 0 161 35" fill="none">
                                <circle cx="59.1353" cy="17.0455" r="17.0455" fill="white" />
                                <path d="M67.9986 11.6962C67.3858 11.9886 66.7288 12.1776 66.0543 12.2555C66.74 11.7946 67.2548 11.1207 67.5192 10.3379C67.0131 10.6575 65.8945 11.1103 65.3352 11.1103C64.6548 10.4349 63.7371 10.0525 62.7784 10.0449C62.3166 10.0445 61.8592 10.1351 61.4325 10.3116C61.0058 10.4881 60.618 10.7471 60.2915 11.0736C59.9649 11.4002 59.706 11.7879 59.5295 12.2146C59.353 12.6414 59.2623 13.0987 59.2628 13.5605C59.2616 13.8201 59.2884 14.0791 59.3427 14.3329C56.706 14.253 53.6165 12.948 51.8853 10.6841C51.4507 11.4498 51.319 12.3505 51.5162 13.2085C51.7134 14.0666 52.2253 14.8194 52.9506 15.3184C52.5511 15.3716 51.7788 15.2917 51.4325 14.9455C51.4059 16.1706 51.9918 17.7953 54.1491 18.3812C53.723 18.5943 53.0039 18.541 52.6843 18.4878C52.7908 19.5265 54.2557 20.8848 55.8271 20.8848C55.2678 21.524 53.3501 22.7225 50.9531 22.3496C52.6145 23.3602 54.5217 23.8945 56.4663 23.8944C57.7992 23.9032 59.1199 23.6401 60.3477 23.121C61.5754 22.602 62.6844 21.838 63.6068 20.8757C64.5292 19.9134 65.2456 18.7731 65.7122 17.5245C66.1789 16.2759 66.3859 14.9452 66.3207 13.6138V13.4806C66.9951 13.0056 67.5659 12.3985 67.9986 11.6962Z" fill="#202020" />
                                <circle cx="101.227" cy="17.0455" r="17.0455" fill="white" />
                                <path d="M95.6491 9.54559H106.805C107.06 9.53878 107.313 9.58384 107.549 9.67801C107.785 9.77219 108 9.9135 108.179 10.0933C108.359 10.2732 108.501 10.4878 108.595 10.724C108.689 10.9603 108.734 11.2132 108.727 11.4675V22.6237C108.734 22.878 108.689 23.1309 108.595 23.3672C108.501 23.6034 108.359 23.818 108.179 23.9978C108 24.1777 107.785 24.319 107.549 24.4132C107.313 24.5073 107.06 24.5524 106.805 24.5456H95.6491C95.3949 24.5524 95.1419 24.5073 94.9057 24.4132C94.6694 24.319 94.4548 24.1777 94.275 23.9978C94.0951 23.818 93.9538 23.6034 93.8597 23.3672C93.7655 23.1309 93.7204 22.878 93.7272 22.6237V11.4675C93.7204 11.2132 93.7655 10.9603 93.8597 10.724C93.9538 10.4878 94.0951 10.2732 94.275 10.0933C94.4548 9.9135 94.6694 9.77219 94.9057 9.67801C95.1419 9.58384 95.3949 9.53878 95.6491 9.54559ZM104.649 11.2097C104.469 11.2097 104.296 11.2813 104.168 11.4087C104.041 11.5362 103.969 11.7091 103.969 11.8893V13.5065C103.969 13.6868 104.041 13.8597 104.168 13.9871C104.296 14.1146 104.469 14.1862 104.649 14.1862H106.337C106.517 14.1862 106.69 14.1146 106.817 13.9871C106.945 13.8597 107.016 13.6868 107.016 13.5065V11.8893C107.016 11.7091 106.945 11.5362 106.817 11.4087C106.69 11.2813 106.517 11.2097 106.337 11.2097H104.649ZM107.04 15.8972H105.727C105.85 16.3159 105.913 16.7498 105.915 17.1862C105.915 19.6706 103.829 21.7097 101.251 21.7097C98.6725 21.7097 96.5866 19.694 96.5866 17.1862C96.5881 16.7498 96.6512 16.3159 96.7741 15.8972H95.3913V22.2253C95.3905 22.3024 95.4052 22.379 95.4344 22.4504C95.4635 22.5218 95.5067 22.5867 95.5612 22.6413C95.6158 22.6958 95.6807 22.739 95.7521 22.7681C95.8235 22.7973 95.9001 22.812 95.9772 22.8112H106.43C106.508 22.812 106.584 22.7973 106.655 22.7681C106.727 22.739 106.792 22.6958 106.846 22.6413C106.901 22.5867 106.944 22.5218 106.973 22.4504C107.002 22.379 107.017 22.3024 107.016 22.2253L107.04 15.8972ZM101.251 14.0925C100.462 14.0814 99.7003 14.3835 99.1336 14.9326C98.5669 15.4818 98.241 16.2332 98.2272 17.0222C98.2345 17.4116 98.3186 17.7958 98.4746 18.1528C98.6305 18.5097 98.8554 18.8324 99.1362 19.1023C99.417 19.3723 99.7483 19.5842 100.111 19.7259C100.474 19.8677 100.861 19.9365 101.251 19.9284C102.04 19.9395 102.801 19.6374 103.368 19.0882C103.934 18.5391 104.26 17.7877 104.274 16.9987C104.267 16.6093 104.183 16.2251 104.027 15.8681C103.871 15.5112 103.646 15.1885 103.365 14.9185C103.084 14.6486 102.753 14.4367 102.39 14.2949C102.027 14.1532 101.64 14.0844 101.251 14.0925Z" fill="#202020" />
                                <circle cx="17.0455" cy="17.0455" r="17.0455" fill="white" />
                                <path d="M19.5923 11.5609H21.8636V8.18164H19.1768C15.9361 8.32013 15.2713 10.1483 15.2159 12.0595V13.7491H13V17.0453H15.2159V25.9089H18.5398V17.0453H21.282L21.8082 13.7491H18.5398V12.7243C18.5309 12.5784 18.5512 12.4322 18.5996 12.2943C18.6479 12.1564 18.7233 12.0296 18.8214 11.9212C18.9194 11.8129 19.0381 11.7252 19.1705 11.6633C19.3029 11.6014 19.4463 11.5666 19.5923 11.5609Z" fill="black" />
                                <circle cx="143.319" cy="17.0455" r="17.0455" fill="white" />
                                <path d="M135.443 13.6319H138.905V24.0989H135.443V13.6319ZM147.841 13.2857C146.323 13.2857 145.417 13.845 144.458 15.0701V13.6319H140.996V24.0989H144.485V18.426C144.485 17.2275 145.098 16.0556 146.483 16.0556C147.868 16.0556 148.693 17.2275 148.693 18.3993V24.0989H152.182V18.1596C152.182 14.0314 149.386 13.2857 147.841 13.2857ZM137.188 8.54492C136.042 8.54492 135.137 9.37056 135.137 10.3826C135.137 11.3947 136.042 12.2203 137.188 12.2203C138.333 12.2203 139.238 11.3947 139.238 10.3826C139.238 9.37056 138.333 8.54492 137.188 8.54492Z" fill="#202020" />
                            </svg>
                        </i>
                    </div>
                </div>
                <div className='footer-column-2'>
                    <h6>Useful Links</h6>
                    <p>Mision</p>
                    <p>Vision</p>
                    <p>Skills</p>
                    <p>Testimonials</p>
                </div>
                <div className='footer-column-3'>
                    <h6>Help Center</h6>
                    <p>Customer Support</p>
                    <p>Privacy Policy</p>


                </div>
                <div className='footer-column-4'>
                    <h6>Newsletter</h6>
                    <p>Subscribe To Our Newsletter To Recieve Latest Updates</p>
                    <div className='newsletter-btn'>
                        <input className='input-newsletter' type="text" placeholder='Subscribe now' name="" id="" />
                        <button className='btn-newsletter'>Submit</button>
                    </div>

                </div>
            </div>
            <div className='text-center'>Copyright Ⓒ DLMS 2024- All Rights Reserved. </div>
            <div className='fotter-svg'>
                <i><svg xmlns="http://www.w3.org/2000/svg" width="154" height="152" viewBox="0 0 154 152" fill="none">
                    <g opacity="0.1">
                        <path d="M2.37189 131.243L-34.314 194.785L4.77328 217.352L41.4592 153.81L78.1452 217.352L117.233 194.785L80.5466 131.243H153.919V86.1091H80.5466L117.233 22.5671L78.1452 0L41.4592 63.542L4.77325 0L-34.3141 22.5671L2.37194 86.1091H-71V131.243H2.37189Z" fill="#FDD619" />
                    </g>
                </svg></i>
            </div>

        </div>
    )
}
