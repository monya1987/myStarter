import Demo from './Demo';
import {connect} from 'react-redux';
import {getSomeField, getSomeFieldIsLoading} from './Demo.selectors';
import {demoActionSetField} from './Demo.actions';

const mapStateToProps = (state) => ({
    demoData: getSomeField(state),
    demoDataIsLoading: getSomeFieldIsLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
    demoAction: (demoField) => dispatch(demoActionSetField(demoField)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);