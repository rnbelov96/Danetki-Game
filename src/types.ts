export interface Card {
  frontImgSrc: string,
  backImgSrc: string,
  difficulty: string,
  category: string,
  _id: number,
}

export interface QueryStringData {
  category: string[],
  difficulty: string[],
}

export enum FilterType {
  CATEGORY,
  DIFFICULTY
}
