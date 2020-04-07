import getMostFrequentWords from 'src/process/reports/common/getMostFrequentWords';

describe('getMostFrequentWords', () => {
  test('It should return the words, sorted by total', () => {
    const result = ['a', 'b', 'a']
      |> getMostFrequentWords;

    expect(result).toEqual([{
      count: 2,
      word: 'a'
    }, {
      count: 1,
      word: 'b'
    }]);
  });
});
