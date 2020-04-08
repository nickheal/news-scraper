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
 * The average word length report
 */
const AverageWordLength = ({
  id,
  targets
}) => {
  const { t } = useTranslation();
  const sortedTargets = targets.sort((a, b) => b.result - a.result);

  return (
    <>
      <h2>{t(id)}</h2>
      <dl>
        {sortedTargets.map(({ id, result }) => (
          <Row key={id} id={id} result={result} />
        ))}
      </dl>
    </>
  );
};

AverageWordLength.propTypes = {
  /** The report ID */
  id: string.isRequired,
  /** The report for each target */
  targets: arrayOf(
    shape({
      id: string,
      result: number
    })
  ).isRequired
};

export default AverageWordLength;
