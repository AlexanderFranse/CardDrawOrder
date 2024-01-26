export function checkIfCarddeckContainFourCards(input: string[]) {
  return input.length;
}

export function checkIfCarddeckContainCardsABCD(input: string[]) {
  // eslint-disable-next-line prettier/prettier
  if (
    input.includes("A") &&
    input.includes("B") &&
    input.includes("C") &&
    input.includes("D")
  ) {
    return true;
  }
  return false;
}
