import React from 'react';
import {
  string
} from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  color: {
    background: ({ color }) => color,
    borderRadius: 2,
    display: 'block',
    height: 8,
    marginRight: 8,
    width: 8
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    width: 100
  },
  content: {
    marginLeft: 0
  }
});

/**
 * A single item in a key for a chart
 */
const KeyItem = ({
  color,
  content
}) => {
  const classes = useStyles({ color });

  return (
    <div className={classes.container}>
      <dt className={classes.color} />
      <dd className={classes.content}>
        {content}
      </dd>
    </div>
  );
};

KeyItem.propTypes = {
  /** The colour for the key indicator */
  color: string.isRequired,
  /** The key name */
  content: string.isRequired
};

export default KeyItem;
