import stripSpecialCharacters from 'src/process/reports/common/stripSpecialCharacters';

describe('stripSpecialCharacters', () => {
  test('It should remove special characters from each word in an array', () => {
    const result = ['a\" /*&^%$3b']
      |> stripSpecialCharacters;

    expect(result).toEqual(['ab']);
  });

  test('It should remove a word if there is nothing left after the characters are removed', () => {
    const result = ['123']
      |> stripSpecialCharacters;

    expect(result).toEqual([]);
  });
});
