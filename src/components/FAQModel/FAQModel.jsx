import React, { useEffect } from 'react'
import './FAQModel.css'

export const FAQModel = ({setShowModel, showModel}) => {
    const closeModel = () => {
        setShowModel(false)
    }
    useEffect(() => {
        document.addEventListener('keydown', clickHandler)
        return() => {
            document.removeEventListener('keydown',clickHandler)
        }
    },[showModel])
    const clickHandler = (e) => {
        if(e.keyCode == 27){
            setShowModel(false)
        }
    }
  return (
    <div className='faq-model-div'>
            <div className="container-div-faq">
                        <div className="heading-div">
                            <h1 className="heading-text">Welcome to this FREE Password ENCRYPTION App</h1>
                            <button className="close-model-bt" onClick={ closeModel }>X</button>
                        </div>  
                        <div className="subject-div">
                            <h1 className='faq-text-heading'>FAQ</h1>
                            <p className="subject-heading">Allowed Charactors</p>
                            <ul>
                                
                                <li>All alphabats in Upper Case.</li>
                                <li>All alphabats in Lower Case.</li>
                                <li>0 to 9 digits.</li>
                                <li>All basic Special Charactors.</li>
                                <li className="witout-symbol">` , ~ , ! , @ , # , $ , % , ^ , & , * , \ , ( , ) , _ , = , + , |, [ , ] , `{` , `}` , ; , : , ' , " , {'>'} , {'<'} , . , </li>
                            </ul>
                            <p className="subject-heading">Not-allowed Charactors</p>
                            <ul>
                                <li>Any other special Charactors which are not mentioned above.</li>
                            </ul>
                        </div>
                        <div className="footer-faq-div">
                            <p className="footer-text">If you are facing any trouble while doing encryption or decryption, or you think there is a bug in this app, you can simply reach out to me on my Social Media handles</p>
                            <ul className='ul-social'>
                                <li className='li-social'><a href='https://github.com/25mohit' target='_blank'>GitHub</a></li>
                                <li className='li-social'><a href='https://www.linkedin.com/in/agarwal24/' target='_blank'>Linkedin</a></li>
                                <li className='li-social'><a href='https://twitter.com/mo_hit24' target='_blank'>Twitter</a></li>
                                <li className='li-social'><a href='https://www.instagram.com/im_hit_/' target='_blank'>Instagram</a></li>
                                <li className='li-social'><a href='https://www.facebook.com/mohit724agarwal' target='_blank'>Facebook</a></li>
                            </ul>
                            <p className="email-text">Email : <span>mohit724agarwal@gmail.com</span>&nbsp;&nbsp;( contact me )</p>
                        </div>
            </div>
    </div>
  )
}
