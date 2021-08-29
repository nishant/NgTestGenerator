"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/router/testing");
const app_component_1 = require("./app.component");
const testing_helpers_1 = require("../testing-helpers");
describe('AppComponentExpected', () => {
    let fixture;
    let component;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testing_1.TestBed.configureTestingModule({
            imports: [
                testing_2.RouterTestingModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        component = fixture.componentInstance;
    }));
    it('should create the app', () => {
        expect(component).toBeTruthy();
    });
    describe('Render Tests', () => {
        const numLinks = 3;
        it('should render page title', () => {
            const title = (0, testing_helpers_1.fixtureQueryNative)(fixture, '.page-title');
            expect(title).not.toBeNull();
        });
        it('should render page subtitle', () => {
            const subtitle = (0, testing_helpers_1.fixtureQueryNative)(fixture, '.page-subtitle');
            expect(subtitle).not.toBeNull();
        });
        it(`should render ${numLinks} links`, () => {
            const links = (0, testing_helpers_1.fixtureQueryAll)(fixture, '.quick-link');
            expect(links.length).toEqual(numLinks);
        });
    });
});
//# sourceMappingURL=app.component.expected.spec.js.map