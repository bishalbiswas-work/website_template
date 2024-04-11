"use strict";
exports.id = 8151;
exports.ids = [8151];
exports.modules = {

/***/ 8760:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
let chalk;
if (true) {
    chalk = __webpack_require__(4426);
} else {}
var _default = chalk;
exports["default"] = _default;

//# sourceMappingURL=chalk.js.map

/***/ }),

/***/ 3997:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = loadCustomRoutes;
exports.getRedirectStatus = getRedirectStatus;
exports.normalizeRouteRegex = normalizeRouteRegex;
exports.modifyRouteRegex = modifyRouteRegex;
exports.allowedStatusCodes = void 0;
var _chalk = _interopRequireDefault(__webpack_require__(8760));
var _url = __webpack_require__(7310);
var pathToRegexp = _interopRequireWildcard(__webpack_require__(7999));
var _escapeRegexp = __webpack_require__(7664);
var _constants = __webpack_require__(6724);
var _isError = _interopRequireDefault(__webpack_require__(676));
async function loadCustomRoutes(config) {
    const [headers, rewrites, redirects] = await Promise.all([
        loadHeaders(config),
        loadRewrites(config),
        loadRedirects(config), 
    ]);
    const totalRewrites = rewrites.beforeFiles.length + rewrites.afterFiles.length + rewrites.fallback.length;
    const totalRoutes = headers.length + redirects.length + totalRewrites;
    if (totalRoutes > 1000) {
        console.warn(_chalk.default.bold.yellow(`Warning: `) + `total number of custom routes exceeds 1000, this can reduce performance. Route counts:\n` + `headers: ${headers.length}\n` + `rewrites: ${totalRewrites}\n` + `redirects: ${redirects.length}\n` + `See more info: https://nextjs.org/docs/messages/max-custom-routes-reached`);
    }
    if (config.trailingSlash) {
        redirects.unshift({
            source: '/:file((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/]+\\.\\w+)/',
            destination: '/:file',
            permanent: true,
            locale: config.i18n ? false : undefined,
            internal: true
        }, {
            source: '/:notfile((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/\\.]+)',
            destination: '/:notfile/',
            permanent: true,
            locale: config.i18n ? false : undefined,
            internal: true
        });
        if (config.basePath) {
            redirects.unshift({
                source: config.basePath,
                destination: config.basePath + '/',
                permanent: true,
                basePath: false,
                locale: config.i18n ? false : undefined,
                internal: true
            });
        }
    } else {
        redirects.unshift({
            source: '/:path+/',
            destination: '/:path+',
            permanent: true,
            locale: config.i18n ? false : undefined,
            internal: true
        });
        if (config.basePath) {
            redirects.unshift({
                source: config.basePath + '/',
                destination: config.basePath,
                permanent: true,
                basePath: false,
                locale: config.i18n ? false : undefined,
                internal: true
            });
        }
    }
    return {
        headers,
        rewrites,
        redirects
    };
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
const allowedStatusCodes = new Set([
    301,
    302,
    303,
    307,
    308
]);
exports.allowedStatusCodes = allowedStatusCodes;
const allowedHasTypes = new Set([
    'header',
    'cookie',
    'query',
    'host'
]);
const namedGroupsRegex = /\(\?<([a-zA-Z][a-zA-Z0-9]*)>/g;
function getRedirectStatus(route) {
    return route.statusCode || (route.permanent ? _constants.PERMANENT_REDIRECT_STATUS : _constants.TEMPORARY_REDIRECT_STATUS);
}
function normalizeRouteRegex(regex) {
    // clean up un-necessary escaping from regex.source which turns / into \\/
    return regex.replace(/\\\//g, '/');
}
function modifyRouteRegex(regex, restrictedPaths) {
    if (restrictedPaths) {
        regex = regex.replace(/\^/, `^(?!${restrictedPaths.map((path)=>path.replace(/\//g, '\\/')
        ).join('|')})`);
    }
    regex = regex.replace(/\$$/, '(?:\\/)?$');
    return regex;
}
function checkRedirect(route) {
    const invalidParts = [];
    let hadInvalidStatus = false;
    if (route.statusCode && !allowedStatusCodes.has(route.statusCode)) {
        hadInvalidStatus = true;
        invalidParts.push(`\`statusCode\` is not undefined or valid statusCode`);
    }
    if (typeof route.permanent !== 'boolean' && !route.statusCode) {
        invalidParts.push(`\`permanent\` is not set to \`true\` or \`false\``);
    }
    return {
        invalidParts,
        hadInvalidStatus
    };
}
function checkHeader(route) {
    const invalidParts = [];
    if (!Array.isArray(route.headers)) {
        invalidParts.push('`headers` field must be an array');
    } else if (route.headers.length === 0) {
        invalidParts.push('`headers` field cannot be empty');
    } else {
        for (const header of route.headers){
            if (!header || typeof header !== 'object') {
                invalidParts.push("`headers` items must be object with { key: '', value: '' }");
                break;
            }
            if (typeof header.key !== 'string') {
                invalidParts.push('`key` in header item must be string');
                break;
            }
            if (typeof header.value !== 'string') {
                invalidParts.push('`value` in header item must be string');
                break;
            }
        }
    }
    return invalidParts;
}
function tryParsePath(route, handleUrl) {
    const result = {};
    let routePath = route;
    try {
        if (handleUrl) {
            const parsedDestination = (0, _url).parse(route, true);
            routePath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
        }
        // Make sure we can parse the source properly
        result.tokens = pathToRegexp.parse(routePath);
        const regex = pathToRegexp.tokensToRegexp(result.tokens);
        result.regexStr = regex.source;
    } catch (err) {
        // If there is an error show our error link but still show original error or a formatted one if we can
        let errMatches;
        if ((0, _isError).default(err) && (errMatches = err.message.match(/at (\d{0,})/))) {
            const position = parseInt(errMatches[1], 10);
            console.error(`\nError parsing \`${route}\` ` + `https://nextjs.org/docs/messages/invalid-route-source\n` + `Reason: ${err.message}\n\n` + `  ${routePath}\n` + `  ${new Array(position).fill(' ').join('')}^\n`);
        } else {
            console.error(`\nError parsing ${route} https://nextjs.org/docs/messages/invalid-route-source`, err);
        }
        result.error = true;
    }
    return result;
}
function checkCustomRoutes(routes, type) {
    if (!Array.isArray(routes)) {
        console.error(`Error: ${type}s must return an array, received ${typeof routes}.\n` + `See here for more info: https://nextjs.org/docs/messages/routes-must-be-array`);
        process.exit(1);
    }
    let numInvalidRoutes = 0;
    let hadInvalidStatus = false;
    let hadInvalidHas = false;
    const allowedKeys = new Set([
        'source',
        'basePath',
        'locale',
        'has'
    ]);
    if (type === 'rewrite') {
        allowedKeys.add('destination');
    }
    if (type === 'redirect') {
        allowedKeys.add('statusCode');
        allowedKeys.add('permanent');
        allowedKeys.add('destination');
    }
    if (type === 'header') {
        allowedKeys.add('headers');
    }
    for (const route of routes){
        if (!route || typeof route !== 'object') {
            console.error(`The route ${JSON.stringify(route)} is not a valid object with \`source\` and \`${type === 'header' ? 'headers' : 'destination'}\``);
            numInvalidRoutes++;
            continue;
        }
        if (type === 'rewrite' && route.basePath === false && !(route.destination.startsWith('http://') || route.destination.startsWith('https://'))) {
            console.error(`The route ${route.source} rewrites urls outside of the basePath. Please use a destination that starts with \`http://\` or \`https://\` https://nextjs.org/docs/messages/invalid-external-rewrite`);
            numInvalidRoutes++;
            continue;
        }
        const keys = Object.keys(route);
        const invalidKeys = keys.filter((key)=>!allowedKeys.has(key)
        );
        const invalidParts = [];
        if (typeof route.basePath !== 'undefined' && route.basePath !== false) {
            invalidParts.push('`basePath` must be undefined or false');
        }
        if (typeof route.locale !== 'undefined' && route.locale !== false) {
            invalidParts.push('`locale` must be undefined or false');
        }
        if (typeof route.has !== 'undefined' && !Array.isArray(route.has)) {
            invalidParts.push('`has` must be undefined or valid has object');
            hadInvalidHas = true;
        } else if (route.has) {
            const invalidHasItems = [];
            for (const hasItem of route.has){
                let invalidHasParts = [];
                if (!allowedHasTypes.has(hasItem.type)) {
                    invalidHasParts.push(`invalid type "${hasItem.type}"`);
                }
                if (typeof hasItem.key !== 'string' && hasItem.type !== 'host') {
                    invalidHasParts.push(`invalid key "${hasItem.key}"`);
                }
                if (typeof hasItem.value !== 'undefined' && typeof hasItem.value !== 'string') {
                    invalidHasParts.push(`invalid value "${hasItem.value}"`);
                }
                if (typeof hasItem.value === 'undefined' && hasItem.type === 'host') {
                    invalidHasParts.push(`value is required for "host" type`);
                }
                if (invalidHasParts.length > 0) {
                    invalidHasItems.push(`${invalidHasParts.join(', ')} for ${JSON.stringify(hasItem)}`);
                }
            }
            if (invalidHasItems.length > 0) {
                hadInvalidHas = true;
                const itemStr = `item${invalidHasItems.length === 1 ? '' : 's'}`;
                console.error(`Invalid \`has\` ${itemStr}:\n` + invalidHasItems.join('\n'));
                console.error();
                invalidParts.push(`invalid \`has\` ${itemStr} found`);
            }
        }
        if (!route.source) {
            invalidParts.push('`source` is missing');
        } else if (typeof route.source !== 'string') {
            invalidParts.push('`source` is not a string');
        } else if (!route.source.startsWith('/')) {
            invalidParts.push('`source` does not start with /');
        }
        if (type === 'header') {
            invalidParts.push(...checkHeader(route));
        } else {
            let _route = route;
            if (!_route.destination) {
                invalidParts.push('`destination` is missing');
            } else if (typeof _route.destination !== 'string') {
                invalidParts.push('`destination` is not a string');
            } else if (type === 'rewrite' && !_route.destination.match(/^(\/|https:\/\/|http:\/\/)/)) {
                invalidParts.push('`destination` does not start with `/`, `http://`, or `https://`');
            }
        }
        if (type === 'redirect') {
            const result = checkRedirect(route);
            hadInvalidStatus = hadInvalidStatus || result.hadInvalidStatus;
            invalidParts.push(...result.invalidParts);
        }
        let sourceTokens;
        if (typeof route.source === 'string' && route.source.startsWith('/')) {
            // only show parse error if we didn't already show error
            // for not being a string
            const { tokens , error , regexStr  } = tryParsePath(route.source);
            if (error) {
                invalidParts.push('`source` parse failed');
            }
            if (regexStr && regexStr.length > 4096) {
                invalidParts.push('`source` exceeds max built length of 4096');
            }
            sourceTokens = tokens;
        }
        const hasSegments = new Set();
        if (route.has) {
            for (const hasItem of route.has){
                if (!hasItem.value && hasItem.key) {
                    hasSegments.add(hasItem.key);
                }
                if (hasItem.value) {
                    for (const match of hasItem.value.matchAll(namedGroupsRegex)){
                        if (match[1]) {
                            hasSegments.add(match[1]);
                        }
                    }
                    if (hasItem.type === 'host') {
                        hasSegments.add('host');
                    }
                }
            }
        }
        // make sure no unnamed patterns are attempted to be used in the
        // destination as this can cause confusion and is not allowed
        if (typeof route.destination === 'string') {
            if (route.destination.startsWith('/') && Array.isArray(sourceTokens)) {
                const unnamedInDest = new Set();
                for (const token of sourceTokens){
                    if (typeof token === 'object' && typeof token.name === 'number') {
                        const unnamedIndex = new RegExp(`:${token.name}(?!\\d)`);
                        if (route.destination.match(unnamedIndex)) {
                            unnamedInDest.add(`:${token.name}`);
                        }
                    }
                }
                if (unnamedInDest.size > 0) {
                    invalidParts.push(`\`destination\` has unnamed params ${[
                        ...unnamedInDest
                    ].join(', ')}`);
                } else {
                    const { tokens: destTokens , regexStr: destRegexStr , error: destinationParseFailed ,  } = tryParsePath(route.destination, true);
                    if (destRegexStr && destRegexStr.length > 4096) {
                        invalidParts.push('`destination` exceeds max built length of 4096');
                    }
                    if (destinationParseFailed) {
                        invalidParts.push('`destination` parse failed');
                    } else {
                        const sourceSegments = new Set(sourceTokens.map((item)=>typeof item === 'object' && item.name
                        ).filter(Boolean));
                        const invalidDestSegments = new Set();
                        for (const token of destTokens){
                            if (typeof token === 'object' && !sourceSegments.has(token.name) && !hasSegments.has(token.name)) {
                                invalidDestSegments.add(token.name);
                            }
                        }
                        if (invalidDestSegments.size) {
                            invalidParts.push(`\`destination\` has segments not in \`source\` or \`has\` (${[
                                ...invalidDestSegments, 
                            ].join(', ')})`);
                        }
                    }
                }
            }
        }
        const hasInvalidKeys = invalidKeys.length > 0;
        const hasInvalidParts = invalidParts.length > 0;
        if (hasInvalidKeys || hasInvalidParts) {
            console.error(`${invalidParts.join(', ')}${invalidKeys.length ? (hasInvalidParts ? ',' : '') + ` invalid field${invalidKeys.length === 1 ? '' : 's'}: ` + invalidKeys.join(',') : ''} for route ${JSON.stringify(route)}`);
            console.error();
            numInvalidRoutes++;
        }
    }
    if (numInvalidRoutes > 0) {
        if (hadInvalidStatus) {
            console.error(`\nValid redirect statusCode values are ${[
                ...allowedStatusCodes
            ].join(', ')}`);
        }
        if (hadInvalidHas) {
            console.error(`\nValid \`has\` object shape is ${JSON.stringify({
                type: [
                    ...allowedHasTypes
                ].join(', '),
                key: 'the key to check for',
                value: 'undefined or a value string to match against'
            }, null, 2)}`);
        }
        console.error();
        console.error(`Error: Invalid ${type}${numInvalidRoutes === 1 ? '' : 's'} found`);
        process.exit(1);
    }
}
function processRoutes(routes, config, type) {
    const _routes = routes;
    const newRoutes = [];
    const defaultLocales = [];
    if (config.i18n && type === 'redirect') {
        var ref;
        for (const item of ((ref = config.i18n) === null || ref === void 0 ? void 0 : ref.domains) || []){
            defaultLocales.push({
                locale: item.defaultLocale,
                base: `http${item.http ? '' : 's'}://${item.domain}`
            });
        }
        defaultLocales.push({
            locale: config.i18n.defaultLocale,
            base: ''
        });
    }
    for (const r of _routes){
        var ref1;
        const srcBasePath = config.basePath && r.basePath !== false ? config.basePath : '';
        const isExternal = !((ref1 = r.destination) === null || ref1 === void 0 ? void 0 : ref1.startsWith('/'));
        const destBasePath = srcBasePath && !isExternal ? srcBasePath : '';
        if (config.i18n && r.locale !== false) {
            var ref2;
            if (!isExternal) {
                defaultLocales.forEach((item)=>{
                    let destination;
                    if (r.destination) {
                        destination = item.base ? `${item.base}${destBasePath}${r.destination}` : `${destBasePath}${r.destination}`;
                    }
                    newRoutes.push({
                        ...r,
                        destination,
                        source: `${srcBasePath}/${item.locale}${r.source}`
                    });
                });
            }
            r.source = `/:nextInternalLocale(${config.i18n.locales.map((locale)=>(0, _escapeRegexp).escapeStringRegexp(locale)
            ).join('|')})${r.source === '/' && !config.trailingSlash ? '' : r.source}`;
            if (r.destination && ((ref2 = r.destination) === null || ref2 === void 0 ? void 0 : ref2.startsWith('/'))) {
                r.destination = `/:nextInternalLocale${r.destination === '/' && !config.trailingSlash ? '' : r.destination}`;
            }
        }
        r.source = `${srcBasePath}${r.source === '/' && srcBasePath ? '' : r.source}`;
        if (r.destination) {
            r.destination = `${destBasePath}${r.destination === '/' && destBasePath ? '' : r.destination}`;
        }
        newRoutes.push(r);
    }
    return newRoutes;
}
async function loadRedirects(config) {
    if (typeof config.redirects !== 'function') {
        return [];
    }
    let redirects = await config.redirects();
    // check before we process the routes and after to ensure
    // they are still valid
    checkCustomRoutes(redirects, 'redirect');
    redirects = processRoutes(redirects, config, 'redirect');
    checkCustomRoutes(redirects, 'redirect');
    return redirects;
}
async function loadRewrites(config) {
    if (typeof config.rewrites !== 'function') {
        return {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        };
    }
    const _rewrites = await config.rewrites();
    let beforeFiles = [];
    let afterFiles = [];
    let fallback = [];
    if (!Array.isArray(_rewrites) && typeof _rewrites === 'object' && Object.keys(_rewrites).every((key)=>key === 'beforeFiles' || key === 'afterFiles' || key === 'fallback'
    )) {
        beforeFiles = _rewrites.beforeFiles || [];
        afterFiles = _rewrites.afterFiles || [];
        fallback = _rewrites.fallback || [];
    } else {
        afterFiles = _rewrites;
    }
    // check before we process the routes and after to ensure
    // they are still valid
    checkCustomRoutes(beforeFiles, 'rewrite');
    checkCustomRoutes(afterFiles, 'rewrite');
    checkCustomRoutes(fallback, 'rewrite');
    beforeFiles = processRoutes(beforeFiles, config, 'rewrite');
    afterFiles = processRoutes(afterFiles, config, 'rewrite');
    fallback = processRoutes(fallback, config, 'rewrite');
    checkCustomRoutes(beforeFiles, 'rewrite');
    checkCustomRoutes(afterFiles, 'rewrite');
    checkCustomRoutes(fallback, 'rewrite');
    return {
        beforeFiles,
        afterFiles,
        fallback
    };
}
async function loadHeaders(config) {
    if (typeof config.headers !== 'function') {
        return [];
    }
    let headers = await config.headers();
    // check before we process the routes and after to ensure
    // they are still valid
    checkCustomRoutes(headers, 'header');
    headers = processRoutes(headers, config, 'header');
    checkCustomRoutes(headers, 'header');
    return headers;
}

//# sourceMappingURL=load-custom-routes.js.map

/***/ }),

/***/ 8151:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
var _loadCustomRoutes = __webpack_require__(3997);
var _pathMatch = _interopRequireDefault(__webpack_require__(5753));
var _prepareDestination = __webpack_require__(9521);
var _requestMeta = __webpack_require__(2779);
var _querystring = __webpack_require__(3477);
var _url = __webpack_require__(7310);
var _utils = __webpack_require__(9232);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getCustomRouteMatcher = (0, _pathMatch).default(true);
const getCustomRoute = ({ type , rule , restrictedRedirectPaths  })=>{
    const match = getCustomRouteMatcher(rule.source, !rule.internal ? (regex)=>(0, _loadCustomRoutes).modifyRouteRegex(regex, type === 'redirect' ? restrictedRedirectPaths : undefined)
     : undefined);
    return {
        ...rule,
        type,
        match,
        name: type,
        fn: async (_req, _res, _params, _parsedUrl)=>({
                finished: false
            })
    };
};
__webpack_unused_export__ = getCustomRoute;
const createHeaderRoute = ({ rule , restrictedRedirectPaths  })=>{
    const headerRoute = getCustomRoute({
        type: 'header',
        rule,
        restrictedRedirectPaths
    });
    return {
        match: headerRoute.match,
        has: headerRoute.has,
        type: headerRoute.type,
        name: `${headerRoute.type} ${headerRoute.source} header route`,
        fn: async (_req, res, params, _parsedUrl)=>{
            const hasParams = Object.keys(params).length > 0;
            for (const header of headerRoute.headers){
                let { key , value  } = header;
                if (hasParams) {
                    key = (0, _prepareDestination).compileNonPath(key, params);
                    value = (0, _prepareDestination).compileNonPath(value, params);
                }
                res.setHeader(key, value);
            }
            return {
                finished: false
            };
        }
    };
};
__webpack_unused_export__ = createHeaderRoute;
const createRedirectRoute = ({ rule , restrictedRedirectPaths  })=>{
    const redirectRoute = getCustomRoute({
        type: 'redirect',
        rule,
        restrictedRedirectPaths
    });
    return {
        internal: redirectRoute.internal,
        type: redirectRoute.type,
        match: redirectRoute.match,
        has: redirectRoute.has,
        statusCode: redirectRoute.statusCode,
        name: `Redirect route ${redirectRoute.source}`,
        fn: async (req, res, params, parsedUrl)=>{
            const { parsedDestination  } = (0, _prepareDestination).prepareDestination({
                appendParamsToQuery: false,
                destination: redirectRoute.destination,
                params: params,
                query: parsedUrl.query
            });
            const { query  } = parsedDestination;
            delete parsedDestination.query;
            parsedDestination.search = stringifyQuery(req, query);
            let updatedDestination = (0, _url).format(parsedDestination);
            if (updatedDestination.startsWith('/')) {
                updatedDestination = (0, _utils).normalizeRepeatedSlashes(updatedDestination);
            }
            res.redirect(updatedDestination, (0, _loadCustomRoutes).getRedirectStatus(redirectRoute)).body(updatedDestination).send();
            return {
                finished: true
            };
        }
    };
};
__webpack_unused_export__ = createRedirectRoute;
const stringifyQuery = (req, query)=>{
    const initialQuery = (0, _requestMeta).getRequestMeta(req, '__NEXT_INIT_QUERY') || {};
    const initialQueryValues = Object.values(initialQuery);
    return (0, _querystring).stringify(query, undefined, undefined, {
        encodeURIComponent (value) {
            if (value in initialQuery || initialQueryValues.some((initialQueryVal)=>{
                // `value` always refers to a query value, even if it's nested in an array
                return Array.isArray(initialQueryVal) ? initialQueryVal.includes(value) : initialQueryVal === value;
            })) {
                // Encode keys and values from initial query
                return encodeURIComponent(value);
            }
            return value;
        }
    });
};
__webpack_unused_export__ = stringifyQuery;

//# sourceMappingURL=server-route-utils.js.map

/***/ })

};
;