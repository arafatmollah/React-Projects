import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [showChar, setShowChar] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const [password, setPassword] = useState("");

  let passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (showChar) str += "!@#$%^&*-_+=[]{}~`";
    if (showNumber) str += "0123456789";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, showChar, showNumber, setPassword]);

  const CopytoClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, showChar, showNumber, PasswordGenerator]);

  return (
    <div>
      <h1 className="text-center text-3xl mt-3">Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <div className="flex my-5">
          <input
            className="w-full outline-none p-3 border border-cyan-600 rounded-md"
            type="text"
            readOnly
            value={password}
            ref={passwordRef}
          ></input>
          <button
            onClick={CopytoClipboard}
            className="bg-blue-500 text-white rounded-lg px-5 py-2"
          >
            Copy
          </button>
        </div>
        <div className="flex my-5">
          <div className="mx-4">
            <input
              onChange={(e) => setLength(e.target.value)}
              type="range"
              max="100"
              min="8"
              value={length}
            ></input>
            <label>Range: {length}</label>
          </div>
          <div className="mx-4">
            <input
              onChange={() => setShowChar((prev) => !prev)}
              defaultChecked={showChar}
              type="checkbox"
            ></input>
            <label>Show Character</label>
          </div>
          <div className="mx-4 flex">
            <input
              onChange={() => setShowNumber((prev) => !prev)}
              type="checkbox"
            ></input>
            <label>Show Number</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
