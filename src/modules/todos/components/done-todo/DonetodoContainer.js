import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Donetodo from './Donetodo';
import { noop } from '../../../../utils';
import * as actions from '../../redux/action';

class DonetodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.removeTodo = this.removeTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
  }

  onInputChange(e) {
    const { value } = e.target;
    this.setState({
      title: value,
    });
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
    const { title } = this.state;
    const { todo } = this.props;
    return (
      <div>
        <Donetodo
          removetodo={this.removeTodo}
          checktodo={this.checkTodo}
          title={title}
          todo={todo}
        />
      </div>
    );
  }
}

DonetodoContainer.propTypes = {
  removeTodo: PropTypes.func,
  checkTodo: PropTypes.func,
  todo: PropTypes.instanceOf(Array),
};

DonetodoContainer.defaultProps = {
  removeTodo: noop,
  checkTodo: noop,
  todo: [],
};

const mapStateToProps = state => ({
  todo: state.todo.todo,
});

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(actions.removeTodo(id)),
  checkTodo: (id, checked) => dispatch(actions.checkTodo(id, checked)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DonetodoContainer);
