import React from 'react';
import {
  number,
  string
} from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  sizer: {
    fontSize: ({ count }) => (count / 2) + 15
  }
});

/**
 * An individual word in the most frequent words report
 */
const Word = ({
  count,
  word
}) => {
  const classes = useStyles({ count });

  return <span className={classes.sizer}>{ word }</span>;
};

Word.propTypes = {
  /** The count for the number of times the word appeared */
  count: number.isRequired,
  /** The word itself */
  word: string.isRequired
};

export default Word;
