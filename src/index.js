// Someone kill me cuz this is the worst way of making a website with ts
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
window.onload = function () {
    var button = (document.getElementById("button"));
    var showError = function (data) {
        var content = (document.getElementById("content"));
        content.innerText = data.error.message;
    };
    var generateTable = function (data, globalData, country) {
        return "\n        <table>\n            <tr>\n                <th>Data</th>\n                <th>" + country + "</th>\n                <th>Global</th>\n            </tr>\n            <tr>\n                <td>Confirmed Cases</td>\n                <td>" + data.confirmed.value + "</td>\n                <td>" + globalData.confirmed.value + "</td>\n            </tr>\n            <tr>\n                <td>Confirmed Recoveries</td>\n                <td>" + data.recovered.value + "</td>\n                <td>" + globalData.recovered.value + "</td>\n            </tr>\n            <tr>\n                <td>Confirmed Deaths</td>\n                <td>" + data.deaths.value + "</td>\n                <td>" + globalData.deaths.value + "</td>\n            </tr>\n            <tr>\n                <td>Death Percentage</td>\n                <td>" + ((data.deaths.value / data.confirmed.value) *
            100).toFixed(2) + "%</td>\n                <td>" + ((globalData.deaths.value / globalData.confirmed.value) *
            100).toFixed(2) + "%</td>\n            </tr>\n            <tr>\n                <td>Recovery Percentage</td>\n                <td>" + ((data.recovered.value / data.confirmed.value) *
            100).toFixed(2) + "%</td>\n                <td>" + ((globalData.recovered.value / globalData.confirmed.value) *
            100).toFixed(2) + "%</td>\n            </tr>\n        </table>";
    };
    var getData = function (country) { return __awaiter(_this, void 0, void 0, function () {
        var apiData, apiJsonData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://covid19.mathdro.id/api/countries/" + country)];
                case 1:
                    apiData = _a.sent();
                    return [4 /*yield*/, apiData.json()];
                case 2:
                    apiJsonData = _a.sent();
                    return [2 /*return*/, apiJsonData];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getGlobalData = function () { return __awaiter(_this, void 0, void 0, function () {
        var apiData, apiJsonData, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://covid19.mathdro.id/api")];
                case 1:
                    apiData = _a.sent();
                    return [4 /*yield*/, apiData.json()];
                case 2:
                    apiJsonData = _a.sent();
                    return [2 /*return*/, apiJsonData];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var showData = function () { return __awaiter(_this, void 0, void 0, function () {
        var country, data, content, _a, _b, _c, error_3;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, , 6]);
                    country = (document.getElementById("input")).value;
                    return [4 /*yield*/, getData(country)];
                case 1:
                    data = _d.sent();
                    if (!data.error) return [3 /*break*/, 2];
                    showError(data);
                    return [3 /*break*/, 4];
                case 2:
                    content = (document.getElementById("content"));
                    _a = content;
                    _b = generateTable;
                    _c = [data];
                    return [4 /*yield*/, getGlobalData()];
                case 3:
                    _a.innerHTML = _b.apply(void 0, _c.concat([_d.sent(),
                        country]));
                    _d.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_3 = _d.sent();
                    console.log(error_3);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    showData();
    button.addEventListener("click", function () { return showData(); });
};
