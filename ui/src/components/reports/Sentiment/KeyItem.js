import React from 'react';
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

const Target = ({
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

export default Target;
