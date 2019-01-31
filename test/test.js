var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});
it('double done', function (done) {
    // Calling `done()` twice is an error
    setImmediate(done);
    setImmediate(done);
});
describe('User', function () {
    describe('#save()', function () {
        it('should save without error', function (done) {
            var user = new User('Luna');
            user.save(done);
        });
    });
});
beforeEach(function () {
    return db.clear()
        .then(function () {
            return db.save([tobi, loki, jane]);
        });
});

describe('#find()', function () {
    it('respond with matching records', function () {
        return db.find({
            type: 'User'
        }).should.eventually.have.length(3);
    });
});