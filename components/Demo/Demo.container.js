import Demo from './Demo';
import {connect} from 'react-redux';
import {getSomeField} from './Demo.selectors';
import {demoGetField} from './Demo.actions';

const mapStateToProps = (state) => ({
    demoSelector: getSomeField(state),
});

const mapDispatchToProps = (dispatch) => ({
    demoAction: () => dispatch(demoGetField()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);