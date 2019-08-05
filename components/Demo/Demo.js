import React from 'react';
import {setLanguage} from '../../services/language';
class Demo extends React.Component {
    componentDidMount(){
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
        return <h1>h1</h1>;
    }
}

export default setLanguage(Demo);