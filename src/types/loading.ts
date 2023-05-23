export enum LoadingActionType {
  START_LOADING = 'START_LOADING',
  STOP_LOADING = 'STOP_LOADING'
}

export interface LoadingStateType {
  loading: {
    isLoading: boolean
  }
}

interface startLoading {
  type: LoadingActionType.START_LOADING
}

interface stopLoading {
  type: LoadingActionType.STOP_LOADING
}

export type LoadingAction = startLoading | stopLoading;