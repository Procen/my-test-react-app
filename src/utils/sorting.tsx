import { Sorting } from "./enums";

export const sortByNumber = (a: number | null, b: number | null, sortType: Common.Sorting) => {
  if (sortType === Sorting.Asc) {
    return Number(a) - Number(b);
  } else {
    return Number(b) - Number(a);
  }
}

export const sortByString = (a: string | null, b: string | null, sortType: Common.Sorting) => {
  if (sortType === Sorting.Asc) {
    return (a || "").localeCompare(b || "");
  } else {
    return (b || "").localeCompare(a || "");
  }
}

export const sortByDate = (a: string, b: string, sortType: Common.Sorting) => {
  if (sortType === Sorting.Asc) {
    return Date.parse(a) - Date.parse(b);
  } else {
    return Date.parse(b) - Date.parse(a);
  }
}


