import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { fake } from '../../../../utils';

const DisplaySection = (props) => {
  const {
    checkTodo,
    removeTodo,
    todos,
    ischecked,
  } = props;
  return (
    <div>
      <Table className="todo-table" size="small">
        <TableBody>
          {todos.length > 0
            && ischecked === 'false' ? todos
              .filter(todo => !todo.isDone)
              .map(todo => (
                <TableRow key={todo.id} className="todo-row">
                  <TableCell className="tod-cell">
                    <Checkbox
                      onChange={e => checkTodo(e, todo.id)}
                      checked={todo.isDone}
                      color="primary"
                      className="checkBox"
                    />
                    <span>{todo.title}</span>
                    <IconButton
                      aria-label="Delete"
                      onClick={() => removeTodo(todo.id)}
                      className="delete-btn"
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )) : todos
              .filter(todo => todo.isDone)
              .map(todo => (
                <TableRow key={todo.id} className="todo-row">
                  <TableCell className="tod-cell">
                    <Checkbox
                      onChange={e => checkTodo(e, todo.id)}
                      checked={todo.isDone}
                      color="primary"
                      className="checkBox"
                    />
                    <span>{todo.title}</span>
                    <IconButton
                      aria-label="Delete"
                      onClick={() => removeTodo(todo.id)}
                      className="delete-btn"
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
              }
        </TableBody>
      </Table>
    </div>
  );
};
DisplaySection.propTypes = {
  checkTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  todos: PropTypes.instanceOf(Array),
  ischecked: PropTypes.string,
};

DisplaySection.defaultProps = {
  checkTodo: fake,
  removeTodo: fake,
  todos: [],
  ischecked: '',
};

export default DisplaySection;
