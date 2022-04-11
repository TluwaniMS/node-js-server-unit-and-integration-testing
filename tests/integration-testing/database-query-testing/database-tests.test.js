const { runSetupAndTearDownscripts } = require("../../services/testing-auxiliary-services/set-up-and-tear-down-logic");
const schoolTests = require("./schools-database-query-testing");
const studentTests = require("./students-database-query-testing");

runSetupAndTearDownscripts();
schoolTests();
studentTests();
