import {Component, DebugElement} from '@angular/core';
import {ComponentFixture} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

// stub an external component by selector
export const stubComponent = (
  selector: string,
  inputs: string[] = [],
  template = '<ng-content></ng-content>'
): typeof Component => {
  return Component({selector, inputs, template})(class {}) as any;
};

// returns an array of debug elements from a component fixture based on a selector
export const fixtureQueryAll = (fixture: ComponentFixture<any>, selector: string): DebugElement[] => {
  return fixture.debugElement.queryAll(By.css(selector));
};

// returns the native html element from a component fixture based on a selector
export const fixtureQueryNative = (fixture: ComponentFixture<any>, selector: string): DebugElement => {
  const debugElement: DebugElement = fixture.debugElement.query(By.css(selector));
  expect(debugElement).not.toBeNull(`!! null value returned for selector "${selector}" !!`);
  return debugElement.nativeElement;
};

