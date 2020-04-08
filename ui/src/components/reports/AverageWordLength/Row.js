import React from 'react';
import {
  number,
  string
} from 'prop-types';
import { createUseStyles } from 'react-jss';
import { useTranslation } from 'react-i18next';

const useStyles = createUseStyles({
  description: {
    alignItems: 'center',
    display: 'flex'
  },
  indicator: {
    background: 'pink',
    borderRadius: 999,
    display: 'inline-block',
    height: 4,
    marginRight: 8,
    verticalAlign: 'middle',
    width: ({ result }) => result * 75
  },
  row: {
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
 * A row of the average word length report
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
        <div className={classes.indicator} />
        {Math.round(result * 100) / 100}
      </dd>
    </div>
  );
};

Row.propTypes = {
  /** The ID of the current row (target) */
  id: string,
  /** The average word length */
  result: number
};

export default Row;
