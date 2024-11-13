import { isEmpty } from "lodash"

export const formatText = (text: string, defaultValue: string = "n/a") => {
  if(isEmpty(text)) return defaultValue;

  return text;
}