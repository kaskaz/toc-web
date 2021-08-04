import Head from 'next/head'

import { makeStyles } from '@material-ui/core'
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="/widgets.js"></script>
      </Head>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
