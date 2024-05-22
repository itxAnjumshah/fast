import React, { useCallback, useEffect, useRef, useState } from 'react'
import "./Passwor.css"

export default function Password() {

  const [length, setLength] = useState(8);
  const [numbox, setNumbox] = useState(false);
  const [charallow, setCharallow] = useState(false);
  const [passwordd, setPasswordd] = useState("");

  // useRef hook
  const passwordref = useRef(null);

  // End of ref
  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbox) str += "1234567890";
    if (charallow) str += "!@#$%^&*()_+|\\{}[]";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPasswordd(pass);

  }, [length, numbox, charallow]);

  const CopyPasswordfromClipBoard = useCallback(() => {
    if (passwordref.current) {
      passwordref.current.select();
      document.execCommand("copy");
    }
  }, []);

  useEffect(() => {
    passwordgenerator();
  }, [length, numbox, charallow, passwordgenerator]);

  return (
    <>
      <h1>Password-generator</h1>
      <div className='box'>
        <input
          type="text"
          className='inp-text'
          value={passwordd}
          placeholder='Password'
          ref={passwordref}
          readOnly
        />
        <button onClick={CopyPasswordfromClipBoard}>Copy</button>
        <div>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
          <input
            type="checkbox"
            checked={numbox}
            onChange={() => setNumbox((prev) => !prev)}
          />
          <label htmlFor="">Number</label>
          <input
            type="checkbox"
            checked={charallow}
            onChange={() => setCharallow((prev) => !prev)}
          />
          <label>Character</label>
        </div>
      </div>
      
    </>
  );
}
