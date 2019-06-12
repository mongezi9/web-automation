import { protractor, browser } from "protractor";
import { data } from "../test-data/mock-data"
import { homePage } from "../page-objects/homePage";
import { loginAutomationPage } from "../page-objects/loginAutomationPage";
import { commonPageObjects } from "../page-objects/common";
import { loggedInUserPage } from "../page-objects/loggedInUserPage";
import { fakePricePage } from "../page-objects/fakePricePage";
import { fillingFormsPage } from "../page-objects/fillingFormsPage";


describe('End to end test suite: ', () => {
    beforeEach(async function(){
        await browser.waitForAngularEnabled(false);
    });
    
    it('As a user I can navigate to a Website', async function () {
        await browser.get(data.site);
        await commonPageObjects.verifyTitle("Ultimate QA")
       
    });

    it('As a user I can Maximize Browser Window', async function () {
        await browser.get(data.site);
        var windowSizeBefore = await browser.manage().window().getSize();
        await browser.manage().window().maximize();
        var windowSizeAfter = await browser.manage().window().getSize();
        expect(windowSizeAfter.width).toBeGreaterThan(windowSizeBefore.width)
        expect(windowSizeAfter.height).toBeGreaterThan(windowSizeBefore.height)
    });

    it('As a user I can login to the page via "Login automation" link', async function () {
        await browser.get(data.site);
        var elmLoginAutomation = await homePage.elm_login_to_automation;

        await commonPageObjects.clickElement(elmLoginAutomation)
        //get all neccessary elements under login
        var elmEmail = await loginAutomationPage.elmEmailInputField;
        var elmPass = await loginAutomationPage.elmEnterPasswordInputField;
        var elmSignIn = await loginAutomationPage.elmSignInButton;

        //enters email
        await commonPageObjects.enterTextOnInpuField(elmEmail, data.user_data.username);
        //enters passwaord
        await commonPageObjects.enterTextOnInpuField(elmPass, data.user_data.password);
        //now click login
        await commonPageObjects.clickElement(elmSignIn);
        //validate message
        var elmSuccessMsg = await loginAutomationPage.elmSuccessMessage;
        await commonPageObjects.validateTextOnWebElement(elmSuccessMsg, "Signed in successfully.");

    });

    it('As a user I can logout from page', async function () {
        await browser.get(data.site);
        var elmLoginAutomation = await homePage.elm_login_to_automation;

        //session still active, go to login automation
        await commonPageObjects.clickElement(elmLoginAutomation);
        //go to myaccount
        var elmGoToMyAccount = await loggedInUserPage.elmMyAccount;
        await commonPageObjects.clickElement(elmGoToMyAccount);
        //locate an element after dropdown, then signs out
        var elmSignOut = await loggedInUserPage.elmSignOut;
        await commonPageObjects.clickElement(elmSignOut);

    });

    it('As a user I can able to "fill out forms" click submit action', async function () {
        await browser.get(data.site);
        var elmFillForms = await homePage.elm_fill_out_forms;

        await commonPageObjects.clickElement(elmFillForms);
        //-------------FORM 1 -------------//
        //locate elements
        var elmName1 = await fillingFormsPage.elmName1InputField;
        var elmMessage1 = await fillingFormsPage.elmMessage1InputField;
        var elmSubmit1 = await fillingFormsPage.elmSubmit1Button;

        await commonPageObjects.enterTextOnInpuField(elmName1, data.test_data.forms["form 1"].name);
        await commonPageObjects.enterTextOnInpuField(elmMessage1, data.test_data.forms["form 1"].message);

        await commonPageObjects.clickElement(elmSubmit1);
        //validate success message after submit
        var elmSuccessMsg1 = await fillingFormsPage.elmSuccessMessage1;
        await commonPageObjects.validateTextOnWebElement(elmSuccessMsg1, "Form filled out successfully");

        //-------------FORM 2 -------------//
        var elmName2 = await fillingFormsPage.elmName2InputField;
        var elmMessage2 = await fillingFormsPage.elmMessage2InputField;
        var elmSubmit2 = await fillingFormsPage.elmSubmit2Button;
        var elmQuesting = await fillingFormsPage.elmQuestionLabel;
        var elmTAnswerInputField = await fillingFormsPage.elmAnswerInputField;
        
        await commonPageObjects.enterTextOnInpuField(elmName2, data.test_data.forms["form 2"].name);
        await commonPageObjects.enterTextOnInpuField(elmMessage2, data.test_data.forms["form 2"].message);
        await commonPageObjects.setCalculatedAnswerFromLabelToTextField(elmQuesting, elmTAnswerInputField);

        await commonPageObjects.clickElement(elmSubmit2);
        //validate success message after submit
        var elmSuccessMsg2 = await fillingFormsPage.elmSuccessMessage2;
        await commonPageObjects.validateTextOnWebElement(elmSuccessMsg2, "Success");

    });

    it('As a user I can able to browse to "Fake Pricing Page" and Purchase the Basic package', async function () {
        await browser.get(data.site);
        var elmFakePrice= await homePage.elm_fake_pricing;

        await commonPageObjects.clickElement(elmFakePrice);
        //locate elements
        var elmBasciPrice = await fakePricePage.elmBasicButton;
        await commonPageObjects.clickElement(elmBasciPrice);

    });
})