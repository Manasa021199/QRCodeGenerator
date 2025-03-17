import React, { useEffect, useState } from 'react'

const CodeGenerator = () => {
    const [inputWord,setInputWord] = useState("");
    const [word,setWord] = useState("");
    const [qrCode,setQrCode] = useState("");
    const [size,setSize] = useState(400);

    useEffect(()=>{
      if(word){
        setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}`)
      }
      else{
        setQrCode("");
      }
    },[word,size]);

    const handleOnChange = (e) =>{
      setInputWord(e.target.value);
    }

    const handleOnClick = () =>{
      setWord(inputWord);
    }

    const handleOnSize = (e) => {
      setSize(e.target.value);
    }

  return (
    <>
      <div className="input_text">
        <input type="text" placeholder="Enter Text" onChange={handleOnChange} />
        <button onClick={handleOnClick}>Generate</button>
      </div>
      <div className="dimension">
        <label for="size">Dimension:</label>
        <input type="range" id="size" min={200} max={800} value={size} onChange={handleOnSize} />
      </div>
      {word && (
        <div className="output_generator">
          <img src={qrCode} alt="qrcode" />
          <a href={qrCode} download="QRCode" >
            <button type="button" className="download_button" >Download QRCode</button>
          </a>
        </div>
      )}
    </>
  )
}

export default CodeGenerator;
