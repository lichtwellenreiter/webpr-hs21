
import {TestSuite} from "./kolibri/util/test.js";

const crazySuite = TestSuite("crazy");

crazySuite.add("compare", assert => {

    assert.is( "" ,    true);

});


crazySuite.run();
