export type TodoType = {
  title: string;
  isComplete: boolean;
};

export type FormDataType = {
  title: string;
};

export type FilterType = {
  type: "active" | "completed" | "all";
};
