import { action, PokemonListState } from "../../models/pokemon";


const initialState: PokemonListState = {
  list: [],
  filteredList: [],
  process: false,
  search: "",
  message: "",
};


const PokemonListReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case "GET_POKEMON_PROCESS_START":
      return {
        ...state,
        process: true,
        message: ""
      };

    case "GET_POKEMON_PROCESS_SUCCESS":
      return {
        ...state,
        list: action.payload,
        process: false,
        message: ""
      };
    case "GET_POKEMON_PROCESS_ERROR":
      return {
        ...state,
        message: action.payload,
        process: false,
      };

      case "SET_FILTERED_POKEMON":
        return {
          ...state,
          filteredList: action.payload,
        };

        case "SET_SEARCH":
          return {
            ...state,
            search: action.payload
          };

    default:
      return state;
  }
};

export default PokemonListReducer;
