export const GET_POKEMON_PROCESS_START = () => {
  return {
    type: "GET_POKEMON_PROCESS_START",
  };
};

export const GET_POKEMON_PROCESS_SUCCESS = (data) => {
  return {
    type: "GET_POKEMON_PROCESS_SUCCESS",
    payload: data
  };
};

export const GET_POKEMON_PROCESS_ERROR = (error) => {
  return {
    type: "GET_POKEMON_PROCESS_ERROR",
    payload: error
  };
};

export const SET_FILTERED_POKEMON = (data) => {
  return {
    type: "SET_FILTERED_POKEMON",
    payload: data
  };
};


export const SET_SEARCH = (data) => {
  return {
    type: "SET_SEARCH",
    payload: data
  };
};

export const GET_POKEMON_DATA_PROCESS_START = () => {
  return {
    type: "GET_POKEMON_DATA_PROCESS_START",
  };
};

export const GET_POKEMON_DATA_PROCESS_SUCCESS = (data) => {
  return {
    type: "GET_POKEMON_DATA_PROCESS_SUCCESS",
    payload: data
  };
};

export const GET_POKEMON_DATA_PROCESS_ERROR = (error) => {
  return {
    type: "GET_POKEMON_DATA_PROCESS_ERROR",
    payload: error
  };
};