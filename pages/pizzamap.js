import React from 'react';
import {connect} from 'react-redux';

const Home = () => (
    <div>
        map
    </div>
);

const mapStateToProps = (state) => ({
    config: state.config,
});

export default connect(mapStateToProps, null)(Home);
