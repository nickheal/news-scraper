import stripWordsShorterThanX from 'src/process/reports/common/stripWordsShorterThanX';

describe('stripWordsShorterThanX', () => {
  test('It should remove words shorter than the provided length', () => {
    const result = [{
      word: 'a'
    }, {
      word: 'bbb'
    }, {
      word: 'ccccc'
    }]
      |> stripWordsShorterThanX(#, 4);

    expect(result).toEqual([{ word: 'ccccc' }]);
  });
});
