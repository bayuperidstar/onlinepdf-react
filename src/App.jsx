import React from "react";
import { Worker } from "@phuocng/react-pdf-viewer";

import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

import SimpleToolbar from "./SimpleToolbar";

const App = () => {
  const url = window.location.pathname;
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.2.228/build/pdf.worker.min.js">
      {/* <SimpleToolbar fileUrl={`${url.substring(1)}.pdf`} /> */}
      <SimpleToolbar fileUrl={'http://03e315c4.ngrok.io/pdfServe/?url=http%3A%2F%2Fwww.africau.edu%2Fimages%2Fdefault%2Fsample.pdf'} />
    </Worker>
  );
};

export default App;
