import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { NotificationBar } from '../notificationBar/NotificationBar'
import './Decrypt.css'

export const Decrypt = ({ setShowEncrypt , setShowDecrypt }) => {
    
    const [password, setPassword] = useState('')
    const [result, setResult] = useState('')
    const [decryptedShow, setDecryptedShow] = useState(false)
    const [showNotification, setShowNotification] = useState(false);
    const [emptyText, setEmptyText] = useState(false)
    const [wrongInput, setWrongInput] = useState(false)

    const decryptPassword = (e) => {
        e.preventDefault()
        // console.log(password)
        if(password == '') {
            setEmptyText(true)
        }
        var tempText = ''
        for(var i=0;i<password.length;i++){
            tempText += decryptFun(password[i])
            setResult(tempText)
            // console.log(tempText)
            // console.log(result)
            setDecryptedShow(true)
        }

       if(password.match(/[A-Z]/)|| password.match(/[0-9]/) || password.match(/[a-z]/) || password.match(/[!\`\~\\\/\@\#\$\%\^\&\*\)\(\=\+\-\.\,\?\<\>\;\:\{\}\[\]\*]/)){
            setDecryptedShow(false)
            setResult('')
            setWrongInput(true)
        }
     
        function decryptFun(x) {
                switch(x){
                    case  "≠" :
                        return"a";
                    case "≈" :
                        return "b";
                    case "≡":
                        return "c" ;
                    case "≃" :
                        return "d";
                    case "≅" :
                        return "e";
                    case "∽" :
                        return  "f";
                    case "¨" :
                        return "g";
                    case "≐" :
                        return  "h";
                    case "≒" :
                        return  "i";
                    case "≓" :
                        return "j";
                    case "≔" :
                        return "k";
                    case "≌" :
                        return "l";            
                    case "≕" :
                        return "m";
                    case "≖" :
                        return "n";        
                    case "≗":
                        return "o" ;
                    case "≘" :
                        return "p";
                    case "≙" :
                        return "q";
                    case "≚" :
                        return "r";
                    case "≛" :
                        return "s";
                    case  "≜":
                        return "t";
                    case  "≞":
                        return "u";
                    case  "≟":
                        return "v";
                    case "⩴" :
                        return "w";
                    case "⩵" :
                        return "x";
                    case"⩶" :
                        return  "y";
                    case "¢" :
                        return "z";
                    case  "¦":
                        return "A";
                    case  "§":
                        return "B";
                    case  "¨":
                        return "C";
                    case "©" :
                        return "D";
                    case  "«":
                        return "E";
                    case "ª" :
                        return "F" ;
                    case  "¬":
                        return "G";
                    case "®" :
                        return  "H";
                    case "°"  :
                        return "I";
                    case  "±":
                        return "J";
                    case "²":
                        return "K";
                    case "³":
                        return  "L" ;              
                    case  "µ" :
                        return "M";
                    case "¶" :
                        return "N";        
                    case "»" :
                        return "O";
                    case "¼":
                        return  "P";
                    case "½":
                        return "Q";
                    case  "¾":
                        return "R";
                    case  "¿":
                        return "S";
                    case "Æ":
                        return  "T";
                    case  "ð":
                        return "U";
                    case "ƌ" :
                        return "V";
                    case"Ɲ" :
                        return  "W";
                    case  "Ƣ":
                        return "X";
                    case "Ʀ" :
                        return "Y";
                    case "Ƶ" :
                        return "Z";
                    case "Ʒ":
                        return "1" ;
                    case "Ƹ" :
                        return "2";
                    case  "ƹ" :
                        return  "3";           
                    case "ƺ" :
                        return "4";
                    case "Ǆ" :
                        return "5";        
                    case "ǅ" :
                        return "6";
                    case "ǆ" :
                        return "7";
                    case "Ǉ":
                        return "8";
                    case  "Ǌ":
                        return "9";
                    case  "ǋ":
                        return"0";
                    case "Ø" :
                        return " ";
                    case "¤":
                        return "@" ;
                    case "Ā" :
                        return ".";
                    case "Ⱦ" :
                        return "`";
                    case "ȿ" :
                        return "~";
                    case  "ɀ":
                        return "!";
                    case  "Ƀ":
                        return "#";
                    case "ɇ" :
                        return "$";
                    case  "Ɏ":
                        return "%";
                    case  "β":
                        return "^";
                    case "ѱ" :
                        return "\\";
                    case  "ζ":
                        return "&";
                    case "ξ":
                        return "(";
                    case  "φ":
                        return ")";
                    case  "ώ":
                        return "_";
                    case "ϖ":
                        return "-" ;
                    case  "ϗ":
                        return "+";
                    case  "Ϣ":
                        return "=";
                    case  "Ͽ":
                        return "|";
                    case  "Љ":
                        return "{";
                    case  "Њ":
                        return "}" ;
                    case  "Ћ":
                        return "[";
                    case "Џ":
                        return  "]";
                    case "Д":
                        return ";" ;
                    case "Ж":
                        return ":";
                    case  "Щ":
                        return "'";
                    case "Ю":
                        return `"` ;
                    case  "Ѡ":
                        return "<";
                    case  "Ѥ":
                        return ">";
                    case  "Ѭ":
                        return ",";
                    case  "Ѫ":
                        return "?";
                    case  "Ѩ":
                        return "/";
                    case  "Ѽ":
                        return "'*'";
                    case "▽":
                        return "“" ;
                    case "◇":
                        return "‘" ;
                    case "ƕ":
                        return "€" ;
                    case "ƛ" :
                        return "£";
                    case "Ⱥ" :
                        return "¥";
                    case "ɼ" :
                        return "•";
                    case "θ":
                        return "’";
                    case "⁂":
                        return "”";
                }
        }
        
    }
    const openDecrypt = () => {
        setShowDecrypt(false)
        setShowEncrypt(true)
    }
    const showAlert = () => {
        setShowNotification(true);
      };
  return (
    <div className="container">
    <div className="center-div">
                <form action="">
                        <input type="text" placeholder='Enter your password' value={ password } onChange={ e => setPassword(e.target.value)} className='input-field'/><br />
                        <button onClick={ decryptPassword }>DECRYPT</button>
                </form>
                {
                    result&& <div className="result">
                    <p className="result-text">{result}</p>
                    <CopyToClipboard text={result}>
                    <svg width="24"   height="24" viewBox="0 0 115.77 122.88"  onClick={showAlert}  >
                            <path d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"></path>
                    </svg>
                    </CopyToClipboard>
                </div>
                }
              <p className="decrypt-key" onClick={ openDecrypt }>Encrypt your DATA</p>
              {decryptedShow && <NotificationBar message={'DECRYPTED'} setShowNotification = { setDecryptedShow}/>}
              {emptyText && <NotificationBar message={'Please Enter Your ENCRYPTED Key'} setShowNotification = { setEmptyText}/>}
              {wrongInput && <NotificationBar message={'You Can Only DECRYPT Your ENCRYPTED Data Here'} setShowNotification = { setWrongInput}/>}
              {showNotification && <NotificationBar message={'Successfully Copied ! '} setShowNotification = { setShowNotification}/>}
        </div>
        </div>
  )
}