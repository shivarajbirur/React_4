var React = require("react");
var ReactDOM = require("react-dom");

const fname = "Shivaraj";
const lname = "Birur";

const fullname = fname + " " + lname;

// ReactDOsM.render(
//   <div>
//     <h1>Hi {fname} {lname}</h1>
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <div>
//     <h1>Hi {fullname}</h1>
//   </div>,
//   document.getElementById("root")
// );
// ReactDOM.render(
//   <div>
//     <h1>Hi {fname + " " + lname}</h1>
//   </div>,
//   document.getElementById("root")
// );
ReactDOM.render(
  <div>
    <h1>Hi {`${fname} ${lname}`}</h1>
  </div>,
  document.getElementById("root")
);
