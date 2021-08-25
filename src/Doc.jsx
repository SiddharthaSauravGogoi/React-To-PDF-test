import React, { useRef, useState } from 'react';
import Pdf from "react-to-pdf";

// Create Document Component
export default function MyDocument() {

  const [name, setName] = useState('')

  const docRef = useRef();
  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="Enter a name"
        onChange={(event) => setName(event.target.value)}
      />
      <div className="pdf-cover" ref={docRef}>
        <div >
          <h1>Hello {name}</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed ipsum, totam eligendi eos dolorem ullam recusandae quidem, id rerum perferendis quas sint laboriosam vero. Repellat iusto eius tempora corporis!  </p>
          <img
            height="200"
            width="200"
            src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="" srcset="" />
        </div>
      </div>
      <Pdf targetRef={docRef} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    </>
  );
}

