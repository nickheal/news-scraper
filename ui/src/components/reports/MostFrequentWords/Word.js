import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  sizer: {
    fontSize: ({ count }) => (count / 2) + 15
  }
});

const Word = ({
  count,
  word
}) => {
  const classes = useStyles({ count });

  return <span className={classes.sizer}>{ word }</span>;
};

export default Word;
