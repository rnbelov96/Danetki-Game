import { QueryStringData } from '../types';

export default (queryStringData: QueryStringData) => {
  const queryString = [];

  if (queryStringData.category.length !== 0) {
    queryString.push(`category=${queryStringData.category.join(',')}`);
  }
  if (queryStringData.difficulty.length !== 0) {
    queryString.push(`difficulty=${queryStringData.difficulty.join(',')}`);
  }
  return queryString.join('&');
};
