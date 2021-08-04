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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script async src="/widgets.js"></script>
      </Head>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
