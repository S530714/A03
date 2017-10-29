

QUnit.test('Testing the new square function with four sets of inputs', function (assert) {
    assert.equal(outputMeters(2), 0.60960741282614, "works with a positive number");
    assert.equal(outputMeters(-3), "undefined", "does not work with a negative number");
    assert.equal(outputMeters(0), 0, "works with zero number");
    assert.throws(function () { outputMeters(null); }, new Error('The given argument is not a number'), "correctly raises an error if one tries to square a null");
});

QUnit.test('Testing the new square function with four sets of inputs', function (assert) {
    assert.equal(outputMeters1(2), 2000, "works with a positive number");
    assert.equal(outputMeters1(-3), "undefined", "does not work with a negative number");
    assert.equal(outputMeters1(0), 0, "works with zero number");
    assert.throws(function () { outputMeters1(null); }, new Error('The given argument is not a number'), "correctly raises an error if one tries to square a null");
});


