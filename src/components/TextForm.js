import React, { useState } from 'react'
// Cannot write because text is not changed make on chhange func
//events allow us to get value of the parent which calls the func
export default function TextForm(props) {

    function checkNumberOfWords() {
        if (text === '') return 0;
        return text.split(' ').length;
    }
    const handleLowClick = () => {
        textSet(text.toLowerCase());

    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
        alert('Text Copied')
    }
    const handleConversionClick = () => {
        textSet(text.replace('class','className'));

    }
    const handleTextClear = () => {
        textSet('');

    }
    const handleUpClick = () => {
        textSet(text.toUpperCase());

    }
    const changeValue = (event) => {

        textSet(event.target.value);
    }
    const [text, textSet] = useState('Enter text here');

    return (
        <>
            <div>
                <h1 className={`text-${props.mode==="light"?"dark":"light"}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode==="light"?"dark":"light"} text-${props.mode}`} value={text} onChange={changeValue} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >
                    Convert to UpperCase
                </button>
                <button className="btn btn-primary" onClick={handleLowClick} >
                    Convert to LowerCase
                </button>
                <button className="btn btn-primary mx-3" onClick={handleConversionClick} >
                    Convert normal bootStrap to React BootStrap
                </button>
                <button className="btn btn-primary mx-3" onClick={handleTextClear} >
                    Clear Text
                </button>
                <button className="btn btn-primary mx-3" onClick={handleCopyText} >
                    Copy Text To ClipBoard
                </button>

            </div>
            <div className='my-3'>
                <h1 className={`text-${props.mode==="light"?"dark":"light"}`}>Summary</h1>
                <p className={`text-${props.mode==="light"?"dark":"light"}`}>{checkNumberOfWords()} words and {text.length} chars</p>
                <p className={`text-${props.mode==="light"?"dark":"light"}`}>{0.008 * text.split(' ').length} min required to read the whole paragraph</p>
                <h1 className={`text-${props.mode==="light"?"dark":"light"}`}>Preview</h1>
                <p>{text}</p>
            </div>

        </>
    )
}
