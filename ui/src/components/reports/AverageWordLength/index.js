import React from 'react';
import { useTranslation } from 'react-i18next';
import Row from './Row';

const Target = ({
  targets,
  id
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

export default Target;
