import React from 'react';

import Header from '../../../../scenes/header/Header';
import InputField from '../inputfield-section/InputFieldContainerSection';
import DisplayContainerSection from '../display-section/DisplayContanerSection';

const Todo = () => (
  <div>
    <div className="todo-list">
      <Header text="Todos" />
      <InputField />
      <DisplayContainerSection
        ischecked="false"
      />
    </div>
  </div>
);

export default Todo;
