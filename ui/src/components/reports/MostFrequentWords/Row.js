import React from 'react';
import {
  arrayOf,
  number,
  shape,
  string
} from 'prop-types';
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

/**
 * A row of the most frequent words report
 */
const Row = ({
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

Row.propTypes = {
  /** The ID of the current row (target) */
  id: string.isRequired,
  /** The most frequent words from the report */
  result: arrayOf(
    shape({
      count: number,
      word: string
    })
  ).isRequired
};

export default Row;
