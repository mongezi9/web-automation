import { browser } from "protractor";
import { data } from "./test-data/mock-data"
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    directConnect: true,
    multiCapabilities: [{
        'browserName': process.env.ENV
    }],
framework: 'jasmine2',
    specs: ['./tests/testcases.spec.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000,
        isVerbose: true
    },
    onPrepare: () => {
    
        browser.manage().timeouts().implicitlyWait(5000);

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'test-results',
            preserveDirectory: false,
            screenshotsSubfolder: 'screenshots',
            jsonsSubfolder: 'jsons',
            takeScreenShotsForSkippedSpecs: true,
            takeScreenShotsOnlyForFailedSpecs: false,
            docTitle: 'Test Automation Execution Report',
            docName: 'TestResult.html',
            gatherBrowserLogs: true
        }).getJasmine2Reporter());
    }
}
