import React from 'react';
import { createUseStyles } from 'react-jss';
import { useTranslation } from 'react-i18next';
import Word from './Word';

const useStyles = createUseStyles({
  description: {},
  row: {
    alignItems: 'center',
    borderBottom: 'solid 1px #eee',
    display: 'flex',
    padding: 4
  },
  target: {
    minWidth: 120,
    textAlign: 'right'
  }
});

const Target = ({
  id,
  result
}) => {
  const { t } = useTranslation();
  const classes = useStyles({ result });

  return (
    <div className={classes.row} key={id}>
      <dt className={classes.target}>{t(id)}</dt>
      <dd className={classes.description}>
        {
          result.map(({ count, word }) => (
            <React.Fragment key={word}>
              <Word count={count} word={word} />
              {' '}
            </React.Fragment>
          ))
        }
      </dd>
    </div>
  );
};

export default Target;
