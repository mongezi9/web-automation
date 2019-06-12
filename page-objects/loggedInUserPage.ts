
import { browser, by, element, ElementFinder } from "protractor";
import { homePage } from "./homePage";

export class loggedInUserPage extends homePage{

    static get elmMyAccount() {
        return element(by.id('my_account'));
    }
    static get elmSignOut() {
        return element(by.css('#wrap > header > div > div.header-nav__container > nav > ul.header-nav__list.header-nav__right > li.dropdown.header-nav__item.open > ul > li:nth-child(3) > a'));
    }
    static get elmSignIn() { //Sign In
        return element(by.css('#wrap > header > div > div.header-nav__container > nav > ul.header-nav__list.header-nav__right > li > a'));
    }

}
