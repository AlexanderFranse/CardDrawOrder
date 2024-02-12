import {
  checkIfCarddeckContainFourCards,
  checkIfCarddeckContainCardsABCD,
  drawCardFromDeck,
} from "../../src/template";

describe(`
We play a cardgame where we will draw cards from the top of the carddeck. 
Next card will be shifted at the bottom of the carddeck.
The game ends when there are no cards remaining`, () => {
  describe("First we need to: ", () => {
    it("Check if the carddeck contains 4 cards", () => {
      const cardA = "A";
      const cardB = "B";
      const cardC = "C";
      const cardD = "D";

      const carddeck: string[] = [cardA, cardB, cardC, cardD];

      expect(checkIfCarddeckContainFourCards(carddeck)).toEqual(4);
    });

    it("And if the carddeck contain the letters A, B, C and D, return true", () => {
      const cardA = "A";
      const cardB = "B";
      const cardC = "C";
      const cardD = "D";

      const carddeck: string[] = [cardA, cardB, cardC, cardD];
      expect(checkIfCarddeckContainCardsABCD(carddeck)).toBeTruthy();
    });

    it("Return false when the carddeck contains A, B, A, B", () => {
      const cardA = "A";
      const cardB = "B";
      const cardC = "A";
      const cardD = "B";

      const carddeck: string[] = [cardA, cardB, cardC, cardD];
      expect(checkIfCarddeckContainCardsABCD(carddeck)).toBeFalsy();
    });

    describe("After checking the cards, we can draw a card from the table", () => {
      it("Draw card C. Remaining deck will be A,B and D", () => {
        const cardA = "A";
        const cardB = "B";
        const cardC = "C";
        const cardD = "D";

        const carddeck: string[] = [cardA, cardB, cardC, cardD];
        const output: string[] = [cardA, cardB, cardD];

        expect(drawCardFromDeck(carddeck)).toEqual(output);
      });
    });
  });
});
