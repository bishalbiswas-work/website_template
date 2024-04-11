"use strict";
(() => {
var exports = {};
exports.id = 2453;
exports.ids = [2453];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 2134:
/***/ ((module) => {

module.exports = import("isomorphic-unfetch");;

/***/ }),

/***/ 5668:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2134);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// import { NextResponse } from "next/server";
// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
// pages/api/endpoint.js
// import fetch from "isomorphic-unfetch"; // Import fetch for making HTTP requests
// import axios from "axios";
// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const state = req.body;
//     console.log("Received form data:", state);
//     try {
//       // Make an HTTP POST request to the webhook URL with the form data
//       const saveCilentUrl = "https://crm.hirewynk.com/api/save_client_data"; // Replace with your actual webhook URL
//       // const dataToSend = {
//       //   formData: {
//       //     firstName: state.firstName,
//       //     lastName: state.lastName,
//       //     company: state.company,
//       //     email: state.businessMail,
//       //     contactNumber: state.phoneNumber,
//       //     designation: state.designation,
//       //     solution: state.solution,
//       //     message: state.requirment,
//       //   },
//       // };
//       const dataToSend = {
//         formData: {
//           firstName: "Rahul",
//           lastName: "kumar",
//           company: "HBR",
//           email: "rk@gmail.com",
//           contactNumber: "0987654321",
//           designation: "Developer",
//           solution: "this is the solutions",
//           message: "This is text message.",
//         },
//       };
//       console.log("Data to Send: ", dataToSend);
//       // const response = await fetch(saveCilentUrl, {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: dataToSend, // Sending the formData under the key "formData" as expected by the other backend
//       // });
//       const response = await axios.post(saveCilentUrl, {
//         dataToSend,
//       });
//       // Check if the request was successful
//       if (response.ok) {
//         res.status(200).json({ message: "Data sent to backend successfully" });
//       } else {
//         res.status(500).json({ error: "Failed to send data to backend" });
//       }
//     } catch (error) {
//       console.error("Error sending data to backend:", error);
//       res.status(500).json({ error: "Failed to send data to backend" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
 // Import fetch for making HTTP requests
 // Import axios for making HTTP requests
async function handler(req, res) {
    if (req.method === "POST") {
        const state = req.body; // Extract data from the request body
        console.log("Received form data:", state);
        try {
            res.status(200).json({
                message: "Data sent to new endpoint successfully"
            });
        // // Define the new endpoint URL
        // const newEndpointUrl = "https://crm.hirewynk.com/api/save_client_data"; // Replace with your actual new endpoint URL
        // // Format the data as required by the new endpoint
        // const dataToSend = {
        //   formData: {
        //     firstName: state.firstName,
        //     lastName: state.lastName,
        //     company: state.company,
        //     email: state.businessMail,
        //     contactNumber: state.phoneNumber,
        //     designation: state.designation,
        //     solution: state.solution,
        //     message: state.requirment,
        //   },
        // };
        // console.log("Data to Send to New Endpoint: ", dataToSend);
        // // Make an HTTP POST request to the new endpoint with the formatted data
        // const response = await axios.post(newEndpointUrl, dataToSend);
        // // Check if the request was successful
        // if (response.status === 200) {
        //   // Using `response.status` with axios
        //   res
        //     .status(200)
        //     .json({ message: "Data sent to new endpoint successfully" });
        // } else {
        //   res.status(500).json({ error: "Failed to send data to new endpoint" });
        // }
        } catch (error) {
            console.error("Error sending data to new endpoint:", error);
            res.status(500).json({
                error: "Failed to send data to new endpoint"
            });
        }
    } else {
        res.setHeader("Allow", [
            "POST"
        ]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5668));
module.exports = __webpack_exports__;

})();