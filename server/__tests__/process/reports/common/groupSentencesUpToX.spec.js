import groupSentencesUpToX from 'src/process/reports/common/groupSentencesUpToX';

describe('groupSentencesUpToX', () => {
  test('It should join strings up to the provided length', () => {
    const sentences = ['a', 'bbb', 'ccccc', 'ddddddd'];
    const result = sentences
      |> groupSentencesUpToX(#, 10);

    expect(result).toEqual(['a. bbb.', 'ccccc.', 'ddddddd.']);
  });
});
