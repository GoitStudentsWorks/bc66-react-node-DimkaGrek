import { Icon } from '../../components/Icon/Icon.jsx';
import { useSelector } from 'react-redux';
import { selectCurrentBoard } from '../../redux/boards/boardsSlice';
import { useModal } from '../../hooks/useModal.jsx';
import Filters from '../Filters/Filters.jsx';
import { ModalFilters } from '../ModalFilters/ModalFilters.jsx';
import s from './DashboardHeader.module.css';

const DashboardHeader = () => {
  const { name } = useSelector(selectCurrentBoard);
  const [isModalFilters, toggleIsModalFilters] = useModal();

  return (
    <>
      <div className={s.topWrapper}>
        <h2 className={s.boardTitle}>{name}</h2>
        <button className={s.filterBtn} onClick={toggleIsModalFilters}>
          <Icon id="filter" className={s.filterIcon} size={16} />
          Filters
        </button>
      </div>
      {isModalFilters && (
        <ModalFilters toggleModal={toggleIsModalFilters} title="Filters">
          <Filters toggleModal={toggleIsModalFilters} />
        </ModalFilters>
      )}
    </>
  );
};

export default DashboardHeader;
