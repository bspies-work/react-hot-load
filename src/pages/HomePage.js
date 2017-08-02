import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Input from '../components/Input';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header title="React Hot Loading App"/>
                <Input inputLabel="Enter Text"/>
            </div>
        );
    }
}