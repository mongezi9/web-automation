import { browser, by, element, ElementFinder } from "protractor";
import { homePage } from "./homePage";

export class loginAutomationPage{

    static get elmEmailInputField() {
        return element(by.id('user_email'));
    }

    static get elmEnterPasswordInputField() {
        return element(by.id('user_password'));
    }

    static get elmSignInButton() {
        return element(by.id('btn-signin'));
    }

    static get elmSuccessMessage() {
        return element(by.css('#notifications > div > div > div > p '));
    }

}
