import * as React from 'react';

interface Props {}

const LoadingBLock: React.FC<Props> = () => (
  <div className="loading-block">
    <h2 className="loading-block__text text-center">Пожалуйста, подождите, идет загрузка списка карточек.</h2>
    <div className="lds-facebook">
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default LoadingBLock;
