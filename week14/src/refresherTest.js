import {TestSuite} from "./kolibri/util/test.js";

const testSuite = TestSuite("refresher");

testSuite.add("reduce", assert => {
    const names = ["Florian", "Katrin", "Niels"];

    const join = ary =>
        ary.length === 0
            ? ""
            : ary.reduce((acc, cur) => acc + " " + cur);

    assert.is(join(names), "Florian Katrin Niels");

    assert.is(join([]), "");

});


testSuite.run();