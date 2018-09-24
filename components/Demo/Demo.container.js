import Demo from './Demo';
import {connect} from 'react-redux';
import {getSomeField} from './Demo.selectors';
import {demoActionSetField} from './Demo.actions';

const mapStateToProps = (state) => ({
    demoSelector: getSomeField(state),
});

const mapDispatchToProps = (dispatch) => ({
    demoAction: (demoField) => dispatch(demoActionSetField(demoField)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);