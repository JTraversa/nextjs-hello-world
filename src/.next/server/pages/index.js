"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/constants/index.ts":
/*!********************************!*\
  !*** ./lib/constants/index.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULT_CHAIN_ID\": () => (/* binding */ DEFAULT_CHAIN_ID),\n/* harmony export */   \"ROOT\": () => (/* binding */ ROOT),\n/* harmony export */   \"WAD\": () => (/* binding */ WAD)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/config */ \"./lib/core/config.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_config__WEBPACK_IMPORTED_MODULE_1__]);\n_core_config__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst DEFAULT_CHAIN_ID = _core_config__WEBPACK_IMPORTED_MODULE_1__.config.defaultChainId;\nconst ROOT = _core_config__WEBPACK_IMPORTED_MODULE_1__.config.defaultSiteRoot;\nconst WAD = ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(10).pow(18);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uc3RhbnRzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtQztBQUNLO0FBR2pDLE1BQU1FLGdCQUFnQixHQUFZRCwrREFBcUIsQ0FBWTtBQUNuRSxNQUFNRyxJQUFJLEdBQUdILGdFQUFzQixDQUFDO0FBRXBDLE1BQU1LLEdBQUcsR0FBR04sa0RBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQ1EsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2NvbnN0YW50cy9pbmRleC50cz8wMmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpZ051bWJlciB9IGZyb20gJ2V0aGVycyc7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvcmUvY29uZmlnJztcclxuaW1wb3J0IHsgQ2hhaW5JZCB9IGZyb20gJy4uL2VudW1zL0NoYWluSWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0hBSU5fSUQ6IENoYWluSWQgPSBjb25maWcuZGVmYXVsdENoYWluSWQgYXMgQ2hhaW5JZDtcclxuZXhwb3J0IGNvbnN0IFJPT1QgPSBjb25maWcuZGVmYXVsdFNpdGVSb290O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdBRCA9IEJpZ051bWJlci5mcm9tKDEwKS5wb3coMTgpO1xyXG4iXSwibmFtZXMiOlsiQmlnTnVtYmVyIiwiY29uZmlnIiwiREVGQVVMVF9DSEFJTl9JRCIsImRlZmF1bHRDaGFpbklkIiwiUk9PVCIsImRlZmF1bHRTaXRlUm9vdCIsIldBRCIsImZyb20iLCJwb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/constants/index.ts\n");

/***/ }),

/***/ "./lib/constants/links.ts":
/*!********************************!*\
  !*** ./lib/constants/links.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DISCORD_LINK\": () => (/* binding */ DISCORD_LINK),\n/* harmony export */   \"GITHUB_LINK\": () => (/* binding */ GITHUB_LINK),\n/* harmony export */   \"ROOT_WITH_PROTOCOL\": () => (/* binding */ ROOT_WITH_PROTOCOL),\n/* harmony export */   \"TWITTER_LINK\": () => (/* binding */ TWITTER_LINK)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./lib/constants/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);\n___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst ROOT_WITH_PROTOCOL = `https://${___WEBPACK_IMPORTED_MODULE_0__.ROOT}`;\nconst TWITTER_LINK = \"\";\nconst GITHUB_LINK = \"\";\nconst DISCORD_LINK = \"\";\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uc3RhbnRzL2xpbmtzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBRWxCLE1BQU1DLGtCQUFrQixHQUFHLENBQUMsUUFBUSxFQUFFRCxtQ0FBSSxDQUFDLENBQUMsQ0FBQztBQUU3QyxNQUFNRSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLE1BQU1DLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdkIsTUFBTUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9jb25zdGFudHMvbGlua3MudHM/Y2JiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBST09UIH0gZnJvbSAnLic7XHJcblxyXG5leHBvcnQgY29uc3QgUk9PVF9XSVRIX1BST1RPQ09MID0gYGh0dHBzOi8vJHtST09UfWA7XHJcblxyXG5leHBvcnQgY29uc3QgVFdJVFRFUl9MSU5LID0gJyc7XHJcbmV4cG9ydCBjb25zdCBHSVRIVUJfTElOSyA9ICcnO1xyXG5leHBvcnQgY29uc3QgRElTQ09SRF9MSU5LID0gJyc7XHJcbiJdLCJuYW1lcyI6WyJST09UIiwiUk9PVF9XSVRIX1BST1RPQ09MIiwiVFdJVFRFUl9MSU5LIiwiR0lUSFVCX0xJTksiLCJESVNDT1JEX0xJTksiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/constants/links.ts\n");

