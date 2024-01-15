export const config = {
    hostname: 'hub.lambdatest.com',
    port: 80,
    path: '/wd/hub',
 
    specs: [
        './features/**/*.feature'
    ],

    capabilities: [{
        "browserName": "Chrome",
        "browserVersion": "latest",
        "LT:Options": {
            "username": process.env.LT_USERNAME,
            "accessKey": process.env.LT_ACCESS_KEY,
            "geoLocation": "AU/AL",
            "visual": true,
            "video": true,
            "platformName": "Windows 10",
            "resolution": "1920x1080",
            "network": true,
            "timezone": "Sydney",
            "build": "buildNameGoesHere",
            "project": "automationProjectNameGoesHere",
            "buildTags": ["buildTag01", "buildTag02"],
            "smartUI.project": "smartUiProjectNameGoesHere",
            "name": "testNameGoesHere",
            "tags": ["testTag01", "testTag02"],
            "tunnel": false,
            "console": "info",
            "networkThrottling": "DSL",
            "selenium_version": "4.13.0",
            "w3c": true,
            "plugin": "node_js-webdriverio"
        }
    }],

    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./features/step-definitions/steps.js'],
        timeout: 60000,
    },
}
