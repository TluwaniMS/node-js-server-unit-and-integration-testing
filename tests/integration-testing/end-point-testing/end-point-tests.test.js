import { runSetupAndTearDownscripts } from "../../services/testing-auxiliary-services/set-up-and-tear-down-logic"
import { schoolTests } from "../end-point-tests/schools-end-point-testing"
import { studentTests } from "../end-point-tests/students-end-point-testing"
import { middleWareTests } from "../end-point-tests/middleware-testing"

runSetupAndTearDownscripts();
schoolTests();
studentTests();
middleWareTests();