/***/ }),

/***/ "./lib/core/config.ts":
/*!****************************!*\
  !*** ./lib/core/config.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"configSchema\": () => (/* binding */ configSchema)\n/* harmony export */ });\n/* harmony import */ var _enums_ChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/ChainId */ \"./lib/enums/ChainId.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"zod\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_1__]);\nzod__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst configSchema = zod__WEBPACK_IMPORTED_MODULE_1__.object({\n    defaultSiteRoot: zod__WEBPACK_IMPORTED_MODULE_1__.string(),\n    nextJsProduction: zod__WEBPACK_IMPORTED_MODULE_1__.boolean(),\n    defaultChainId: zod__WEBPACK_IMPORTED_MODULE_1__.number().optional().default(_enums_ChainId__WEBPACK_IMPORTED_MODULE_0__.ChainId.MAINNET),\n    wrappedNativeAssetAddress: zod__WEBPACK_IMPORTED_MODULE_1__.string(),\n    multicallAddress: zod__WEBPACK_IMPORTED_MODULE_1__.string(),\n    alchemyApiKey: zod__WEBPACK_IMPORTED_MODULE_1__.string(),\n    siweMessage: zod__WEBPACK_IMPORTED_MODULE_1__.string(),\n    darkModeDefault: zod__WEBPACK_IMPORTED_MODULE_1__.boolean(),\n    quayBaseUrl: zod__WEBPACK_IMPORTED_MODULE_1__.string(),\n    gooberContractAddress: zod__WEBPACK_IMPORTED_MODULE_1__.string(),\n    gooAddress: zod__WEBPACK_IMPORTED_MODULE_1__.string(),\n    artGobblersAddress: zod__WEBPACK_IMPORTED_MODULE_1__.string(),\n    artGobblersAverageMultiplier: zod__WEBPACK_IMPORTED_MODULE_1__.number().optional().default(73294),\n    subgraphUrl: zod__WEBPACK_IMPORTED_MODULE_1__.string()\n});\nconst config = configSchema.parse({\n    defaultSiteRoot: process.env.NEXT_PUBLIC_DEFAULT_SITE_ROOT || \"goober.xyz\",\n    nextJsProduction: process.env.NEXT_PUBLIC_VERCEL_ENV ? process.env.NEXT_PUBLIC_VERCEL_ENV === \"production\" : false,\n    defaultChainId: process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID ? parseInt(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID, 10) : undefined,\n    wrappedNativeAssetAddress: process.env.NEXT_PUBLIC_WRAPPED_NATIVE_ASSET_ADDRESS || \"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\",\n    multicallAddress: process.env.NEXT_PUBLIC_MULTICALL_ADDRESS || \"0xcA11bde05977b3631167028862bE2a173976CA11\",\n    alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_ETHEREUM_MAINNET_API_KEY || \"8RJeK9zauXMw3z8tOCiWBDOvG_gxth9j\",\n    siweMessage: process.env.NEXT_PUBLIC_SIWE_MESSAGE || \"Hi from Goober!\",\n    darkModeDefault: JSON.parse(process.env.NEXT_PUBLIC_DARK_MODE_DEFAULT || \"false\"),\n    quayBaseUrl: process.env.NEXT_PUBLIC_QUAY_URL || \"\",\n    artGobblersAddress: \"0x60bb1e2AA1c9ACAfB4d34F71585D7e959f387769\",\n    // TODO(Branch prod/non-prod)\n    gooberContractAddress: \"0x2275d4937b6bfd3c75823744d3efbf6c3a8de473\",\n    gooAddress: \"0x600000000a36F3cD48407e35eB7C5c910dc1f7a8\",\n    artGobblersAverageMultiplier: process.env.NEXT_PUBLIC_AVERAGE_MULT_BPS ? parseInt(process.env.NEXT_PUBLIC_AVERAGE_MULT_BPS, 10) : undefined,\n    subgraphUrl: \"https://api.thegraph.com/subgraphs/name/thal0x/goober-mainnet\"\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29yZS9jb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNsQjtBQUVsQixNQUFNRSxZQUFZLEdBQUdELHVDQUFRLENBQUM7SUFDcENHLGVBQWUsRUFBRUgsdUNBQVEsRUFBRTtJQUMzQkssZ0JBQWdCLEVBQUVMLHdDQUFTLEVBQUU7SUFFN0JPLGNBQWMsRUFBRVAsdUNBQVEsRUFBRSxDQUFDUyxRQUFRLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDWCwyREFBZSxDQUFDO0lBQzlEYSx5QkFBeUIsRUFBRVosdUNBQVEsRUFBRTtJQUNyQ2EsZ0JBQWdCLEVBQUViLHVDQUFRLEVBQUU7SUFDNUJjLGFBQWEsRUFBRWQsdUNBQVEsRUFBRTtJQUN6QmUsV0FBVyxFQUFFZix1Q0FBUSxFQUFFO0lBQ3ZCZ0IsZUFBZSxFQUFFaEIsd0NBQVMsRUFBRTtJQUU1QmlCLFdBQVcsRUFBRWpCLHVDQUFRLEVBQUU7SUFFdkJrQixxQkFBcUIsRUFBRWxCLHVDQUFRLEVBQUU7SUFDakNtQixVQUFVLEVBQUVuQix1Q0FBUSxFQUFFO0lBQ3RCb0Isa0JBQWtCLEVBQUVwQix1Q0FBUSxFQUFFO0lBRTlCcUIsNEJBQTRCLEVBQUVyQix1Q0FBUSxFQUFFLENBQUNTLFFBQVEsRUFBRSxDQUFDQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBRWxFWSxXQUFXLEVBQUV0Qix1Q0FBUSxFQUFFO0NBQ3ZCLENBQUMsQ0FBQztBQUVJLE1BQU11QixNQUFNLEdBQUd0QixZQUFZLENBQUN1QixLQUFLLENBQUM7SUFDeENyQixlQUFlLEVBQUVzQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsNkJBQTZCLElBQUksWUFBWTtJQUMxRXRCLGdCQUFnQixFQUFFb0IsT0FBTyxDQUFDQyxHQUFHLENBQUNFLHNCQUFzQixHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Usc0JBQXNCLEtBQUssWUFBWSxHQUFHLEtBQUs7SUFFbEhyQixjQUFjLEVBQUVrQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csNEJBQTRCLEdBQUdDLFFBQVEsQ0FBQ0wsT0FBTyxDQUFDQyxHQUFHLENBQUNHLDRCQUE0QixFQUFFLEVBQUUsQ0FBQyxHQUFHRSxTQUFTO0lBQzdIbkIseUJBQXlCLEVBQUVhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSx3Q0FBd0MsSUFBSSw0Q0FBNEM7SUFDL0huQixnQkFBZ0IsRUFBRVksT0FBTyxDQUFDQyxHQUFHLENBQUNPLDZCQUE2QixJQUFJLDRDQUE0QztJQUMzR25CLGFBQWEsRUFBRVcsT0FBTyxDQUFDQyxHQUFHLENBQUNRLDRDQUE0QyxJQUFJLGtDQUFrQztJQUM3R25CLFdBQVcsRUFBRVUsT0FBTyxDQUFDQyxHQUFHLENBQUNTLHdCQUF3QixJQUFJLGlCQUFpQjtJQUN0RW5CLGVBQWUsRUFBRW9CLElBQUksQ0FBQ1osS0FBSyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1csNkJBQTZCLElBQUksT0FBTyxDQUFDO0lBRWpGcEIsV0FBVyxFQUFFUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksb0JBQW9CLElBQUksRUFBRTtJQUVuRGxCLGtCQUFrQixFQUFFLDRDQUE0QztJQUNoRSw2QkFBNkI7SUFDN0JGLHFCQUFxQixFQUFFLDRDQUE0QztJQUNuRUMsVUFBVSxFQUFFLDRDQUE0QztJQUV4REUsNEJBQTRCLEVBQUVJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSw0QkFBNEIsR0FBR1QsUUFBUSxDQUFDTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2EsNEJBQTRCLEVBQUUsRUFBRSxDQUFDLEdBQUdSLFNBQVM7SUFFM0lULFdBQVcsRUFBRSwrREFBK0Q7Q0FDNUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2NvcmUvY29uZmlnLnRzPzYzOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhaW5JZCB9IGZyb20gJy4uL2VudW1zL0NoYWluSWQnO1xyXG5pbXBvcnQgKiBhcyB6IGZyb20gJ3pvZCc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnU2NoZW1hID0gei5vYmplY3Qoe1xyXG5cdGRlZmF1bHRTaXRlUm9vdDogei5zdHJpbmcoKSxcclxuXHRuZXh0SnNQcm9kdWN0aW9uOiB6LmJvb2xlYW4oKSxcclxuXHJcblx0ZGVmYXVsdENoYWluSWQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKS5kZWZhdWx0KENoYWluSWQuTUFJTk5FVCksXHJcblx0d3JhcHBlZE5hdGl2ZUFzc2V0QWRkcmVzczogei5zdHJpbmcoKSxcclxuXHRtdWx0aWNhbGxBZGRyZXNzOiB6LnN0cmluZygpLFxyXG5cdGFsY2hlbXlBcGlLZXk6IHouc3RyaW5nKCksXHJcblx0c2l3ZU1lc3NhZ2U6IHouc3RyaW5nKCksXHJcblx0ZGFya01vZGVEZWZhdWx0OiB6LmJvb2xlYW4oKSxcclxuXHJcblx0cXVheUJhc2VVcmw6IHouc3RyaW5nKCksXHJcblxyXG5cdGdvb2JlckNvbnRyYWN0QWRkcmVzczogei5zdHJpbmcoKSxcclxuXHRnb29BZGRyZXNzOiB6LnN0cmluZygpLFxyXG5cdGFydEdvYmJsZXJzQWRkcmVzczogei5zdHJpbmcoKSxcclxuXHJcblx0YXJ0R29iYmxlcnNBdmVyYWdlTXVsdGlwbGllcjogei5udW1iZXIoKS5vcHRpb25hbCgpLmRlZmF1bHQoNzMyOTQpLFxyXG5cclxuXHRzdWJncmFwaFVybDogei5zdHJpbmcoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSBjb25maWdTY2hlbWEucGFyc2Uoe1xyXG5cdGRlZmF1bHRTaXRlUm9vdDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVGQVVMVF9TSVRFX1JPT1QgfHwgJ2dvb2Jlci54eXonLFxyXG5cdG5leHRKc1Byb2R1Y3Rpb246IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1ZFUkNFTF9FTlYgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WRVJDRUxfRU5WID09PSAncHJvZHVjdGlvbicgOiBmYWxzZSxcclxuXHJcblx0ZGVmYXVsdENoYWluSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFRkFVTFRfQ0hBSU5fSUQgPyBwYXJzZUludChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERUZBVUxUX0NIQUlOX0lELCAxMCkgOiB1bmRlZmluZWQsXHJcblx0d3JhcHBlZE5hdGl2ZUFzc2V0QWRkcmVzczogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV1JBUFBFRF9OQVRJVkVfQVNTRVRfQUREUkVTUyB8fCAnMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyJyxcclxuXHRtdWx0aWNhbGxBZGRyZXNzOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NVUxUSUNBTExfQUREUkVTUyB8fCAnMHhjQTExYmRlMDU5NzdiMzYzMTE2NzAyODg2MmJFMmExNzM5NzZDQTExJyxcclxuXHRhbGNoZW15QXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BTENIRU1ZX0VUSEVSRVVNX01BSU5ORVRfQVBJX0tFWSB8fCAnOFJKZUs5emF1WE13M3o4dE9DaVdCRE92R19neHRoOWonLFxyXG5cdHNpd2VNZXNzYWdlOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVdFX01FU1NBR0UgfHwgJ0hpIGZyb20gR29vYmVyIScsXHJcblx0ZGFya01vZGVEZWZhdWx0OiBKU09OLnBhcnNlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RBUktfTU9ERV9ERUZBVUxUIHx8ICdmYWxzZScpIGFzIGJvb2xlYW4sXHJcblxyXG5cdHF1YXlCYXNlVXJsOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19RVUFZX1VSTCB8fCAnJyxcclxuXHJcblx0YXJ0R29iYmxlcnNBZGRyZXNzOiAnMHg2MGJiMWUyQUExYzlBQ0FmQjRkMzRGNzE1ODVEN2U5NTlmMzg3NzY5JyxcclxuXHQvLyBUT0RPKEJyYW5jaCBwcm9kL25vbi1wcm9kKVxyXG5cdGdvb2JlckNvbnRyYWN0QWRkcmVzczogJzB4MjI3NWQ0OTM3YjZiZmQzYzc1ODIzNzQ0ZDNlZmJmNmMzYThkZTQ3MycsXHJcblx0Z29vQWRkcmVzczogJzB4NjAwMDAwMDAwYTM2RjNjRDQ4NDA3ZTM1ZUI3QzVjOTEwZGMxZjdhOCcsXHJcblxyXG5cdGFydEdvYmJsZXJzQXZlcmFnZU11bHRpcGxpZXI6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FWRVJBR0VfTVVMVF9CUFMgPyBwYXJzZUludChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVkVSQUdFX01VTFRfQlBTLCAxMCkgOiB1bmRlZmluZWQsXHJcblxyXG5cdHN1YmdyYXBoVXJsOiAnaHR0cHM6Ly9hcGkudGhlZ3JhcGguY29tL3N1YmdyYXBocy9uYW1lL3RoYWwweC9nb29iZXItbWFpbm5ldCdcclxufSk7XHJcblxyXG5leHBvcnQgdHlwZSBDb25maWcgPSB6LmluZmVyPHR5cGVvZiBjb25maWdTY2hlbWE+O1xyXG4iXSwibmFtZXMiOlsiQ2hhaW5JZCIsInoiLCJjb25maWdTY2hlbWEiLCJvYmplY3QiLCJkZWZhdWx0U2l0ZVJvb3QiLCJzdHJpbmciLCJuZXh0SnNQcm9kdWN0aW9uIiwiYm9vbGVhbiIsImRlZmF1bHRDaGFpbklkIiwibnVtYmVyIiwib3B0aW9uYWwiLCJkZWZhdWx0IiwiTUFJTk5FVCIsIndyYXBwZWROYXRpdmVBc3NldEFkZHJlc3MiLCJtdWx0aWNhbGxBZGRyZXNzIiwiYWxjaGVteUFwaUtleSIsInNpd2VNZXNzYWdlIiwiZGFya01vZGVEZWZhdWx0IiwicXVheUJhc2VVcmwiLCJnb29iZXJDb250cmFjdEFkZHJlc3MiLCJnb29BZGRyZXNzIiwiYXJ0R29iYmxlcnNBZGRyZXNzIiwiYXJ0R29iYmxlcnNBdmVyYWdlTXVsdGlwbGllciIsInN1YmdyYXBoVXJsIiwiY29uZmlnIiwicGFyc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfREVGQVVMVF9TSVRFX1JPT1QiLCJORVhUX1BVQkxJQ19WRVJDRUxfRU5WIiwiTkVYVF9QVUJMSUNfREVGQVVMVF9DSEFJTl9JRCIsInBhcnNlSW50IiwidW5kZWZpbmVkIiwiTkVYVF9QVUJMSUNfV1JBUFBFRF9OQVRJVkVfQVNTRVRfQUREUkVTUyIsIk5FWFRfUFVCTElDX01VTFRJQ0FMTF9BRERSRVNTIiwiTkVYVF9QVUJMSUNfQUxDSEVNWV9FVEhFUkVVTV9NQUlOTkVUX0FQSV9LRVkiLCJORVhUX1BVQkxJQ19TSVdFX01FU1NBR0UiLCJKU09OIiwiTkVYVF9QVUJMSUNfREFSS19NT0RFX0RFRkFVTFQiLCJORVhUX1BVQkxJQ19RVUFZX1VSTCIsIk5FWFRfUFVCTElDX0FWRVJBR0VfTVVMVF9CUFMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/core/config.ts\n");

/***/ }),

