import { browser, by, element } from "protractor";

export class commonPageObjects {

    static clearTextOnInpuField(elm: any, text: string) {
        return elm.sendKeys(text)
    }
    static enterTextOnInpuField(elm: any, text: string) {
        return elm.sendKeys(text)
    }

    static clickElement(elm: any) {
        return elm.click();
    }

    static  verifyTitle(title: string) {
        return browser.getTitle().then(actualTitle=>{
            expect(actualTitle).toContain(title)
        }).catch(err=>{});
    }

    static  validateTextOnWebElement(elm: any, expectedText: string) {
        return elm.getText().then(actualText=>{
            expect(expectedText).toContain(actualText)
        }).catch(err=>{});
    }

    static  setCalculatedAnswerFromLabelToTextField(elm1: any, elm2:any) {
        return elm1.getText().then(str=>{
            var arr = str.split("+");

            var num1 = parseInt(arr[0]);
            var num2 = parseInt(arr[1]);

            var sum = num1 +num2;
            elm2.sendKeys(sum.toString())
            
        }).catch(err=>{});
    }
}
