import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../redux/action';
import DiplaySection from './DisplaySection';
import { fake } from '../../../../utils';

class DisplayContainerSection extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
  }

  // Remove Todo
  removeTodo(id) {
    const { removeTodo } = this.props;
    // removeTodo(id);
    removeTodo(id);
  }

  // TODO COMPLETE
  checkTodo(e, id) {
    const { checked } = e.target;
    const { checkTodo } = this.props;
    checkTodo(id, checked);
  }

  render() {
    const { todos, ischecked } = this.props;
    localStorage.setItem('todoLocalStore', JSON.stringify(todos)); // Local Storage Store
    return (
      <div>
        <DiplaySection
          checkTodo={this.checkTodo}
          removeTodo={this.removeTodo}
          todos={todos}
          ischecked={ischecked}
        />
      </div>
    );
  }
}

DisplayContainerSection.propTypes = {
  removeTodo: PropTypes.func,
  checkTodo: PropTypes.func,
  todos: PropTypes.instanceOf(Array),
  ischecked: PropTypes.string,

};

DisplayContainerSection.defaultProps = {
  removeTodo: fake,
  checkTodo: fake,
  todos: [],
  ischecked: '',
};

const mapStateToProps = state => ({
  todos: state.todo.todos,
});

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(actions.removeTodo(id)),
  checkTodo: (id, checked) => dispatch(actions.checkTodo(id, checked)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainerSection);
