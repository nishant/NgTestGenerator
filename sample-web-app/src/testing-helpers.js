"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtureQueryNative = exports.fixtureQueryAll = exports.stubComponent = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
// stub an external component by selector
const stubComponent = (selector, inputs = [], template = '<ng-content></ng-content>') => {
    return (0, core_1.Component)({ selector, inputs, template })(class {
    });
};
exports.stubComponent = stubComponent;
// returns an array of debug elements from a component fixture based on a selector
const fixtureQueryAll = (fixture, selector) => {
    return fixture.debugElement.queryAll(platform_browser_1.By.css(selector));
};
exports.fixtureQueryAll = fixtureQueryAll;
// returns the native html element from a component fixture based on a selector
const fixtureQueryNative = (fixture, selector) => {
    const debugElement = fixture.debugElement.query(platform_browser_1.By.css(selector));
    expect(debugElement).not.toBeNull(`!! null value returned for selector "${selector}" !!`);
    return debugElement.nativeElement;
};
exports.fixtureQueryNative = fixtureQueryNative;
//# sourceMappingURL=testing-helpers.js.map