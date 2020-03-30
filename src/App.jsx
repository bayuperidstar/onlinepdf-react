import React from "react";
import { Worker } from "@phuocng/react-pdf-viewer";

import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

import SimpleToolbar from "./SimpleToolbar";

const App = () => {
  const url = window.location.pathname;
  console.log("URL PDF", url);
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.2.228/build/pdf.worker.min.js">
      <SimpleToolbar fileUrl={`${url}.pdf`} />
    </Worker>
  );
};

export default App;
