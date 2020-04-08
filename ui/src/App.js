import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import AverageWordLength from './components/reports/AverageWordLength';
import MostFrequentWords from './components/reports/MostFrequentWords';
import Sentiment from './components/reports/Sentiment';
import useGlobalStyles from './App.styles';

const useStyles = createUseStyles({
  container: {
    margin: [0, 'auto'],
    padding: [0, 24],
    maxWidth: 768,
    width: '100%'
  }
});

/**
 * Fetches the correct React Component for the report based on the ID
 * @param {string} id 
 */
function getReportComponent(id) {
  switch(id) {
    case 'averageWordLength':
      return AverageWordLength;
    case 'mostFrequentWords':
      return MostFrequentWords;
    case 'sentiment':
      return Sentiment;
    default:
      return AverageWordLength;
  }
}

/**
 * The App entry point
 */
function App() {
  useGlobalStyles();
  const { t } = useTranslation();
  const classes = useStyles();
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('http://localhost:2700/api/allByReport');
      setData(data);
    }
    getData();
  }, []);

  return (
    <main className={classes.container}>
      <h1>{t('reports')}</h1>
      {data ? data.map(
        (report) => {
          const Component = getReportComponent(report.id);
          return (
            <section key={report.id}>
              <Component {...report} />
            </section>
          );
        }
      ) : (
        <p>Loading</p>
      )}
    </main>
  );
}

export default App;
