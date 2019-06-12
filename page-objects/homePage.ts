import { browser, by, element, ElementFinder } from "protractor";
import { loginAutomationPage } from "./loginAutomationPage";

export class homePage {

    static  get elm_login_to_automation() {
        loginAutomationPage
        return element(by.css('#et-boc > div > div.et_pb_section.et_pb_section_1.et_section_specialty > div > div.et_pb_column.et_pb_column_3_4.et_pb_column_0.et_pb_specialty_column.et_pb_css_mix_blend_mode_passthrough > div > div > div > div > ul > li:nth-child(6) > a'));
    }
    static  get elm_fill_out_forms() {
        return element(by.css('#et-boc > div > div.et_pb_section.et_pb_section_1.et_section_specialty > div > div.et_pb_column.et_pb_column_3_4.et_pb_column_0.et_pb_specialty_column.et_pb_css_mix_blend_mode_passthrough > div > div > div > div > ul > li:nth-child(4) > a'));
    }
    static  get elm_fake_pricing() {
        return element(by.css('#et-boc > div > div.et_pb_section.et_pb_section_1.et_section_specialty > div > div.et_pb_column.et_pb_column_3_4.et_pb_column_0.et_pb_specialty_column.et_pb_css_mix_blend_mode_passthrough > div > div > div > div > ul > li:nth-child(3) > a'));
    }

}
