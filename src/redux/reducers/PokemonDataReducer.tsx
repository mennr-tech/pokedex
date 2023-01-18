import { action, PokemonDataState, PokemonFullData } from "../../models/pokemon";

const initialState: PokemonDataState = {
  data: {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    weight: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: "",
    moves: [],
    name: "",
    order: 0,
    past_types: [],
    sprites: {
      back_default: null,
      back_female: null,
      back_shiny: null,
      back_shiny_female: null,
      front_default: null,
      front_female: null,
      front_shiny: null,
      front_shiny_female: null,
    },
    species: {
      name: "",
      url: ""
    },
    stats: [],
    types: []
  },
  list: [],
  process: false,
  message: ""
};


const PokemonDataReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case "GET_POKEMON_DATA_PROCESS_START":
      return {
        ...state,
        process: true,
        message: ""
      };

    case "GET_POKEMON_DATA_PROCESS_SUCCESS":
      var list:PokemonFullData[] = state.list;
      const dataAvailable = list.find((ele) => {
        return ele.name === action.payload.name
      })
      if(!dataAvailable) {
        if(localStorage.getItem('history')) {
          var history: string[] = [];
          try {
            history = JSON.parse(localStorage.getItem('history') || "[]");
          }
          catch (error) {
            history = [];
          }
          if(!history.find((ele: string) => ele == action.payload.name)) {
            history.push(action.payload.name);
            console.log("history after push => ", history);
            localStorage.setItem('history', JSON.stringify(history));
          }
        }
        else {
          localStorage.setItem('history', JSON.stringify([action.payload.name]));
          console.log([action.payload.name])
        }
        list.push(action.payload);
      }
      return {
        ...state,
        data: action.payload,
        process: false,
        list: list,
        message: ""
      };
    case "GET_POKEMON_DATA_PROCESS_ERROR":
      return {
        ...state,
        message: action.payload,
        process: false,
      };

    default:
      return state;
  }
};

export default PokemonDataReducer;
