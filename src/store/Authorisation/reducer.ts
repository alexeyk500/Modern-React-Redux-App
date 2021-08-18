import * as actions from './actions';


type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type AuthActionsType = ReturnType<InferValueTypes<typeof actions>>;

type AuthStateType = {
  isAuth: boolean,
}

const initialState: AuthStateType = {
  isAuth: false
}

const authReducer = (state = initialState, actions: AuthActionsType): AuthStateType => {
  switch (actions.type) {
    case 'AUTHORISATION/SET_IS_AUTH': {
      return {...state, isAuth: actions.payload}
    }

      default: return state
  }
}

export default authReducer