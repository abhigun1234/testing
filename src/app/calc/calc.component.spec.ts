import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  it('Validate are is greater then 100',()=>{

    let c1=new CalcComponent()
    const area=c1.calculator(2,3)
    expect(area).toBeGreaterThan(100)
  })
});
