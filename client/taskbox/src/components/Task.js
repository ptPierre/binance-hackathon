import React, { useContext } from 'react';
import { func, shape, string } from 'prop-types';
import ThemeContext from './ThemeContext';

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  const color = useContext(ThemeContext);

  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="text"
          defaultChecked={state === 'TASK_ARCHIVED'}
          name="checked"
          disabled={true}
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <button
            style={{ backgroundColor: 'inherit' }}
            onClick={() => onPinTask(id)}
          >
            <span
              style={{ color: state === 'TASK_INBOX' ? color : '' }}
              className="icon-star"
            />
          </button>
        )}
      </div>
    </div>
  );
};

Task.propTypes = {
  task: shape({
    /** ID of the task */
    id: string.isRequired,
    /** Title of the task */
    title: string.isRequired,
    /** Current state of the task */
    state: string.isRequired
  }),
  /** Event to change the task to archived */
  onArchiveTask: func,
  /** Event to change the task to pinned */
  onPinTask: func
};
