import * as React from 'react';
import Title from '../title/title';
import CardList from '../card-list/card-list';
import FilterBar from '../filter-bar/filter-bar';
import LoadingBLock from '../loading-block/loading-block';
import { Card, QueryStringData, FilterType } from '../../types';
import api from '../../api';
import buildQueryString from '../../utils/buildQueryString';
import { CARDS_TO_SHOW_AMOUNT } from '../../const';

interface Props {
}

interface AllCardsServerResponse {
  cards: Card[]
}

const initialQueryStringData: QueryStringData = {
  category: [],
  difficulty: [],
};

const App: React.FC<Props> = () => {
  const [isCardsLoading, setCardsLoadingStatus] = React.useState<boolean>(true);
  const [cardsList, setCardsList] = React.useState<Card[]>([]);
  const [cardsToShow, setCardsToShowAmount] = React.useState<number>(CARDS_TO_SHOW_AMOUNT);
  const [
    queryStringData, setQueryStringData,
  ] = React.useState<QueryStringData>(initialQueryStringData);

  React.useEffect(() => {
    const getAllCards = async() => {
      const res = await api.request<AllCardsServerResponse>({
        url: '/cards',
      });
      const { data } = res;
      const { cards } = data;
      setCardsList(cards);
      setCardsLoadingStatus(false);
    };
    getAllCards();
  }, []);

  React.useEffect(() => {
    const getFilteredCards = async(url: string) => {
      const res = await api.request<AllCardsServerResponse>({
        url,
      });
      const { data } = res;
      const { cards } = data;
      setCardsList(cards);
      setCardsToShowAmount(CARDS_TO_SHOW_AMOUNT);
    };

    if (isCardsLoading) {
      return;
    }
    if (queryStringData.category.length === 0 && queryStringData.difficulty.length === 0) {
      getFilteredCards('/cards');
      return;
    }
    getFilteredCards(`/cards/?${buildQueryString(queryStringData)}`);
  }, [queryStringData]);

  const handleCheckboxChange = (type: FilterType, value: string) => {
    setQueryStringData(prevState => {
      switch (type) {
        case FilterType.CATEGORY:
          const newCategoryArray = [...prevState.category];
          const categoryIndex = prevState.category.findIndex(el => el === value);
          if (categoryIndex !== -1) {
            newCategoryArray.splice(categoryIndex, 1);
          } else {
            newCategoryArray.push(value);
          }
          return {
            ...prevState,
            category: newCategoryArray,
          };

        case FilterType.DIFFICULTY:
          const newDifficultyArray = [...prevState.difficulty];
          const difficultyIndex = prevState.difficulty.findIndex(el => el === value);
          if (difficultyIndex !== -1) {
            newDifficultyArray.splice(difficultyIndex, 1);
          } else {
            newDifficultyArray.push(value);
          }
          return {
            ...prevState,
            difficulty: newDifficultyArray,
          };
        default:
          return prevState;
      }
    });
  };

  const handleShowButtonClick = () => {
    setCardsToShowAmount(prevState => prevState + CARDS_TO_SHOW_AMOUNT);
  };

  const renderApp = () => (isCardsLoading ? <LoadingBLock /> : (
    <>
      <FilterBar
        onCheckboxChange={handleCheckboxChange}
      />
      <CardList
        cardsToRender={cardsList.slice(0, cardsToShow)}
        totalCardsAmount={cardsList.length}
        onShowMoreButtonClick={handleShowButtonClick}
      />
    </>
  ));

  return (
    <>
      <Title />
      {renderApp()}
    </>
  );
};

export default App;
