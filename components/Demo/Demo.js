import React from 'react';
import {setLanguage} from '../../services/language';
class Demo extends React.Component {
    render() {
        const {translation} = this.props;
        return <h1>{translation.dateLabel}</h1>;
    }
}

export default setLanguage(Demo);