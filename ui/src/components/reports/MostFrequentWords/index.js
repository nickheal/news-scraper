import React from 'react';
import {
  arrayOf,
  number,
  shape,
  string
} from 'prop-types';
import { useTranslation } from 'react-i18next';
import Row from './Row';

/**
 * The most frequent words report
 */
const MostFrequentWords = ({
  targets,
  id
}) => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t(id)}</h2>
      <dl>
        {targets.map(({ id, result }) => (
          <Row key={id} id={id} result={result} />
        ))}
      </dl>
    </>
  );
};

MostFrequentWords.propTypes = {
  /** The report ID */
  id: string.isRequired,
  /** The report for each target */
  targets: arrayOf(
    shape({
      id: string,
      result: arrayOf(
        shape({
          count: number,
          word: string
        })
      )
    })
  ).isRequired
};

export default MostFrequentWords;
