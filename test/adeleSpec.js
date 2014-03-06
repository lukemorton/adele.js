var Adele = require('../lib/adele');

describe('Adele', function () {
  describe('.random()', function () {
    it('should return a random number > 0', function () {
      expect(Adele.random()).toBeGreaterThan(0);
    });

    it('should return a random number < 13', function () {
      expect(Adele.random()).toBeLessThan(14);
    });
  });
});
