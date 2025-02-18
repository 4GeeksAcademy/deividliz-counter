import React from "react";
import { useState, useEffect } from 'react';



function Contador() {
  const [count, setCount] = useState(0);

  const numDigits = 6; // Define el número de dígitos a mostrar

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [count]);

  const formatCount = (count) => {
    const countString = String(count).padStart(numDigits, '0'); // Añade ceros a la izquierda
    return countString;
  };

  const digits = formatCount(count).split(''); // Convierte el número en un array de dígitos

  return (
    <div>
      <div className="contador">
        <div className=" row justify-content-center">
          <div className='col-md-2'>
            <div className='title'>Counter</div>

        <span className="counter">
        {digits.map((digit, index) => (
          <span key={index}>{digit}</span>
        ))}</span>
      </div>
        </div>
        </div>
    </div>
  );
}
export default Contador;