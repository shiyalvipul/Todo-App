import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { noop } from '../../../../utils';
import * as actions from '../../redux/action';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      error: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputKeyUp = this.onInputKeyUp.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
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
    if (e.keyCode === 13 && title !== '') {
      addTodo(title);
      // localStorage.setItem('todo-state', JSON.stringify(todo));
      this.setState({
        title: '',
        error: '',
      });
    } else {
      this.setState({
        error: '* Please Enter Todo Text',
      });
    }
    if (e.keyCode === 27) {
      this.setState({
        title: '',
        error: '',
      });
    }
  }

  // Remove Todo
  removeTodo(id) {
    const { removeTodo } = this.props;
    // removeTodo(id);
    removeTodo(id, { isRemoved: true });
  }

  // TODO COMPLETE
  checkTodo(id, e) {
    const { checkTodo } = this.props;
    checkTodo(id, e.target.checked);
  }

  render() {
    const { title, error } = this.state;
    const { todo } = this.props;
    return (
      <div>
        <Todo
          removetodo={this.removeTodo}
          checktodo={this.checkTodo}
          inputkeyup={this.onInputKeyUp}
          inputchange={this.onInputChange}
          title={title}
          error={error}
          todo={todo}
        />
      </div>
    );
  }
}

TodoContainer.propTypes = {
  addTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  checkTodo: PropTypes.func,
  todo: PropTypes.instanceOf(Array),

};

TodoContainer.defaultProps = {
  addTodo: noop,
  removeTodo: noop,
  checkTodo: noop,
  todo: [],
};

const mapStateToProps = state => ({
  todo: state.todo.todo,
});

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(actions.addTodo(title)),
  removeTodo: id => dispatch(actions.removeTodo(id)),
  checkTodo: (id, checked) => dispatch(actions.checkTodo(id, checked)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
