import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { WithPinnedTasks } from './TaskList.stories';

it('pinned tasks at the top', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WithPinnedTasks {...WithPinnedTasks.args} />, div);

  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 3 (pinned)"]');
  expect(lastTaskInput).not.toBe(null);
  ReactDOM.unmountComponentAtNode(div);
});
