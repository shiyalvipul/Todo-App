import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import InputFieldSection from './InputFieldSection';
import * as actions from '../../redux/action';
import { fake } from '../../../../utils';

class InputFieldContainerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      error: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputKeyUp = this.onInputKeyUp.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onInputChange(e) {
    const { value } = e.target;
    this.setState({
      title: value,
      error: '',
    });
  }

  onInputKeyUp(e) {
    const { addTodo } = this.props;
    const { title } = this.state;
    const pattern = '^[a-zA-Z0-9-_@#*,]+(\s{0,1}[a-zA-Z0-9-._@#*, ])*$'; // this pattern used for in input field first space character is not allowed
    if (title.match(pattern)) {
      if (e.keyCode === 13) { // Here... keyCode 13 is used for ENTER KEY
        addTodo(title);
        this.setState({
          title: '',
          error: '',
        });
      }
    } else {
      this.setState({
        error: 'required',
      });
    }
    if (e.keyCode === 27) { // Here... keyCode 27 is used for Esc KEY
      this.setState({
        title: '',
      });
    }
  }

  onClick() {
    const { title } = this.state;
    const { addTodo } = this.props;
    const pattern = '^[a-zA-Z0-9-_@#*,]+(\s{0,1}[a-zA-Z0-9-._@#*, ])*$';
    if (title.match(pattern)) {
      addTodo(title);
      this.setState({
        title: '',
        error: '',
      });
    } else {
      this.setState({
        error: 'required',
      });
    }
  }

  render() {
    const { title, error } = this.state;
    return (
      <div>
        <InputFieldSection
          title={title}
          error={error}
          onInputChange={this.onInputChange}
          onInputKeyUp={this.onInputKeyUp}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

InputFieldContainerSection.propTypes = {
  addTodo: PropTypes.func,
};
InputFieldContainerSection.defaultProps = {
  addTodo: fake,
};


const mapStateToProps = state => ({
  todos: state.todo.todos,
});
const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(actions.addTodo(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputFieldContainerSection);
