var Deck = require('../lib/deck');

describe('Deck', function () {
  describe('.build()', function () {
    it('should contain the Ace of Spades', function () {
      expect(Deck.build()).toContain(['Spades', 'A']);
    });
  });
});
