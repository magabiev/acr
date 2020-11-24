import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./screens/App";
import "material-design-icons/iconfont/material-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/*<Test />*/}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// function Notice() {
//   return "added!";
// }
//
// function Test() {
//   //redux
//   const [adding, setAdding] = useState(false);
//
//   //state
//   const [clicked, setClicked] = useState(false);
//
//   function add() {
//     setAdding(true);
//     setClicked(true);
//
//     setTimeout(() => {
//       setAdding(false);
//     }, 1000);
//   }
//
//   return (
//     <div>
//       {adding === false && clicked && (
//         <div>
//           <Notice />
//           <button
//             onClick={() => {
//               setClicked(false);
//             }}
//           >
//             x
//           </button>
//         </div>
//       )}
//       <button onClick={add} disabled={adding}>
//         add
//       </button>
//     </div>
//   );
// }
