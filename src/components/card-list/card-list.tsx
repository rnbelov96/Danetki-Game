import * as React from 'react';
import { Card } from '../../types';
import CardItem from '../card-item/card-item';

interface Props {
  cardsToRender: Card[],
  totalCardsAmount: number,
  onShowMoreButtonClick: () => void,
}

const CardList: React.FC<Props> = (props: Props) => {
  const { cardsToRender, onShowMoreButtonClick, totalCardsAmount } = props;

  return (
    <>
      <div className="cards">
        {cardsToRender.map(card => <CardItem key={card._id} card={card} />)}
      </div>
      <button
        type="button"
        className="btn btn-primary mb-2 mx-auto"
        onClick={() => onShowMoreButtonClick()}
        style={{ display: cardsToRender.length >= totalCardsAmount ? 'none' : 'block' }}
      >
        Показать больше карточек
      </button>
    </>
  );
};

export default CardList;
