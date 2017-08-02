import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Router, hashHistory} from 'react-router';

export default class Root extends Component {

    static propTypes = {
        routes: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    {this.props.routes}
                </Router>
            </div>
        );
    }
}