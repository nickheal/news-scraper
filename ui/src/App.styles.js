import { createUseStyles } from 'react-jss';

export default createUseStyles({
  '@global': {
    body: {
      fontFamily: '"Comic Neue", Helvetica, Arial, sans-serif',
      margin: 0,
      padding: 0,
    },

    '*': {
      boxSizing: 'border-box'
    }
  }
});