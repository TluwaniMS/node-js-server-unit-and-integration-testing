const { runSetupAndTearDownscripts } = require("../../services/testing-auxiliary-services/set-up-and-tear-down-logic");
const schoolTests = require("../database-query-tests/schools-database-query-testing");
const studentTests = require("../database-query-tests/students-database-query-testing");
const testServiceTests = require("../database-query-tests/test-service-tests");

runSetupAndTearDownscripts();
schoolTests();
studentTests();
testServiceTests();
