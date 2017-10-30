

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});
QUnit.test('Testing the new feets to meter conversion function with four sets of inputs', function (assert) {
    assert.equal(cal(1), 0.30480370641307, "works with a positive number");
    assert.equal(calv(0), 0, "does not work with a negative number");
    assert.equal(calv(-100), "undefined", "works with zero number");
    //  assert.throws(function () { outputMeters(null); }, new Error('The given argument is not a number'), "correctly raises an error if one tries to square a null");
});

QUnit.test('Testing the new feets to meter conversion function with four sets of inputs', function (assert) {
    assert.equal(cal(100), 30.480370641306997, "works with a positive number");
    assert.equal(calv(0), 0, "does not work with a negative number");
    assert.equal(calv(-1), "undefined", "works with zero number");
    //  assert.throws(function () { outputMeters(null); }, new Error('The given argument is not a number'), "correctly raises an error if one tries to square a null");
});

QUnit.test('Testing the new feets to meter conversion function with four sets of inputs', function (assert) {
    assert.equal(cal(20), 6.0960741282613995, "works with zero number");
assert.equal(calv(0), 0, "does not work with a negative number");
assert.equal(calv(-20), "undefined", "works with zero number");

});