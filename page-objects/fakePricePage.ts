import { browser, by, element, ElementFinder } from "protractor";
import { homePage } from "./homePage";

export class fakePricePage extends homePage{

    static get elmBasicButton() {
        return element(by.css('#et-boc > div > div.et_pb_section.et_pb_section_0.et_pb_with_background.et_section_regular > div.et_pb_row.et_pb_row_1.et_pb_gutters2 > div.et_pb_column.et_pb_column_1_3.et_pb_column_2.et_pb_css_mix_blend_mode_passthrough > div > div > div > div.et_pb_button_wrapper > a'));
    }

    static get elmEnterPasswordInputField() {
        return element(by.id('user_password'));
    }

    static get elmSignInButton() {
        return element(by.id('btn-signin'));
    }

    static get elmLogoutButton() {
        return element(by.css('#et-boc > div > div.et_pb_section.et_pb_section_1.et_section_specialty > div > div.et_pb_column.et_pb_column_3_4.et_pb_column_0.et_pb_specialty_column.et_pb_css_mix_blend_mode_passthrough > div > div > div > div > ul > li:nth-child(6) > a'));
    }

}
