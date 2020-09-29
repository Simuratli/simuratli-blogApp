import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <footer >
            <div className="footer-top">
                
                <div className="social">
                <span className="footerHead">Follow me</span>
                    <div className="social-links">
                        <a className='social-item' href="/">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 10H22C20.6739 10 19.4021 10.5268 18.4645 11.4645C17.5268 12.4021 17 13.6739 17 15V18H14V22H17V30H21V22H24L25 18H21V15C21 14.7348 21.1054 14.4804 21.2929 14.2929C21.4804 14.1054 21.7348 14 22 14H25V10Z" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </a>
                        <a className='social-item' href="/">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31 11.0101C30.0424 11.6855 28.9821 12.2022 27.86 12.5401C27.2577 11.8476 26.4573 11.3567 25.567 11.134C24.6767 10.9112 23.7395 10.9673 22.8821 11.2945C22.0247 11.6218 21.2884 12.2045 20.773 12.9638C20.2575 13.7231 19.9877 14.6224 20 15.5401V16.5401C18.2426 16.5856 16.5013 16.1959 14.931 15.4055C13.3607 14.6151 12.0103 13.4487 11 12.0101C11 12.0101 7 21.0101 16 25.0101C13.9405 26.408 11.4872 27.109 9 27.0101C18 32.0101 29 27.0101 29 15.5101C28.9991 15.2315 28.9723 14.9537 28.92 14.6801C29.9406 13.6735 30.6608 12.4028 31 11.0101V11.0101Z" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </a>
                        <a className='social-item' href="/">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 16C25.5913 16 27.1174 16.6321 28.2426 17.7574C29.3679 18.8826 30 20.4087 30 22V29H26V22C26 21.4696 25.7893 20.9609 25.4142 20.5858C25.0391 20.2107 24.5304 20 24 20C23.4696 20 22.9609 20.2107 22.5858 20.5858C22.2107 20.9609 22 21.4696 22 22V29H18V22C18 20.4087 18.6321 18.8826 19.7574 17.7574C20.8826 16.6321 22.4087 16 24 16V16Z" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14 17H10V29H14V17Z" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </a>
                    </div>
                </div>
                <div className="mail">
                <span className="footerHead">Write me</span>
                <h1 className="mail-text">Simuratli@gmail.com</h1>
                </div>
            </div>
            <div className="footer-end">
                <img className="footer_image" src={require('../../../assets/images/background/footer.png')} alt=""/>
            </div>
        </footer>
    )
}

export default Footer