/***/ "./lib/core/sitemap.ts":
/*!*****************************!*\
  !*** ./lib/core/sitemap.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateSitemap\": () => (/* binding */ generateSitemap)\n/* harmony export */ });\n/* harmony import */ var _constants_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/links */ \"./lib/constants/links.ts\");\n/* harmony import */ var nextjs_sitemap_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextjs-sitemap-generator */ \"nextjs-sitemap-generator\");\n/* harmony import */ var nextjs_sitemap_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_sitemap_generator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_constants_links__WEBPACK_IMPORTED_MODULE_0__]);\n_constants_links__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function generateSitemap(srcPath) {\n    const baseUrl = _constants_links__WEBPACK_IMPORTED_MODULE_0__.ROOT_WITH_PROTOCOL;\n    await nextjs_sitemap_generator__WEBPACK_IMPORTED_MODULE_1___default()({\n        baseUrl,\n        pagesDirectory: path__WEBPACK_IMPORTED_MODULE_2___default().join(srcPath, \"pages\"),\n        targetDirectory: path__WEBPACK_IMPORTED_MODULE_2___default().join(srcPath, \"public\"),\n        nextConfigPath: path__WEBPACK_IMPORTED_MODULE_2___default().join(srcPath, \"next.config.js\"),\n        ignoredPaths: [\n            \"api\"\n        ]\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29yZS9zaXRlbWFwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNBO0FBQ2hDO0FBRWpCLGVBQWVHLGVBQWUsQ0FBQ0MsT0FBZSxFQUFFO0lBQ3RELE1BQU1DLE9BQU8sR0FBR0wsZ0VBQWtCO0lBRWxDLE1BQU1DLCtEQUFnQixDQUFDO1FBQ3RCSSxPQUFPO1FBQ1BDLGNBQWMsRUFBRUosZ0RBQVMsQ0FBQ0UsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUMzQ0ksZUFBZSxFQUFFTixnREFBUyxDQUFDRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1FBQzdDSyxjQUFjLEVBQUVQLGdEQUFTLENBQUNFLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztRQUNwRE0sWUFBWSxFQUFFO1lBQUMsS0FBSztTQUFDO0tBQ3JCLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29yZS9zaXRlbWFwLnRzP2E4MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUk9PVF9XSVRIX1BST1RPQ09MIH0gZnJvbSAnLi4vY29uc3RhbnRzL2xpbmtzJztcclxuaW1wb3J0IHNpdGVtYXBHZW5lcmF0b3IgZnJvbSAnbmV4dGpzLXNpdGVtYXAtZ2VuZXJhdG9yJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVTaXRlbWFwKHNyY1BhdGg6IHN0cmluZykge1xyXG5cdGNvbnN0IGJhc2VVcmwgPSBST09UX1dJVEhfUFJPVE9DT0w7XHJcblxyXG5cdGF3YWl0IHNpdGVtYXBHZW5lcmF0b3Ioe1xyXG5cdFx0YmFzZVVybCxcclxuXHRcdHBhZ2VzRGlyZWN0b3J5OiBwYXRoLmpvaW4oc3JjUGF0aCwgJ3BhZ2VzJyksXHJcblx0XHR0YXJnZXREaXJlY3Rvcnk6IHBhdGguam9pbihzcmNQYXRoLCAncHVibGljJyksXHJcblx0XHRuZXh0Q29uZmlnUGF0aDogcGF0aC5qb2luKHNyY1BhdGgsICduZXh0LmNvbmZpZy5qcycpLFxyXG5cdFx0aWdub3JlZFBhdGhzOiBbJ2FwaSddXHJcblx0fSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJPT1RfV0lUSF9QUk9UT0NPTCIsInNpdGVtYXBHZW5lcmF0b3IiLCJwYXRoIiwiZ2VuZXJhdGVTaXRlbWFwIiwic3JjUGF0aCIsImJhc2VVcmwiLCJwYWdlc0RpcmVjdG9yeSIsImpvaW4iLCJ0YXJnZXREaXJlY3RvcnkiLCJuZXh0Q29uZmlnUGF0aCIsImlnbm9yZWRQYXRocyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/core/sitemap.ts\n");

