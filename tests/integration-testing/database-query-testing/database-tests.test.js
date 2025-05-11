import { runSetupAndTearDownscripts } from "../../services/testing-auxiliary-services/set-up-and-tear-down-logic"
import { schoolTests } from "../database-query-tests/schools-database-query-testing"
import { studentTests } from "../database-query-tests/students-database-query-testing"
import { testServiceTests } from "../database-query-tests/test-service-tests"

runSetupAndTearDownscripts();
schoolTests();
studentTests();
testServiceTests();
