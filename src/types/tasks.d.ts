declare namespace Tasks {
  export interface ListItem {
    id: number;
    title: string;
    description: string;
    priority: Priority;
    dueDate: string;
    createdAt: string;
    storyPoints: StoryPoints;
  }

  export type Priority = "Low" | "Medium" | "Hight";
  export type StoryPoints = 1 | 2 | 3 | 5 | 8;
}
