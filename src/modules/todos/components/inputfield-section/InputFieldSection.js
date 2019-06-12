import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { fake } from '../../../../utils';

const InputFieldSection = (props) => {
  const {
    title,
    error,
    onInputChange,
    onInputKeyUp,
    onClick,
  } = props;

  return (
    <div>
      <TextField
        id="standard-name"
        label="Todo"
        className="add-todo"
        value={title}
        onChange={e => onInputChange(e)}
        onKeyUp={e => onInputKeyUp(e)}
        margin="normal"
      />
      <Button variant="contained" size="small" className="btn-add-todo" onClick={onClick}>
          Add
      </Button>
      <span className="error-msg">{title === '' ? error : ''}</span>
    </div>
  );
};

InputFieldSection.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
  onInputChange: PropTypes.func,
  onInputKeyUp: PropTypes.func,
  onClick: PropTypes.func,
};

InputFieldSection.defaultProps = {
  title: '',
  error: '',
  onInputChange: fake,
  onInputKeyUp: fake,
  onClick: fake,
};


export default InputFieldSection;
