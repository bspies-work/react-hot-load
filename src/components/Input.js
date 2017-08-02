import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {

    constructor() {
        super();
        this.state = {
            changed: false
        }
    }

    static propTypes = {
        inputLabel: PropTypes.string.isRequired
    }

    onChangeHandler = () => {
        if (!this.state.changed) {
            this.setState({
                changed: true
            });
        }
    }

    render() {
        const {inputLabel} = this.props;
        return (
            <div>
                <label>{inputLabel}</label>
                <input type="text" onChange={this.onChangeHandler}/>
            </div>
        );
    }
}