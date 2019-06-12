import { browser, by, element, ElementFinder } from "protractor";
import { homePage } from "./homePage";

export class fillingFormsPage extends homePage{

    static get elmName1InputField() {
        return element(by.css('#et_pb_contact_name_1'));
    }

    static get elmName2InputField() {
        return element(by.css('#et_pb_contact_name_1'));
    }

    static get elmMessage1InputField() {
        return element(by.css('#et_pb_contact_message_0'));
    }

    static get elmMessage2InputField() {
        return element(by.css('#et_pb_contact_message_1'));
    }

    static get elmQuestionLabel() {
        return element(by.className('et_pb_contact_captcha_question'));
    }
    static get elmAnswerInputField() {
        return element(by.css('#et_pb_contact_form_1 > div.et_pb_contact > form > div > div > p > input'));
    }

    static get elmSubmit1Button() {
        return element(by.css('#et_pb_contact_form_0 > div.et_pb_contact > form > div > button'));
    }

    static get elmSubmit2Button() {
        return element(by.css('#et_pb_contact_form_1 > div.et_pb_contact > form > div > button'));
    }
 
    static get elmSuccessMessage1() {
        return element(by.css('#et_pb_contact_form_0 > div > p')); 
    }
    static get elmSuccessMessage2() {
        return element(by.css('#et_pb_contact_form_1 > div > p')); 
    }

}
