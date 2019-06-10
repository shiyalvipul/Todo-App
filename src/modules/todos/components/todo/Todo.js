import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

import { noop } from '../../../../utils';
import Header from '../header/HeaderContainer';

const Todo = (props) => {
  const {
    todo,
    inputchange,
    inputkeyup,
    removetodo,
    checktodo,
    title,
    error,
  } = props;
  return (
    <div>
      <div className="todolist" >
        <Header headertext="Todos" />
        <TextField
          id="standard-name"
          label="Todo"
          className="add-todo"
          value={title}
          onChange={e => inputchange(e)}
          onKeyUp={e => inputkeyup(e)}
          margin="normal"
        />
        {/* <input
          type="text"
          placeholder="Add todo"
          value={title}
          onChange={e => inputchange(e)}
          onKeyUp={e => inputkeyup(e)}
          className="form-control add-todo"
          name="add_todo"
          required
        /> */}
        <span className="error_msg">{title === '' ? error : ''}</span>
        <br />
        <Table className="todo-table" size="small">
          <TableBody>
            {todo.length > 0
              && todo
                .filter(todos => !todos.isRemoved)
                .filter(todos => !todos.isDone)
                .map(todos => (
                  <TableRow key={todos.id} className="todo-row">
                    <TableCell className="tod-cell">
                      <div key={todos.id} style={{ height: 20 }}>
                        <Checkbox
                          onChange={e => checktodo(todos.id, e)}
                          checked={todos.isDone}
                          color="primary"
                          className="checkBox"
                        />
                        <span>{todos.title}</span>
                        <IconButton
                          aria-label="Delete"
                          onClick={() => removetodo(todos.id)}
                          className="delete_btn"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        <div className="todo-footer">
          <strong>
            {
              todo
                .filter(todos => !todos.isRemoved)
                .filter(todos => !todos.isDone).length
            }
          </strong>
          &nbsp;Items Left
        </div>
      </div>
    </div>
  );
};


Todo.propTypes = {
  inputchange: PropTypes.func,
  inputkeyup: PropTypes.func,
  removetodo: PropTypes.func,
  title: PropTypes.string,
  error: PropTypes.string,
  todo: PropTypes.instanceOf(Array),
  checktodo: PropTypes.func,
};

Todo.defaultProps = {
  inputchange: noop,
  inputkeyup: noop,
  removetodo: noop,
  title: null,
  error: null,
  todo: [],
  checktodo: noop,
};

export default Todo;
