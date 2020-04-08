import React from 'react';
import { useTranslation } from 'react-i18next';
import Row from './Row';

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

export default MostFrequentWords;
