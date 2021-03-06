import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {fixtureQueryAll, fixtureQueryNative} from "../testing-helpers";

describe('AppComponentExpected', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('Render Tests', () => {
    const numLinks = 3;

    it('should render page title', () => {
      const title = fixtureQueryNative(fixture, '.page-title');
      expect(title).not.toBeNull();
    });

    it('should render page subtitle', () => {
      const subtitle = fixtureQueryNative(fixture, '.page-subtitle');
      expect(subtitle).not.toBeNull();
    });

    it(`should render ${numLinks} links`, () => {
      const links = fixtureQueryAll(fixture, '.quick-link');
      expect(links.length).toEqual(numLinks);
    });
  });
});

