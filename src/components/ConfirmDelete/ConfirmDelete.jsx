import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { Loader, Button } from 'components';

import { deleteBoard } from '../../redux/boards/boardsOperations';
import { selectIsLoading } from '../../redux/boards/boardsSlice';

import s from './ConfirmDelete.module.css';
import { deleteColumn } from '../../redux/boards/columnOperations';

export const ConfirmDelete = ({ toggleModal, id, name = 'board' }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleDelete = id => {
    dispatch(name === 'board' ? deleteBoard(id) : deleteColumn(id))
      .unwrap()
      .then(() => toggleModal())
      .catch(() =>
        toast.error('Something went wrong. Reload page or try again later!')
      );
  };

  return (
    <>
      <div className={s.wrapper}>
        <Button
          type="button"
          className="button"
          onClick={() => handleDelete(id)}
          disabled={isLoading}
        >
          Delete {isLoading && <Loader size={20} classTitle="insideButton" />}
        </Button>
        <Button type="button" className="button" onClick={toggleModal}>
          Cancel
        </Button>
      </div>
    </>
  );
};
