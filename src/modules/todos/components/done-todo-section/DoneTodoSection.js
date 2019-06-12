import React from 'react';

import Header from '../../../../scenes/header/Header';
import DisplayContainerSection from '../display-section/DisplayContanerSection';

const Donetodo = () => (
  <div className="todo-list">
    <Header text="Done" />
    <DisplayContainerSection
      ischecked="true"
    />
  </div>
);
export default Donetodo;
