import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonDataReducer from "./PokemonDataReducer";

const rootReducer = combineReducers({
  PokemonListReducer,
  PokemonDataReducer
});

export default rootReducer;