/***/ }),

/***/ "./lib/enums/ChainId.ts":
/*!******************************!*\
  !*** ./lib/enums/ChainId.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChainId\": () => (/* binding */ ChainId)\n/* harmony export */ });\nvar ChainId;\n(function(ChainId) {\n    ChainId[ChainId[\"MAINNET\"] = 1] = \"MAINNET\";\n})(ChainId || (ChainId = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZW51bXMvQ2hhaW5JZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sV0FFTjtVQUZXQSxPQUFPO0lBQVBBLE9BQU8sQ0FBUEEsT0FBTyxDQUNsQkMsU0FBTyxJQUFHLENBQUMsSUFBWEEsU0FBTztHQURJRCxPQUFPLEtBQVBBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZW51bXMvQ2hhaW5JZC50cz8zNmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIENoYWluSWQge1xyXG5cdE1BSU5ORVQgPSAxXHJcbn1cclxuIl0sIm5hbWVzIjpbIkNoYWluSWQiLCJNQUlOTkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/enums/ChainId.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_core_sitemap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/core/sitemap */ \"./lib/core/sitemap.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_core_sitemap__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_core_sitemap__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* eslint-disable @next/next/no-img-element */ \n\n\n\n\nconst IndexPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Warlock\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pro 2\\\\Documents\\\\GitHub\\\\nextjs-hello-world\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pro 2\\\\Documents\\\\GitHub\\\\nextjs-hello-world\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto w-2/3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"picture\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"warlock-full.png\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pro 2\\\\Documents\\\\GitHub\\\\nextjs-hello-world\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pro 2\\\\Documents\\\\GitHub\\\\nextjs-hello-world\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pro 2\\\\Documents\\\\GitHub\\\\nextjs-hello-world\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pro 2\\\\Documents\\\\GitHub\\\\nextjs-hello-world\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\nconst getStaticProps = async ()=>{\n    const directory = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"src\");\n    await (0,_lib_core_sitemap__WEBPACK_IMPORTED_MODULE_1__.generateSitemap)(directory);\n    return {\n        props: {}\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNEMsR0FDNUM7QUFBc0Q7QUFHekI7QUFDTDtBQUNFO0FBRTFCLE1BQU1JLFNBQVMsR0FBcUIsSUFBTTtJQUN6QyxxQkFDQzs7MEJBQ0MsOERBQUNILGtEQUFJOzBCQUNKLDRFQUFDSSxPQUFLOzhCQUFDLFNBQU87Ozs7OzZCQUFROzs7Ozt5QkFDaEI7MEJBQ1AsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxTQUFTOzBCQUN2Qiw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGVBQWU7OEJBQzdCLDRFQUFDQyxTQUFPO2tDQUNQLDRFQUFDQyxLQUFHOzRCQUFDQyxHQUFHLEVBQUMsa0JBQWtCOzRCQUFDQyxHQUFHLEVBQUMsRUFBRTs7Ozs7cUNBQUc7Ozs7O2lDQUM1Qjs7Ozs7NkJBQ0w7Ozs7O3lCQUNEOztvQkFDSixDQUNGO0FBQ0gsQ0FBQztBQUVNLE1BQU1DLGNBQWMsR0FBbUIsVUFBWTtJQUN6RCxNQUFNQyxTQUFTLEdBQUdYLGdEQUFTLENBQUNhLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDO0lBRWpELE1BQU1oQixrRUFBZSxDQUFDYSxTQUFTLENBQUMsQ0FBQztJQUVqQyxPQUFPO1FBQUVJLEtBQUssRUFBRSxFQUFFO0tBQUUsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRixpRUFBZWIsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xuaW1wb3J0IHsgZ2VuZXJhdGVTaXRlbWFwIH0gZnJvbSAnLi4vbGliL2NvcmUvc2l0ZW1hcCc7XG5pbXBvcnQgeyBFeHRlbmRlZE5leHRQYWdlIH0gZnJvbSAnLi4vbGliL3R5cGVzL0V4dGVuZGVkTmV4dFBhZ2UnO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEluZGV4UGFnZTogRXh0ZW5kZWROZXh0UGFnZSA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5XYXJsb2NrPC90aXRsZT5cblx0XHRcdDwvSGVhZD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdy0yLzNcIj5cblx0XHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwid2FybG9jay1mdWxsLnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgZGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMnKTtcblxuXHRhd2FpdCBnZW5lcmF0ZVNpdGVtYXAoZGlyZWN0b3J5KTtcblxuXHRyZXR1cm4geyBwcm9wczoge30gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJuYW1lcyI6WyJnZW5lcmF0ZVNpdGVtYXAiLCJIZWFkIiwicGF0aCIsIlJlYWN0IiwiSW5kZXhQYWdlIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwaWN0dXJlIiwiaW1nIiwic3JjIiwiYWx0IiwiZ2V0U3RhdGljUHJvcHMiLCJkaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "nextjs-sitemap-generator":
/*!*******************************************!*\
  !*** external "nextjs-sitemap-generator" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("nextjs-sitemap-generator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();