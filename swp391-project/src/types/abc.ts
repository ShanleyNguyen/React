type stateInit = {
  value: number;
  status: string;
};

type stateInitother = {
  id?: number;
} & stateInit;

export type { stateInitother, stateInit };
