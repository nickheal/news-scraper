import getFirstXFromArray from 'src/process/reports/common/getFirstXFromArray';

describe('getFirstXFromArray', () => {
  test('It should return the first selected number of items from the array', () => {
    const result = ['a', 'b', 'c']
      |> getFirstXFromArray(#, 2);

    expect(result).toEqual(['a', 'b']);
  });
});
