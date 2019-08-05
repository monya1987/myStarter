import React from 'react';
import {connect} from 'react-redux';

const Home = () => (
    <div>
        111111111111111
    </div>
);

const mapStateToProps = (state) => ({
    config: state.config,
});

export default connect(mapStateToProps, null)(Home);
