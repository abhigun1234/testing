import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalcComponent', () => {

  it('Validate are is greater then 10',()=>{


    let calc=new CalculatorComponent()
    const value=calc.calculate(2,3)

     expect(value).toBeGreaterThan(10)
  })

    
})
