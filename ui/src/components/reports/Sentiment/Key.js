import React from 'react';
import { createUseStyles } from 'react-jss';
import { useTranslation } from 'react-i18next';
import KeyItem from './KeyItem';

const useStyles = createUseStyles({
  container: {
    display: 'flex'
  }
});

/**
 * Draws the Key for the sentiments chart
 */
const Key = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <dl className={classes.container}>
      <KeyItem color="green" content={t('positive')} />
      <KeyItem color="orange" content={t('neutral')} />
      <KeyItem color="red" content={t('negative')} />
      <KeyItem color="pink" content={t('mixed')} />
    </dl>
  );
};

export default Key;
