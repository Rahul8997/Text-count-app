import React, { useState } from 'react'
import '../App.css'
import Alert from './Alert';

function TextForm(props) {
    const [val, setval] = useState("Enter your text here");
    const [alert, setAlert] = useState({isShowing:false,message:""});

    let showAlert = (msg) => {
        setAlert({isShowing:true,message:msg});
        setTimeout(() => {
          setAlert({isShowing:false,message:""});
        }, 1000);
      }

    let handleUpclick = (e) => {
        console.log("handle up clicked");
        console.log(setval(val.toUpperCase()));
        showAlert("Converted to uppercase successfully")
    }

    let handleDOwnClick = (e) => {
        console.log("handle down clicked");
        console.log(setval(val.toLowerCase()));
        showAlert("Converted to lowercase successfully")
    }

    let handleOnchange = (e) => {
        setval(e.target.value);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(val);
        showAlert("Copied to clipboard successfully")
    }
    const handleExtraSpaces = () => {
        let newText = val.split(/[ ]+/);
        setval(newText.join(" "));
        showAlert("Removed extra space successfully")
    }
    const handleClearClick = (e) => {
        setval('');
        showAlert("Cleared text successfully")
    }
    function words(text) {
        let arr = text.split(" ").filter((e) => { return e !== "" });
        return arr;
    }
    return (
        <div className={props.mod === "dark" ? "txt-form" : "light"} style={{ height: "100vh"}}>
            <div className="container">
                {alert.isShowing && <Alert alert={alert}/>}
            <h3>Text Count App-Play with your text at your fingertip!!!!</h3>
            <div className="form-floating">
                <textarea className={props.mod === "dark" ? `form-control mx-2 my-2 yellowbg` : `form-control mx-2 my-2`} value={val} id="floatingTextarea2" onChange={handleOnchange} style={{ height: "30vh", width: "80%" }}></textarea>
                <button disabled={val.length===0} className="btn btn-dark border border-light mx-1 my-1 btn-sm" onClick={handleUpclick}>Convert to Uppercase</button>
                <button disabled={val.length===0} className="btn btn-dark border border-light mx-1 my-1 btn-sm" onClick={handleDOwnClick}>Convert to Lowercase</button>
                <button disabled={val.length===0} className="btn btn-dark border border-light mx-1 my-1 btn-sm" onClick={handleClearClick}>Clear Text</button>
                <button disabled={val.length===0} className="btn btn-dark border border-light mx-1 my-1 btn-sm" onClick={handleCopy}>Copy Text</button>
                <button disabled={val.length===0} className="btn btn-dark border border-light mx-1 my-1 btn-sm" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className={props.mod==="light"?`border border-dark my-3 w-75 border-2 rounded`:`border border-light my-3 w-75 border-2 rounded`}>
            <h3 className='mx-2 '>Summary</h3>
            <p className='mx-2 '><em >{words(val).length} </em> Words and <em>{words(val).join(" ").length}</em> characters</p>
            </div>
            {val.length>0 ?<div className={props.mod==="light"?`border border-dark my-3 w-75 border-2 rounded`:`border border-light my-3 w-75 border-2 rounded`}>
            <h3 className='mx-2'>Preview</h3>
            <p className='mx-2'>{"" ? val === "Enter your text here" : val}</p>
            </div>:<div className='bg-danger text-center w-75 border border-dark rounded mx-2'>Please Enter some text to preview</div>}
            </div>
        </div>
    )
}

export default TextForm

