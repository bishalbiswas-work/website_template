"use strict";
(() => {
var exports = {};
exports.id = 4116;
exports.ids = [4116];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 2134:
/***/ ((module) => {

module.exports = import("isomorphic-unfetch");;

/***/ }),

/***/ 7555:
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
// import fetch from "isomorphic-unfetch";
// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const state = req.body;
//     console.log("Received form data:", state);
//     const dataToSend = {
//       candidateName: state.candidateName,
//       contactNumber: state.contactNumber,
//       alternateNumber: state.alternateNumber,
//       emailID: state.emailID,
//       currentLocation: state.currentLocation,
//       landmark: state.landmark,
//       qualification: state.qualification,
//       currentCompany: state.currentCompany,
//     };
//     try {
//       const saveCandidateUrl =
//         "https://crm.hirewynk.com/api/save_candidate_data"; // Replace with the actual URL of your other backend
//       const response = await fetch(saveCandidateUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ formData: state }), // Sending the formData under the key "formData" as expected by the other backend
//       });
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
        // Define the new endpoint URL
        // const newEndpointUrl = "https://crm.hirewynk.com/api/save_candidate_data"; // Replace with your actual new endpoint URL
        // const dataToSend = {
        //   formData: {
        //     candidateName: state.candidateName,
        //     contactNumber: state.contactNumber,
        //     alternateNumber: state.alternateNumber,
        //     emailID: state.emailID,
        //     currentLocation: state.currentLocation,
        //     landmark: state.landmark,
        //     qualification: state.qualification,
        //     currentCompany: state.currentCompany,
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
var __webpack_exports__ = (__webpack_exec__(7555));
module.exports = __webpack_exports__;

})();