import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Router, hashHistory} from 'react-router';

export default class Root extends Component {

    static propTypes = {
        routes: PropTypes.object.isRequired,
    };

    render() {
        const history = hashHistory;
        console.log('history', history);
        return (
            <div>
                <Router history={history}>
                    {this.props.routes}
                </Router>
            </div>
        );
    }
}