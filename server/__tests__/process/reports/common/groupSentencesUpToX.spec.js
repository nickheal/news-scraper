import groupSentencesUpToX from 'src/process/reports/common/groupSentencesUpToX';

describe('groupSentencesUpToX', () => {
  test('It should join strings up to the provided length', () => {
    const sentences = ['a', 'bbb', 'ccccc', 'ddddddd'];
    const result = sentences
      |> groupSentencesUpToX(#, 10);

    expect(result).toEqual(['a. bbb.', 'ccccc.', 'ddddddd.']);
  });

  test('It should cope with special characters that count as more than one byte', () => {
    const sentences = ['a★★', 'bbb', 'ccccc', 'ddddddd'];
    const result = sentences
      |> groupSentencesUpToX(#, 10);

    expect(result).toEqual(['a★★.', 'bbb.', 'ccccc.', 'ddddddd.']);
  });
});
