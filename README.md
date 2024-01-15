## WebdriverIO out-of-the-box support for LambdaTest using GeoLocation (via GeoEdge) and Cucumber

I've stripped down `wdio.conf.js` to the bare minimum required except for the `LT:Options` capability object which I added as much as possible based on LambdaTest's configuration generation tool: https://www.lambdatest.com/capabilities-generator/

### To run:

```sh
npm i
LT_USER_NAME="your.username" LT_ACCESS_TOKEN="your.access_token" npm run wdio
```

### What to expect?

The 2 Cucumber scenarios will run against a dummy site. 

From https://automation.lambdatest.com/test you see under the test `MetaData` > `Input Config` the following:

```json
"desiredCapabilities":{
  "geoLocation":"C2",
  "geoLocationUserCode":"AU/AL",
  "geoLocationVendor":"GeoEdge",
}
```

👏👏👏