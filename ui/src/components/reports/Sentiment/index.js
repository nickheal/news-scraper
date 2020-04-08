import React from 'react';
import {
  arrayOf,
  number,
  shape,
  string
} from 'prop-types';
import { useTranslation } from 'react-i18next';
import Key from './Key';
import Row from './Row';

/**
 * The sentiment report
 */
const Sentiment = ({
  id,
  targets
}) => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t(id)}</h2>
      <Key />
      <dl>
        {targets.map(({ id, result }) => (
          <Row key={id} id={id} result={result} />
        ))}
      </dl>
    </>
  );
};

Sentiment.propTypes = {
  /** The report ID */
  id: string.isRequired,
  /** The report for each target */
  targets: arrayOf(
    shape({
      id: string,
      result: shape({
        positive: number,
        negative: number,
        neutral: number,
        mixed: number
      })
    })
  ).isRequired
};

export default Sentiment;
