import {TestSuite} from "./kolibri/util/test.js";
import "./kolibri/util/array.js";

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

testSuite.add("splice", assert => {
    let names = ["Florian", "Katrin", "Niels"];
    names.splice(0, 1)
    assert.isTrue(names.eq(["Katrin", "Niels"]));

    names = ["Florian", "Katrin", "Niels"];
    names.splice(0, 0)
    assert.isTrue(names.eq(names));

    names = ["Florian", "Katrin", "Niels"];
    names.splice(0, 0, "Aaron", "Manuel")
    assert.isTrue(names.eq(["Aaron", "Manuel", "Florian", "Katrin", "Niels"]));
});

testSuite.add("callback", assert => {

    const benchmark = callback => {
        const start = performance.now();
        callback();
        const end = performance.now();
        return end - start;
    };
    assert.isTrue(benchmark(() => console.log("hi")) > 0);

});


testSuite.run();