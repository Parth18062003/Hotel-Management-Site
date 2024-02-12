"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cookie";
exports.ids = ["vendor-chunks/cookie"];
exports.modules = {

/***/ "(rsc)/./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/*!\n * cookie\n * Copyright(c) 2012-2014 Roman Shtylman\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */ \n/**\n * Module exports.\n * @public\n */ exports.parse = parse;\nexports.serialize = serialize;\n/**\n * Module variables.\n * @private\n */ var __toString = Object.prototype.toString;\n/**\n * RegExp to match field-content in RFC 7230 sec 3.2\n *\n * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]\n * field-vchar   = VCHAR / obs-text\n * obs-text      = %x80-FF\n */ var fieldContentRegExp = /^[\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+$/;\n/**\n * Parse a cookie header.\n *\n * Parse the given cookie header string into an object\n * The object has the various cookies as keys(names) => values\n *\n * @param {string} str\n * @param {object} [options]\n * @return {object}\n * @public\n */ function parse(str, options) {\n    if (typeof str !== \"string\") {\n        throw new TypeError(\"argument str must be a string\");\n    }\n    var obj = {};\n    var opt = options || {};\n    var dec = opt.decode || decode;\n    var index = 0;\n    while(index < str.length){\n        var eqIdx = str.indexOf(\"=\", index);\n        // no more cookie pairs\n        if (eqIdx === -1) {\n            break;\n        }\n        var endIdx = str.indexOf(\";\", index);\n        if (endIdx === -1) {\n            endIdx = str.length;\n        } else if (endIdx < eqIdx) {\n            // backtrack on prior semicolon\n            index = str.lastIndexOf(\";\", eqIdx - 1) + 1;\n            continue;\n        }\n        var key = str.slice(index, eqIdx).trim();\n        // only assign once\n        if (undefined === obj[key]) {\n            var val = str.slice(eqIdx + 1, endIdx).trim();\n            // quoted values\n            if (val.charCodeAt(0) === 0x22) {\n                val = val.slice(1, -1);\n            }\n            obj[key] = tryDecode(val, dec);\n        }\n        index = endIdx + 1;\n    }\n    return obj;\n}\n/**\n * Serialize data into a cookie header.\n *\n * Serialize the a name value pair into a cookie string suitable for\n * http headers. An optional options object specified cookie parameters.\n *\n * serialize('foo', 'bar', { httpOnly: true })\n *   => \"foo=bar; httpOnly\"\n *\n * @param {string} name\n * @param {string} val\n * @param {object} [options]\n * @return {string}\n * @public\n */ function serialize(name, val, options) {\n    var opt = options || {};\n    var enc = opt.encode || encode;\n    if (typeof enc !== \"function\") {\n        throw new TypeError(\"option encode is invalid\");\n    }\n    if (!fieldContentRegExp.test(name)) {\n        throw new TypeError(\"argument name is invalid\");\n    }\n    var value = enc(val);\n    if (value && !fieldContentRegExp.test(value)) {\n        throw new TypeError(\"argument val is invalid\");\n    }\n    var str = name + \"=\" + value;\n    if (null != opt.maxAge) {\n        var maxAge = opt.maxAge - 0;\n        if (isNaN(maxAge) || !isFinite(maxAge)) {\n            throw new TypeError(\"option maxAge is invalid\");\n        }\n        str += \"; Max-Age=\" + Math.floor(maxAge);\n    }\n    if (opt.domain) {\n        if (!fieldContentRegExp.test(opt.domain)) {\n            throw new TypeError(\"option domain is invalid\");\n        }\n        str += \"; Domain=\" + opt.domain;\n    }\n    if (opt.path) {\n        if (!fieldContentRegExp.test(opt.path)) {\n            throw new TypeError(\"option path is invalid\");\n        }\n        str += \"; Path=\" + opt.path;\n    }\n    if (opt.expires) {\n        var expires = opt.expires;\n        if (!isDate(expires) || isNaN(expires.valueOf())) {\n            throw new TypeError(\"option expires is invalid\");\n        }\n        str += \"; Expires=\" + expires.toUTCString();\n    }\n    if (opt.httpOnly) {\n        str += \"; HttpOnly\";\n    }\n    if (opt.secure) {\n        str += \"; Secure\";\n    }\n    if (opt.priority) {\n        var priority = typeof opt.priority === \"string\" ? opt.priority.toLowerCase() : opt.priority;\n        switch(priority){\n            case \"low\":\n                str += \"; Priority=Low\";\n                break;\n            case \"medium\":\n                str += \"; Priority=Medium\";\n                break;\n            case \"high\":\n                str += \"; Priority=High\";\n                break;\n            default:\n                throw new TypeError(\"option priority is invalid\");\n        }\n    }\n    if (opt.sameSite) {\n        var sameSite = typeof opt.sameSite === \"string\" ? opt.sameSite.toLowerCase() : opt.sameSite;\n        switch(sameSite){\n            case true:\n                str += \"; SameSite=Strict\";\n                break;\n            case \"lax\":\n                str += \"; SameSite=Lax\";\n                break;\n            case \"strict\":\n                str += \"; SameSite=Strict\";\n                break;\n            case \"none\":\n                str += \"; SameSite=None\";\n                break;\n            default:\n                throw new TypeError(\"option sameSite is invalid\");\n        }\n    }\n    return str;\n}\n/**\n * URL-decode string value. Optimized to skip native call when no %.\n *\n * @param {string} str\n * @returns {string}\n */ function decode(str) {\n    return str.indexOf(\"%\") !== -1 ? decodeURIComponent(str) : str;\n}\n/**\n * URL-encode value.\n *\n * @param {string} str\n * @returns {string}\n */ function encode(val) {\n    return encodeURIComponent(val);\n}\n/**\n * Determine if value is a Date.\n *\n * @param {*} val\n * @private\n */ function isDate(val) {\n    return __toString.call(val) === \"[object Date]\" || val instanceof Date;\n}\n/**\n * Try decoding a string using a decoding function.\n *\n * @param {string} str\n * @param {function} decode\n * @private\n */ function tryDecode(str, decode) {\n    try {\n        return decode(str);\n    } catch (e) {\n        return str;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7Z0JBQ0hBLE9BQU87Z0JBQ1A7WUFDRjtnQkFDRSxNQUFNLElBQUlFLFVBQVU7UUFDeEI7SUFDRjtJQUVBLE9BQU9GO0FBQ1Q7QUFFQTs7Ozs7Q0FLQyxHQUVELFNBQVNNLE9BQVFOLEdBQUc7SUFDbEIsT0FBT0EsSUFBSVUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUN6QitCLG1CQUFtQnpDLE9BQ25CQTtBQUNOO0FBRUE7Ozs7O0NBS0MsR0FFRCxTQUFTc0IsT0FBUUwsR0FBRztJQUNsQixPQUFPeUIsbUJBQW1CekI7QUFDNUI7QUFFQTs7Ozs7Q0FLQyxHQUVELFNBQVNnQixPQUFRaEIsR0FBRztJQUNsQixPQUFPdEIsV0FBV2dELElBQUksQ0FBQzFCLFNBQVMsbUJBQzlCQSxlQUFlMkI7QUFDbkI7QUFFQTs7Ozs7O0NBTUMsR0FFRCxTQUFTekIsVUFBVW5CLEdBQUcsRUFBRU0sTUFBTTtJQUM1QixJQUFJO1FBQ0YsT0FBT0EsT0FBT047SUFDaEIsRUFBRSxPQUFPNkMsR0FBRztRQUNWLE9BQU83QztJQUNUO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3RlbF9tYW5hZ2VtZW50Ly4vbm9kZV9tb2R1bGVzL2Nvb2tpZS9pbmRleC5qcz81ZDMyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogY29va2llXG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IFJvbWFuIFNodHlsbWFuXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmV4cG9ydHMuc2VyaWFsaXplID0gc2VyaWFsaXplO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBfX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCBmaWVsZC1jb250ZW50IGluIFJGQyA3MjMwIHNlYyAzLjJcbiAqXG4gKiBmaWVsZC1jb250ZW50ID0gZmllbGQtdmNoYXIgWyAxKiggU1AgLyBIVEFCICkgZmllbGQtdmNoYXIgXVxuICogZmllbGQtdmNoYXIgICA9IFZDSEFSIC8gb2JzLXRleHRcbiAqIG9icy10ZXh0ICAgICAgPSAleDgwLUZGXG4gKi9cblxudmFyIGZpZWxkQ29udGVudFJlZ0V4cCA9IC9eW1xcdTAwMDlcXHUwMDIwLVxcdTAwN2VcXHUwMDgwLVxcdTAwZmZdKyQvO1xuXG4vKipcbiAqIFBhcnNlIGEgY29va2llIGhlYWRlci5cbiAqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gY29va2llIGhlYWRlciBzdHJpbmcgaW50byBhbiBvYmplY3RcbiAqIFRoZSBvYmplY3QgaGFzIHRoZSB2YXJpb3VzIGNvb2tpZXMgYXMga2V5cyhuYW1lcykgPT4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7b2JqZWN0fVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzdHIgbXVzdCBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgdmFyIG9iaiA9IHt9XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgZGVjID0gb3B0LmRlY29kZSB8fCBkZWNvZGU7XG5cbiAgdmFyIGluZGV4ID0gMFxuICB3aGlsZSAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgdmFyIGVxSWR4ID0gc3RyLmluZGV4T2YoJz0nLCBpbmRleClcblxuICAgIC8vIG5vIG1vcmUgY29va2llIHBhaXJzXG4gICAgaWYgKGVxSWR4ID09PSAtMSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB2YXIgZW5kSWR4ID0gc3RyLmluZGV4T2YoJzsnLCBpbmRleClcblxuICAgIGlmIChlbmRJZHggPT09IC0xKSB7XG4gICAgICBlbmRJZHggPSBzdHIubGVuZ3RoXG4gICAgfSBlbHNlIGlmIChlbmRJZHggPCBlcUlkeCkge1xuICAgICAgLy8gYmFja3RyYWNrIG9uIHByaW9yIHNlbWljb2xvblxuICAgICAgaW5kZXggPSBzdHIubGFzdEluZGV4T2YoJzsnLCBlcUlkeCAtIDEpICsgMVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB2YXIga2V5ID0gc3RyLnNsaWNlKGluZGV4LCBlcUlkeCkudHJpbSgpXG5cbiAgICAvLyBvbmx5IGFzc2lnbiBvbmNlXG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gb2JqW2tleV0pIHtcbiAgICAgIHZhciB2YWwgPSBzdHIuc2xpY2UoZXFJZHggKyAxLCBlbmRJZHgpLnRyaW0oKVxuXG4gICAgICAvLyBxdW90ZWQgdmFsdWVzXG4gICAgICBpZiAodmFsLmNoYXJDb2RlQXQoMCkgPT09IDB4MjIpIHtcbiAgICAgICAgdmFsID0gdmFsLnNsaWNlKDEsIC0xKVxuICAgICAgfVxuXG4gICAgICBvYmpba2V5XSA9IHRyeURlY29kZSh2YWwsIGRlYyk7XG4gICAgfVxuXG4gICAgaW5kZXggPSBlbmRJZHggKyAxXG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSBkYXRhIGludG8gYSBjb29raWUgaGVhZGVyLlxuICpcbiAqIFNlcmlhbGl6ZSB0aGUgYSBuYW1lIHZhbHVlIHBhaXIgaW50byBhIGNvb2tpZSBzdHJpbmcgc3VpdGFibGUgZm9yXG4gKiBodHRwIGhlYWRlcnMuIEFuIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHNwZWNpZmllZCBjb29raWUgcGFyYW1ldGVycy5cbiAqXG4gKiBzZXJpYWxpemUoJ2ZvbycsICdiYXInLCB7IGh0dHBPbmx5OiB0cnVlIH0pXG4gKiAgID0+IFwiZm9vPWJhcjsgaHR0cE9ubHlcIlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc2VyaWFsaXplKG5hbWUsIHZhbCwgb3B0aW9ucykge1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGVuYyA9IG9wdC5lbmNvZGUgfHwgZW5jb2RlO1xuXG4gIGlmICh0eXBlb2YgZW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGVuY29kZSBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgbmFtZSBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICB2YXIgdmFsdWUgPSBlbmModmFsKTtcblxuICBpZiAodmFsdWUgJiYgIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHZhbCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICB2YXIgc3RyID0gbmFtZSArICc9JyArIHZhbHVlO1xuXG4gIGlmIChudWxsICE9IG9wdC5tYXhBZ2UpIHtcbiAgICB2YXIgbWF4QWdlID0gb3B0Lm1heEFnZSAtIDA7XG5cbiAgICBpZiAoaXNOYU4obWF4QWdlKSB8fCAhaXNGaW5pdGUobWF4QWdlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIG1heEFnZSBpcyBpbnZhbGlkJylcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgTWF4LUFnZT0nICsgTWF0aC5mbG9vcihtYXhBZ2UpO1xuICB9XG5cbiAgaWYgKG9wdC5kb21haW4pIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5kb21haW4pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZG9tYWluIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgRG9tYWluPScgKyBvcHQuZG9tYWluO1xuICB9XG5cbiAgaWYgKG9wdC5wYXRoKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQucGF0aCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBwYXRoIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgUGF0aD0nICsgb3B0LnBhdGg7XG4gIH1cblxuICBpZiAob3B0LmV4cGlyZXMpIHtcbiAgICB2YXIgZXhwaXJlcyA9IG9wdC5leHBpcmVzXG5cbiAgICBpZiAoIWlzRGF0ZShleHBpcmVzKSB8fCBpc05hTihleHBpcmVzLnZhbHVlT2YoKSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBleHBpcmVzIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgRXhwaXJlcz0nICsgZXhwaXJlcy50b1VUQ1N0cmluZygpXG4gIH1cblxuICBpZiAob3B0Lmh0dHBPbmx5KSB7XG4gICAgc3RyICs9ICc7IEh0dHBPbmx5JztcbiAgfVxuXG4gIGlmIChvcHQuc2VjdXJlKSB7XG4gICAgc3RyICs9ICc7IFNlY3VyZSc7XG4gIH1cblxuICBpZiAob3B0LnByaW9yaXR5KSB7XG4gICAgdmFyIHByaW9yaXR5ID0gdHlwZW9mIG9wdC5wcmlvcml0eSA9PT0gJ3N0cmluZydcbiAgICAgID8gb3B0LnByaW9yaXR5LnRvTG93ZXJDYXNlKClcbiAgICAgIDogb3B0LnByaW9yaXR5XG5cbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBzdHIgKz0gJzsgUHJpb3JpdHk9TG93J1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgc3RyICs9ICc7IFByaW9yaXR5PU1lZGl1bSdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICBzdHIgKz0gJzsgUHJpb3JpdHk9SGlnaCdcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBwcmlvcml0eSBpcyBpbnZhbGlkJylcbiAgICB9XG4gIH1cblxuICBpZiAob3B0LnNhbWVTaXRlKSB7XG4gICAgdmFyIHNhbWVTaXRlID0gdHlwZW9mIG9wdC5zYW1lU2l0ZSA9PT0gJ3N0cmluZydcbiAgICAgID8gb3B0LnNhbWVTaXRlLnRvTG93ZXJDYXNlKCkgOiBvcHQuc2FtZVNpdGU7XG5cbiAgICBzd2l0Y2ggKHNhbWVTaXRlKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xheCc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1MYXgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmljdCc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9Tm9uZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHNhbWVTaXRlIGlzIGludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIFVSTC1kZWNvZGUgc3RyaW5nIHZhbHVlLiBPcHRpbWl6ZWQgdG8gc2tpcCBuYXRpdmUgY2FsbCB3aGVuIG5vICUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBkZWNvZGUgKHN0cikge1xuICByZXR1cm4gc3RyLmluZGV4T2YoJyUnKSAhPT0gLTFcbiAgICA/IGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgOiBzdHJcbn1cblxuLyoqXG4gKiBVUkwtZW5jb2RlIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZW5jb2RlICh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHZhbHVlIGlzIGEgRGF0ZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0RhdGUgKHZhbCkge1xuICByZXR1cm4gX190b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJyB8fFxuICAgIHZhbCBpbnN0YW5jZW9mIERhdGVcbn1cblxuLyoqXG4gKiBUcnkgZGVjb2RpbmcgYSBzdHJpbmcgdXNpbmcgYSBkZWNvZGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkZWNvZGVcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHJ5RGVjb2RlKHN0ciwgZGVjb2RlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJwYXJzZSIsInNlcmlhbGl6ZSIsIl9fdG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImZpZWxkQ29udGVudFJlZ0V4cCIsInN0ciIsIm9wdGlvbnMiLCJUeXBlRXJyb3IiLCJvYmoiLCJvcHQiLCJkZWMiLCJkZWNvZGUiLCJpbmRleCIsImxlbmd0aCIsImVxSWR4IiwiaW5kZXhPZiIsImVuZElkeCIsImxhc3RJbmRleE9mIiwia2V5Iiwic2xpY2UiLCJ0cmltIiwidW5kZWZpbmVkIiwidmFsIiwiY2hhckNvZGVBdCIsInRyeURlY29kZSIsIm5hbWUiLCJlbmMiLCJlbmNvZGUiLCJ0ZXN0IiwidmFsdWUiLCJtYXhBZ2UiLCJpc05hTiIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiZG9tYWluIiwicGF0aCIsImV4cGlyZXMiLCJpc0RhdGUiLCJ2YWx1ZU9mIiwidG9VVENTdHJpbmciLCJodHRwT25seSIsInNlY3VyZSIsInByaW9yaXR5IiwidG9Mb3dlckNhc2UiLCJzYW1lU2l0ZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImNhbGwiLCJEYXRlIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/cookie/index.js\n");

/***/ })

};
;