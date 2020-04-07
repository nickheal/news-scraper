import getWords from 'src/process/reports/common/getWords';

describe('getWords', () => {
  test('It should split strings in to words', () => {
    const result = ['a sentence', 'a second sentence']
      |> getWords;

    expect(result).toEqual(['a', 'sentence', 'a', 'second', 'sentence']);
  });
});
