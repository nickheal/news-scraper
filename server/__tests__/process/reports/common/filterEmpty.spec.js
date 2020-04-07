import filterEmpty from 'src/process/reports/common/filterEmpty';

describe('filterEmpty', () => {
  test('It should remove empty items from an array', () => {
    const result = [1,null,2]
      |> filterEmpty;

    expect(result).toEqual([1,2]);
  });
});
