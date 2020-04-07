import getAverageWordLength from 'src/process/reports/common/getAverageWordLength';

describe('getAverageWordLength', () => {
  test('It should return the average length of words in the array', () => {
    const result = ['a', 'bbb', 'ccccc']
      |> getAverageWordLength;

    expect(result).toBe(3);
  });
});
