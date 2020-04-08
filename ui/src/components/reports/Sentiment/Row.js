import React from 'react';
import { createUseStyles } from 'react-jss';
import { useTranslation } from 'react-i18next';

function calculateWidth(score) {
  return `${score * 100}%`;
}

function calculatePosition(...args) {
  return calculateWidth(args.reduce((acc, val) => acc + val, 0));
}

const indicatorCommon = {
  height: '100%',
  position: 'absolute',
  top: 0
}

const useStyles = createUseStyles({
  description: {
    alignItems: 'center',
    display: 'flex'
  },
  indicator: {
    borderRadius: 999,
    display: 'inline-block',
    height: 16,
    overflow: 'hidden',
    position: 'relative',
    /** This transform fixes some rendering/pixel-rounding issues */
    transform: 'scale(1.0001)',
    verticalAlign: 'middle',
    width: 300
  },
  row: {
    borderBottom: 'solid 1px #eee',
    display: 'flex',
    padding: 4
  },
  target: {
    minWidth: 120,
    textAlign: 'right'
  },
  positive: {
    ...indicatorCommon,
    background: 'green',
    left: 0,
    width: ({ positive }) => calculateWidth(positive)
  },
  neutral: {
    ...indicatorCommon,
    background: 'orange',
    left: ({ positive }) => calculatePosition(positive),
    width: ({ neutral }) => calculateWidth(neutral)
  },
  negative: {
    ...indicatorCommon,
    background: 'red',
    left: ({ positive, neutral }) => calculatePosition(positive, neutral),
    width: ({ negative }) => calculateWidth(negative)
  },
  mixed: {
    ...indicatorCommon,
    background: 'pink',
    left: ({ positive, neutral, negative }) => calculatePosition(positive, neutral, negative),
    width: ({ mixed }) => calculateWidth(mixed)
  }
});

const Row = ({
  id,
  result
}) => {
  const { t } = useTranslation();
  const classes = useStyles({ ...result });

  return (
    <div className={classes.row} key={id}>
      <dt className={classes.target}>{t(id)}</dt>
      <dd className={classes.description}>
        <div className={classes.indicator}>
          <div className={classes.positive} />
          <div className={classes.neutral} />
          <div className={classes.negative} />
          <div className={classes.mixed} />
        </div>
      </dd>
    </div>
  );
};

export default Row;
