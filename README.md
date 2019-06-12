#### Intro
This is a nodejs automation test application, it uses a Protractor. It will test against [ultimateqa](https://www.ultimateqa.com/automation/) on chrome and firefox.
And at the end it will generate test results.

#### Pre requisite 
- Javascript/Typescript
- NodeJs
- Jasmine testing framework
- Chrome
- Firefox
- Protractor
- JDK 

#### How to Install
* Typscript
    * *npm install -g typescript*
* Nodejs
    [Download NodeJs here](https://nodejs.org/en/)

* Jasmine
    > `npm install jasmine`, but this is included in the package.json, `npm i` will install everything listed under it.

* Chrome driver
    > Insure you have installed latest chrome
    > From this [ChromerDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads) get the version you want and update as follows
    > `webdriver-manager update --versions.chrome=75.0.3770.8` or go to `chrome://settings/help` and update  chrome

    **Typical Error**
    *  _E/launcher - session not created: This version of ChromeDriver only supports Chrome version 75_


* Firefox driver
    > Insure you have installed firefox

    **Typical Error**
    * _Expected browser binary location, but unable to find binary in default location, no 'moz:firefoxOptions.binary' capability provided, and no binary flag set on the command line_

* Protractor
    > `npm install protractor -g` it installs it globally.

* JDK
    Since  `webdriver-manager` starts `selenium-server*.jar` we will need to install the Java Development Kit
    
    **Windows**
    > Install the JDK software.

    > Go to http://java.sun.com/javase/downloads/index.jsp.

    > Select the appropriate JDK software and click Download.

    > The JDK software is installed on your computer, for example, at C:\Program Files\Java\jdk1.6.0_02. You can move   the JDK software to another location if desired.

    > Set `JAVA_HOME`:

    > Right click My Computer and select Properties.

    > On the Advanced tab, select Environment Variables, and then edit JAVA_HOME to point to where the JDK software is located, for example, C:\Program Files\Java\jdk1.6.0_02.

    **UNIX System**
    > Install the JDK software.

    > Go to http://java.sun.com/javase/downloads/index.jsp.

    > Select the appropriate JDK version and click Download.

    > The JDK software is installed on your computer, for example, at /usr/jdk/jdk1.6.0_02. You can change this location.

    > Set `JAVA_HOME`.

    > Korn and bash shells:

    ` export JAVA_HOME=jdk-install-dir`
    ` export PATH=$JAVA_HOME/bin:$PATH`
    > Bourne shell:

    ` JAVA_HOME=jdk-install-dir`
    ` export JAVA_HOME`
    ` PATH=$JAVA_HOME/bin:$PATH`
    ` export PATH`
    > C shell:

    ` setenv JAVA_HOME jdk-install-dir`
    ` setenv PATH $JAVA_HOME/bin:$PATH`
    ` export PATH=$JAVA_HOME/bin:$PATH`

#### How to run
change directory to the root of the project and execute the follwing:

     1. `npm install`
     2. `npm run webdriver-update`
     3. `npm run test` - this will run tests in both **chrome** and **firefox** then report will be generated at `./test-results/TestResult.html`



