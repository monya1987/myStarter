import React from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import Head from '../components/Head';
import Nav from '../components/MainNav';
import styles from './index.scss';

import Demo from '../components/Demo/Demo.container';

const Home = () => (
    <div>
        <Head title="Home" />
        <Nav />
        <Demo />

        <div className={styles.hero}>
          <h1 className={styles.title}>Welcome to Next!</h1>
          <p className={styles.description}>
            To get started, edit <code>pages/index.js</code> and save to reload.
          </p>

          <div className={styles.row}>
            <Link href="https://github.com/zeit/next.js#getting-started">
              <a className={styles.card}>
                <h3>Getting Started &rarr;</h3>
                <p>Learn more about Next on Github and in their examples</p>
              </a>
            </Link>
            <Link href="https://open.segment.com/create-next-app">
                <a className={styles.card}>
                <h3>Examples &rarr;</h3>
                <p>
                  Find other example boilerplates on the{' '}
                  <code>create-next-app</code> site
                </p>
              </a>
            </Link>
            <Link href="https://github.com/segmentio/create-next-app">
                <a className={styles.card}>
                <h3>Create Next App &rarr;</h3>
                <p>Was this tool helpful? Let us know how we can improve it</p>
              </a>
            </Link>
          </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    config: state.config,
});

export default connect(mapStateToProps, null)(Home);
