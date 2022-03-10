import Raven from "raven-js";

function init(){
    Raven.config("https://335feeafaa8f4e6bbd6e7c62533e9097@o1161909.ingest.sentry.io/6248502", {
    release: "1.3.0",
    environment: "development-test",
    }).install();
}

function log(error){
    Raven.captureException(error);
}

export default {
    init,
    log
};