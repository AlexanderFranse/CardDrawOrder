import {
  checkIfCarddeckContainFourCards,
  checkIfCarddeckContainCardsABCD,
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
      expect(checkIfCarddeckContainCardsABCD(carddeck)).toBeTruthy();
    });
  });
});
