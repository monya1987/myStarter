import React from 'react';
import {Button} from 'react-toolbox/lib/button';
import {setLanguage} from '../../services/language';
class Demo extends React.Component {
    componentDidMount() {
        const {demoAction, demoData, demoDataIsLoading} = this.props;
        console.log('componentWillMount', demoData, demoDataIsLoading);
        demoAction(123456);
    }
    componentWillReceiveProps(nextProps) {
        const {demoData, demoDataIsLoading} = nextProps;
        console.log('componentWillReceiveProps', demoData, demoDataIsLoading);
    }
    render() {
        const {translation} = this.props;
        return <h1>{translation.dateLabel}<Button label='Bookmark' raised primary /></h1>;
    }
}

export default setLanguage(Demo);