var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import * as Style from './style';
export default function HelloWorld(_a) {
    var _b = _a.text, text = _b === void 0 ? 'Hello World' : _b, _c = _a.textColor, textColor = _c === void 0 ? '#00b892' : _c;
    return (_jsx(Style.Heading, __assign({ textColor: textColor }, { children: text }), void 0));
}
//# sourceMappingURL=index.js.map