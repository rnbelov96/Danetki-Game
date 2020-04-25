import * as React from 'react';
import { FilterType } from '../../types';

interface Props {
  onCheckboxChange: (type: FilterType, value: string) => void,
}

const FilterBar: React.FC<Props> = (props: Props) => {
  const { onCheckboxChange } = props;

  return (
    <div className="filter-bar">
      <div className="filter-bar__block mb-2">
        <h2 className="filter-bar__text">Категории:</h2>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="money"
            value="money"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onCheckboxChange(FilterType.CATEGORY, e.target.value);
            }}
          />
          <label
            className="form-check-label"
            htmlFor="money"
          >
            Деньги, власть и слава
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="cases"
            value="cases"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onCheckboxChange(FilterType.CATEGORY, e.target.value);
            }}
          />
          <label
            className="form-check-label"
            htmlFor="cases"
          >
            Случай из жизни
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="passion"
            value="passion"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onCheckboxChange(FilterType.CATEGORY, e.target.value);
            }}
          />
          <label
            className="form-check-label"
            htmlFor="passion"
          >
            Страсти-мордасти
          </label>
        </div>
      </div>
      <div className="filter-bar__block">
        <h2 className="filter-bar__text">Сложность:</h2>
        <div className="filter-bar__checkboxes">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="easy"
              value="Легкая"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onCheckboxChange(FilterType.DIFFICULTY, e.target.value);
              }}
            />
            <label
              className="form-check-label"
              htmlFor="easy"
            >
              Легкая
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="medium"
              value="Средняя"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onCheckboxChange(FilterType.DIFFICULTY, e.target.value);
              }}
            />
            <label
              className="form-check-label"
              htmlFor="medium"
            >
              Средняя
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="hard"
              value="Трудная"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onCheckboxChange(FilterType.DIFFICULTY, e.target.value);
              }}
            />
            <label
              className="form-check-label"
              htmlFor="hard"
            >
              Трудная
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
