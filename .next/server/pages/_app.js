"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 3124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/elements/Preloader.js


const Preloader = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            id: "preloader-active",
            children: /*#__PURE__*/ _jsx("div", {
                className: "preloader d-flex align-items-center justify-content-center",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "preloader-inner position-relative",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "loader"
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const elements_Preloader = ((/* unused pure expression or super */ null && (Preloader)));

;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 2000);
        if (false) {}
        new WOW.WOW().init();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Your site description here"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Human Before Resource Pvt Ltd"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/next/support.js",
                        defer: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/ui/ui-dark-mode-toggle.js",
                        defer: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/ui/ui-responsive-nav.js",
                        defer: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/sw/sw-caching-strategies.js",
                        defer: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/sw/sw-push-notifications.js",
                        defer: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/analytics/analytics-google.js",
                        defer: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/analytics/analytics-facebook.js",
                        defer: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/seo/seo-schema-org.js",
                        defer: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/seo/seo-meta-tags.js",
                        defer: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/perf/perf-lazy-load-images.js",
                        defer: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/perf/perf-preload-assets.js",
                        defer: true
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3124));
module.exports = __webpack_exports__;

})();