/*
UNIT TESTING
INDIVIDUAL TESTING
JASMINE -- TEST SUITES help all functionality 
KARMA---TEST RUNNER
TEST SUITES--collection of test CASES
test case1.....test case8
for every test case i have some assertion 
if assertion met --test cases passes/successfull
else test fail
*/

import { AppComponent } from "./app.component";

describe('AppComponentTestSuites',()=>
  {
     it('should have a defined title',()=>
      {
        const component=new AppComponent();
        expect(component.title).toBeDefined();
      });

      it('value should equal to this value',()=>
        {
          const component=new AppComponent();
          expect(component.title).toEqual('angular');
        });
  });