import s from './DashboardPage.module.css';
import { AddButton } from '../../components/AddButton/AddButton.jsx';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader.jsx';
import { useState } from 'react';
import { Icon } from '../../components/Icon/Icon.jsx';

const MainDashboardPage = () => {
  const [isAddColBtn, setIsAddColBtn] = useState(false);

  const emptyBoardAddButtonTitle = 'Add column';
  // const fillBoardAddButtonTitle = 'Add another column';

  const columnTitle = 'To Do';

  return (
    <div className="container">
      <DashboardHeader />

      {isAddColBtn && (
        <button className={s.addColBtn}>
          <AddButton color="light" width={28} height={28} iconSize={14} />
          {emptyBoardAddButtonTitle}
        </button>
      )}

      <div className={s.columnContainer}>
        <div className={s.columnTitleWrapper}>
          <p className={s.columnTitle}>{columnTitle}</p>
          <div className={s.columnTitleBtns}>
            <button>
              <Icon id="pencil" className={s.columnTitleIcon} size={16} />
            </button>
            <button>
              <Icon id="trash" className={s.columnTitleIcon} size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboardPage;
