import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { NotificationBar } from "../notificationBar/NotificationBar";
import "./Encrypt.css";

export const Encrypt = ({ setShowEncrypt, setShowDecrypt }) => {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [showNotificationTwo, setShowNotificationTwo] = useState(false);
  const [encryptedText, setEncryptedText] = useState(false);
  const [showWrongInput, setShowWrongInput] = useState(false);

  const encryptPassword = (e) => {
    e.preventDefault();
    if (password == "") {
      setShowNotificationTwo(true);
    }
 {/* This app is created by Mohit Agarwal  :: -> :: eMail : mohit724agarwal@gmail.com */}
    var tempText = "";
    for (var i = 0; i < password.length; i++) {
      tempText += encryptFun(password[i]);
      setResult(tempText);
      setEncryptedText(true);
    }
    // if ( password.match( /[≠\≈\≡\≃\≅\∽\¨\≐\≒\≓\≔\≕\≖\≗\≘\≙\≚\≛\≜\≞\≟\⩴\⩵\⩶\¢\¦\§\¨\©\«\ª\¬\®\°\±\²\µ\¶\»\¼\½\¾\¿\Æ\ð\ƌ\Ɲ\Ƣ\Ʀ\Ƶ\Ʒ\Ƹ\ƺ\Ǆ\ǅ\ǆ\Ǉ\Ǌ\ǋ\Ø\¤\Ā\Ⱦ\ȿ\ɀ\Ƀ\ɇ\Ɏ\β\ζ\θ\ξ\φ\ώ\ϖ\ϗ\Ϣ\Ͽ\Љ\Њ\Ћ\Џ\Д\Ж\Щ\Ю\Ѡ\▽\◇\ƕ\ƛ\Ⱥ\ɼ\Ѥ\Ѭ\Ѫ\Ѩ\Ѽ]/ )) {
    //   setEncryptedText(false);
    //   setResult("");
    //   setShowWrongInput(true);
    // }
    function encryptFun(x) {
      switch (x) {
        case "a":
          return "≠";
        case "b":
          return "≈";
        case "c":
          return "≡";
        case "d":
          return "≃";
        case "e":
          return "≅";
        case "f":
          return "∽";
        case "g":
          return "¨";
        case "h":
          return "≐";
        case "i":
          return "≒";
        case "j":
          return "≓";
        case "k":
          return "≔";
        case "l":
          return "≌";
        case "m":
          return "≕";
        case "n":
          return "≖";
        case "o":
          return "≗";
        case "p":
          return "≘";
        case "q":
          return "≙";
        case "r":
          return "≚";
        case "s":
          return "≛";
        case "t":
          return "≜";
        case "u":
          return "≞";
        case "v":
          return "≟";
        case "w":
          return "⩴";
        case "x":
          return "⩵";
        case "y":
          return "⩶";
        case "z":
          return "¢";
        case "A":
          return "¦";
        case "B":
          return "§";
        case "C":
          return "¨";
        case "D":
          return "©";
        case "E":
          return "«";
        case "F":
          return "ª";
        case "G":
          return "¬";
        case "H":
          return "®";
        case "I":
          return "°";
        case "J":
          return "±";
        case "K":
          return "²";
        case "L":
          return "³";
        case "M":
          return "µ";
        case "N":
          return "¶";
        case "O":
          return "»";
        case "P":
          return "¼";
        case "Q":
          return "½";
        case "R":
          return "¾";
        case "S":
          return "¿";
        case "T":
          return "Æ";
        case "U":
          return "ð";
        case "V":
          return "ƌ";
        case "W":
          return "Ɲ";
        case "X":
          return "Ƣ";
        case "Y":
          return "Ʀ";
        case "Z":
          return "Ƶ";
        case "1":
          return "Ʒ";
        case "2":
          return "Ƹ";
        case "3":
          return "ƹ";
        case "4":
          return "ƺ";
        case "5":
          return "Ǆ";
        case "6":
          return "ǅ";
        case "7":
          return "ǆ";
        case "8":
          return "Ǉ";
        case "9":
          return "Ǌ";
        case "0":
          return "ǋ";
        case " ":
          return "Ø";
        case "@":
          return "¤";
        case ".":
          return "Ā";
        case "`":
          return "Ⱦ";
        case "~":
          return "ȿ";
        case "!":
          return "ɀ";
        case "#":
          return "Ƀ";
        case "$":
          return "ɇ";
        case "%":
          return "Ɏ";
        case "^":
          return "β";
        case "&":
          return "ζ";
        case "(":
          return "ξ";
        case ")":
          return "φ";
        case "_":
          return "ώ";
        case "-":
          return "ϖ";
        case "+":
          return "ϗ";
        case "=":
          return "Ϣ";
        case "|":
          return "Ͽ";
        case "{":
          return "Љ";
        case "}":
          return "Њ";
        case "[":
          return "Ћ";
        case "]":
          return "Џ";
        case ";":
          return "Д";
        case "\\":
          return "ѱ";
        case ":":
          return "Ж";
        case "'":
          return "Щ";
        case `"`:
          return "Ю";
        case "<":
          return "Ѡ";
        case "“":
          return "▽";
        case "‘":
          return "◇";
        case "€":
          return "ƕ";
        case "£":
          return "ƛ";
        case "¥":
          return "Ⱥ";
        case "•":
          return "ɼ";
        case ">":
          return "Ѥ";
        case ",":
          return "Ѭ";
        case "?":
          return "Ѫ";
        case "/":
          return "Ѩ";
        case "*":
          return "Ѽ";
        case "’":
          return "θ";
        case "”":
          return "⁂";
      }
    }
  };
  const openDecrypt = (e) => {
    e.preventDefault();
    setShowEncrypt(false);
    setShowDecrypt(true);
  };
  const showAlert = () => {
    setShowNotification(true);
  };
  return (
    <div className="container">
      <div className="center-div">
        <form action="">
          <input
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <br />
          <button onClick={encryptPassword}>ENCRYPT</button>
        </form>
        {result && (
          <div className="result">
            <p className="result-text">{result}</p>
            <CopyToClipboard text={result}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 115.77 122.88"
                onClick={showAlert}
              >
                <path d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"></path>
              </svg>
              {/* <button onClick={ showAlert } className='copy-btn'>copy</button> */}
            </CopyToClipboard>
          </div>
        )}
        {showNotification && (
          <NotificationBar
            message={`Successfully Copied ! `}
            setShowNotification={setShowNotification}
          />
        )}
        {showNotificationTwo && (
          <NotificationBar
            message={`Please wrtie something, which you want to be ENCRYPTED ! `}
            setShowNotification={setShowNotificationTwo}
          />
        )}
        {encryptedText && (
          <NotificationBar
            message={`ENCRYPTED `}
            setShowNotification={setEncryptedText}
          />
        )}
        {showWrongInput && (
          <NotificationBar
            message={`You cannot ENCRYPT already ENCRYPTED Data. `}
            setShowNotification={setShowWrongInput}
          />
        )}

        <p className="decrypt-key" onClick={openDecrypt}>
          Decrypt your KEY
        </p>
      </div>
    </div>
  );
};
