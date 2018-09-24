import React from 'react';
import {setLanguage} from '../../services/language';
class Demo extends React.Component {
    componentDidMount() {
        const {demoAction} = this.props;
        demoAction(123456);
    }
    render() {
        const {translation} = this.props;
        return <h1>{translation.dateLabel}</h1>;
    }
}

export default setLanguage(Demo);