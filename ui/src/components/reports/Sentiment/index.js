import React from 'react';
import { useTranslation } from 'react-i18next';
import Key from './Key';
import Row from './Row';

const Sentiment = ({
  targets,
  id
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

export default Sentiment;
