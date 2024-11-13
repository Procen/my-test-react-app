import { ColorTag } from "src/modules/Tag"
import { DEFAULT_TAG_COLOR } from "src/utils/constants";

import { FC, PropsWithChildren } from "react"
import { get } from "lodash"


interface IPriorityTagProps extends PropsWithChildren {
  priority: Tasks.Priority;
}

const PRIORITY_COLOR = {
  "Low": "#0085ff",
  "Medium": "#ffa500",
  "High": "#ff0000",
}

export const PriorityTagColor: FC<IPriorityTagProps> = ({ priority }) => {
  return <ColorTag borderColor={get(PRIORITY_COLOR, priority, DEFAULT_TAG_COLOR)} textColor="black">{priority}</ColorTag>

}

export default PriorityTagColor;