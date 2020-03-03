import React, { useReducer, createContext, useContext } from "react";
import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER,
  BUY_SKIN
} from "./actions";

import { HUSTLERS, HUSTLES } from "./hustlerConfig";

// IMPORTANT this is our state that will be used everywhere.

let initState = {
  disposableCoins: 0,
  everCoins: 0,
  passiveInterval: null,
  hustles: {
    coinJar: {
      cost: 0,
      rate: 0
    }
  },
  hustlers: {
    // When a hustler becomes true he'll automatically be in here
  }
  // owned skins: {
  //   pants,
  //   shirts,
  // }

  /// equipped skins
};

// IMPORTANT -- this variable creates context using our globalState above

const GlobalContext = createContext(null);

// IMPORTANT -- This is our passive income custom hook

export const usePassiveClick = () => {};

//
// IMPORTANT -- this reducer is going to respond to our dispatches
// (actions) and do something with them. i.e. if I click a button
// which dispatches an "INCREMENT_COINS" request, it will return
// what is written below that case

// custom hook usePassiveCounter

//setinterval( ,1000)

export const reducer = (state, action) => {
  // WHENEVER SOMETHING HAPPENS, SET IT UP TO POST TO THE DB
  // WHENEVER YOU START THE APP, GET FROM MONGOOSE
  switch (action.type) {
    case USE_HUSTLE:
      return {
        ...state,
        disposableCoins: state.disposableCoins + HUSTLES[action.hustle].rate
      };

    case USE_PASSIVE_HUSTLE:
      let newDisposableCoins = 0;
      console.log("hello");
      for (let hustlerType of Object.keys(HUSTLERS)) {
        if (state.hustlers[hustlerType]) {
          newDisposableCoins += HUSTLERS[hustlerType].rate;
        }
      }

      console.log({
        ...state,
        disposableCoins: state.disposableCoins + newDisposableCoins
      });

      return {
        ...state,
        disposableCoins: state.disposableCoins + newDisposableCoins
      };

    case INITIALIZE_PASSIVE_INTERVAL:
      return {
        ...state,
        passiveInterval: action.passiveInterval
      };

    case BUY_HUSTLE:

    if (state.disposableCoins >= HUSTLES[action.hustle].cost) {

      return {
        ...state,
        disposableCoins: state.disposableCoins - HUSTLES[action.hustle].cost,
        hustles: {
          ...state.hustles,
          [action.hustle]: true
        }
      };
    } else {
        return {
          ...state
        };
      }


    case BUY_HUSTLER:
      console.log(state.disposableCoins >= HUSTLERS[action.hustler].cost);
      // cost of hustlers
      if (state.disposableCoins >= HUSTLERS[action.hustler].cost) {
        // console.log({
        //   ...state,
        //   disposableCoins:
        //     state.disposableCoins - HUSTLERS[action.hustler].cost,
        //   hustlers: {
        //     ...state.hustlers,
        //     [action.hustler]: true
        //   }
        // });
        return {
          ...state,
          disposableCoins:
            state.disposableCoins - HUSTLERS[action.hustler].cost,
          hustlers: {
            ...state.hustlers,
            [action.hustler]: true
          }
        };
      } else {
        return {
          ...state
        };
      }

    // case BUY_SKIN:
    //   // cost of hustlers
    //   return {
    //     ...state,
    //     disposableCoins: state.disposableCoins - HUSTLERS[action.hustler].cost,
    //     hustlers: {
    //       ...state.hustlers,
    //       [action.hustler]: true
    //     }
    //   };

    // case buy skin
    // when you click the button, progress bar increnets
    default:
      throw new Error(`${action.type} is not a valid action.`);
  }
};
// IMPORTANT --- figure this out

// setInterval(dispatch(USE_PASSIVE_HUSTLE, 1000))

// IMPORTANT -- This is our provider. Basically, whatever is wrapped
// in here has the context that we've given it.

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalState() {
  return useContext(GlobalContext);
}
