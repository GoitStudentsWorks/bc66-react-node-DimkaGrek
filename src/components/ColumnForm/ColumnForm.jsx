import { Field, Form, Formik } from 'formik';
import { AddButton } from '../AddButton/AddButton';
import { Schema } from '../../schemas';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

import s from './ColumnForm.module.css';
import { addColumn } from '../../redux/boards/columnOperations.js';
import { useParams } from 'react-router-dom';
import {
  selectBoards,
  selectIsLoading,
} from '../../redux/boards/boardsSlice.js';
import { useSelector } from 'react-redux';
import { editColumn } from '../../redux/boards/columnOperations.js';
import Loader from '../Loader/Loader.jsx';
import { toast } from 'react-toastify';

export const ColumnForm = ({ column, toggleModal }) => {
  const dispatch = useDispatch();
  const { boardName } = useParams();
  const boards = useSelector(selectBoards);
  const isLoading = useSelector(selectIsLoading);

  const currentBoard = boards.find(board => board.name === boardName);

  return (
    <Formik
      initialValues={{
        name: !column ? '' : column.name,
      }}
      validationSchema={Schema}
      onSubmit={values => {
        dispatch(
          column
            ? editColumn({
                id: column._id,
                boardId: currentBoard._id,
                ...values,
              })
            : addColumn({ ...values, boardId: currentBoard._id })
        )
          .unwrap()
          .then(() => {
            toggleModal();
          })
          .catch(e => toast.error(e));
      }}
    >
      {({ errors, touched }) => (
        <Form className={s.form}>
          <div>
            <Field name="name" type="text" placeholder="Title" />
            {errors.name && touched.name ? (
              <p className={s.descrError}>{errors.name}</p>
            ) : null}
          </div>
          <Button className="button" type="submit" disabled={isLoading}>
            <AddButton width="28" height="28" iconSize="14" />{' '}
            {column ? 'Edit' : 'Add'}
            {isLoading && <Loader size={20} classTitle="insideButton" />}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
