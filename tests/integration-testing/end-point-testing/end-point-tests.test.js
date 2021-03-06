const { runSetupAndTearDownscripts } = require("../../services/testing-auxiliary-services/set-up-and-tear-down-logic");
const schoolTests = require("../end-point-tests/schools-end-point-testing");
const studentTests = require("../end-point-tests/students-end-point-testing");
const middleWareTests = require("../end-point-tests/middleware-testing");

runSetupAndTearDownscripts();
schoolTests();
studentTests();
middleWareTests();
