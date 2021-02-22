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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { User } from '../../icons/User';
import * as Style from './style';
export default function LoginButton(_a) {
    var label = _a.label, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? "#f0f" : _b, _c = _a.textColor, textColor = _c === void 0 ? "#eee" : _c;
    return (_jsxs(Style.Login, __assign({ backgroundColor: backgroundColor, textColor: textColor }, { children: [label, " ", _jsx(User, { width: 400 }, void 0)] }), void 0));
}
//# sourceMappingURL=index.js.map