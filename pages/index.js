import React from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import Head from '../components/Head';
import MainNav from '../components/MainNav';
import styles from './index.scss';

const Home = () => (
    <div>
        <Head title="Home" />
        <header>
            <h1 className={styles.title}>Пицца HUB</h1>
            <p>HUB 32 пиццерии</p>
            <p>HUB 100 пицц</p>
            <p>HUB 1000 настоящих отзывов</p>
        </header>
        <MainNav />
        <p>breadcrumbs</p>
        <p>seo page description</p>
        <p>галерея акций на сегодня <a href="#">смотреть все акции</a></p>
        <p>список всех пиццерий</p>
        <footer>
            <p>футер</p>
        </footer>
    </div>
);

const mapStateToProps = (state) => ({
    config: state.config,
});

export default connect(mapStateToProps, null)(Home);
