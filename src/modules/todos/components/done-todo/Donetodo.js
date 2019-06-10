import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { noop } from '../../../../utils';
import Header from '../header/HeaderContainer';

const Donetodo = (props) => {
  const {
    todo,
    removetodo,
    checktodo,
  } = props;
  return (
    <div className="todolist">
      <Header headertext="Done" />
      <Table className="table todo-table">
        <TableBody>
          {todo.length > 0
          && todo
            .filter(todos => todos.isDone)
            .filter(todos => !todos.isRemoved)
            .map(todos => (
              <TableRow key={todos.id} className="todo-row">
                <TableCell className="tod-cell">
                  <Checkbox
                    onChange={e => checktodo(todos.id, e)}
                    checked={todos.isDone}
                    color="primary"
                    className="checkBox"
                  />
                  {todos.title}
                  <IconButton
                    aria-label="Delete"
                    onClick={() => removetodo(todos.id)}
                    className="delete_btn"
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <br />
      <br />
      <div className="todo-footer">
        <strong>{todo.filter(todos => todos.isDone).length}</strong>
        &nbsp;Items Completed
      </div>
    </div>
  );
};


Donetodo.propTypes = {
  removetodo: PropTypes.func,
  checktodo: PropTypes.func,
  todo: PropTypes.instanceOf(Array),
};

Donetodo.defaultProps = {
  checktodo: noop,
  removetodo: noop,
  todo: [],
};

export default Donetodo;
