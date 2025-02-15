import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC <Props> = ({
  todo:
  { title, user, completed },
}) => (
  <article className={classNames(
    'TodoInfo',
    {
      'TodoInfo--completed': completed === true,
    },
  )}
  >
    <h2 className="TodoInfo__title">{title}</h2>
    {user && <UserInfo user={user} />}
  </article>
);
