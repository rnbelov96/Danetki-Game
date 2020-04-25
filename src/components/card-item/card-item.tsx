import * as React from 'react';
import { Card } from '../../types';
import { STATIC_URL } from '../../const';

interface Props {
  card: Card
}

const CardItem: React.FC<Props> = (props: Props) => {
  const { card } = props;

  const frontImgEl = React.useRef<HTMLImageElement>(null);
  const backImgEl = React.useRef<HTMLImageElement>(null);
  const flipBtnEl = React.useRef<HTMLButtonElement>(null);

  let category: string;

  switch (card.category) {
    case 'money':
      category = 'Деньги, власть и слава';
      break;
    case 'cases':
      category = 'Случай из жизни';
      break;
    case 'passion':
      category = 'Страсти-мордасти';
      break;
    default:
      category = '-';
      break;
  }
  return (
    <div className="card">
      <div>
        <img src={`${STATIC_URL}${card.frontImgSrc}`} ref={frontImgEl} className="card-img-top card-img-front" alt="..." />
        <img src={`${STATIC_URL}${card.backImgSrc}`} ref={backImgEl} className="card-img-top card-img-back" alt="..." />
      </div>
      <div className="card-body">
        <p className="card-text">
          <span className="font-weight-bold">Категория</span>
          :
          {` ${category}`}
        </p>
        <p className="card-text">
          <span className="font-weight-bold">Сложность</span>
          :
          {` ${card.difficulty}`}
        </p>
        <button
          type="button"
          ref={flipBtnEl}
          className="btn btn-primary d-block mx-auto"
          onClick={() => {
            if (frontImgEl.current && backImgEl.current && flipBtnEl.current) {
              if (frontImgEl.current.style.transform !== 'rotateY(-90deg)') {
                frontImgEl.current.style.transitionDelay = '0s';
                backImgEl.current.style.transitionDelay = '0.6s';
                frontImgEl.current.style.transform = 'rotateY(-90deg)';
                backImgEl.current.style.transform = 'none';
                flipBtnEl.current.textContent = 'Убрать ответ';
                flipBtnEl.current.disabled = true;
                setTimeout(() => {
                  if (flipBtnEl.current) {
                    flipBtnEl.current.disabled = false;
                  }
                }, 1000);
              } else {
                frontImgEl.current.style.transitionDelay = '0.6s';
                backImgEl.current.style.transitionDelay = '0s';
                frontImgEl.current.style.transform = 'none';
                backImgEl.current.style.transform = 'rotateY(-90deg)';
                flipBtnEl.current.textContent = 'Показать ответ';
                flipBtnEl.current.disabled = true;
                setTimeout(() => {
                  if (flipBtnEl.current) {
                    flipBtnEl.current.disabled = false;
                  }
                }, 1000);
              }
            }
          }}
        >
          Показать ответ
        </button>
      </div>
    </div>
  );
};

export default CardItem;
