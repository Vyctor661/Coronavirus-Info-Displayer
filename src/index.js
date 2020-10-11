var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var button = document.getElementById("button");
var showError = function (data) {
    var content = document.getElementById("content");
    content.innerText = data.error.message;
};
// This is here so we get syntax highlighting from the lit-html extension
var html = function (s) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        data[_i - 1] = arguments[_i];
    }
    return s.reduce(function (acc, curr, index) { return "" + acc + data[index - 1] + curr; }, "");
};
var calculatePercentage = function (data, key) {
    return (data[key].value / data.confirmed.value * 100).toFixed(2);
};
var generateTable = function (data, globalData, country) {
    var deathPercentage = {
        local: calculatePercentage(data, "deaths"),
        global: calculatePercentage(globalData, "deaths")
    };
    var recoveryPercentage = {
        local: calculatePercentage(data, "recovered"),
        global: calculatePercentage(globalData, "recovered")
    };
    return html(__makeTemplateObject(["\n        <table>\n            <tr>\n                <th>Data</th>\n                <th>", "</th>\n                <th>Global</th>\n            </tr>\n            <tr>\n                <td>Confirmed Cases</td>\n                <td>", "</td>\n                <td>", "</td>\n            </tr>\n            <tr>\n                <td>Confirmed Recoveries</td>\n                <td>", "</td>\n                <td>", "</td>\n            </tr>\n            <tr>\n                <td>Confirmed Deaths</td>\n                <td>", "</td>\n                <td>", "</td>\n            </tr>\n            <tr>\n                <td>Death Percentage</td>\n                <td>", "%</td>\n                <td>", "%</td>\n            </tr>\n            <tr>\n                <td>Recovery Percentage</td>\n                <td>", "%</td>\n                <td>", "%</td>\n            </tr>\n        </table>"], ["\n        <table>\n            <tr>\n                <th>Data</th>\n                <th>", "</th>\n                <th>Global</th>\n            </tr>\n            <tr>\n                <td>Confirmed Cases</td>\n                <td>", "</td>\n                <td>", "</td>\n            </tr>\n            <tr>\n                <td>Confirmed Recoveries</td>\n                <td>", "</td>\n                <td>", "</td>\n            </tr>\n            <tr>\n                <td>Confirmed Deaths</td>\n                <td>", "</td>\n                <td>", "</td>\n            </tr>\n            <tr>\n                <td>Death Percentage</td>\n                <td>", "%</td>\n                <td>", "%</td>\n            </tr>\n            <tr>\n                <td>Recovery Percentage</td>\n                <td>", "%</td>\n                <td>", "%</td>\n            </tr>\n        </table>"]), country, data.confirmed.value, globalData.confirmed.value, data.recovered.value, globalData.recovered.value, data.deaths.value, globalData.deaths.value, deathPercentage.local, deathPercentage.global, recoveryPercentage.local, recoveryPercentage.global);
};
var getData = function (country) { return __awaiter(_this, void 0, void 0, function () {
    var apiData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://covid19.mathdro.id/api/countries/" + country)];
            case 1:
                apiData = _a.sent();
                return [2 /*return*/, apiData.json()];
        }
    });
}); };
var getGlobalData = function () { return __awaiter(_this, void 0, void 0, function () {
    var apiData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://covid19.mathdro.id/api")];
            case 1:
                apiData = _a.sent();
                return [2 /*return*/, apiData.json()];
        }
    });
}); };
var showData = function () { return __awaiter(_this, void 0, void 0, function () {
    var country, data, content, _a, _b, _c, error_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 3, , 4]);
                country = (document.getElementById("input")).value;
                return [4 /*yield*/, getData(country)];
            case 1:
                data = _d.sent();
                if (data.error) {
                    return [2 /*return*/, showError(data)];
                }
                content = (document.getElementById("content"));
                _a = content;
                _b = generateTable;
                _c = [data];
                return [4 /*yield*/, getGlobalData()];
            case 2:
                _a.innerHTML = _b.apply(void 0, _c.concat([_d.sent(),
                    country]));
                return [3 /*break*/, 4];
            case 3:
                error_1 = _d.sent();
                console.log(error_1.message || error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
showData();
button.addEventListener("click", showData);
