import rootReducer from "../redux/reducers";

export type action = {
    type: string;
    payload: any;
};

export type PokemonData = {
    name: string,
    url: string
}

export type ability = {
    ability: {
        name: string,
        url: string,
    }
}

type form = {
    form: {
        name: string,
        url: string,
    }
}

type game_indices = {
    game_indices: {
        game_index: string,
        version: {
            name: string,
            url: string
        },
    }
}

type held_items = {
    items: {
        name: string,
        url: string
    },
    version_details: {
        rarity: Number,
        version: {
            name: string,
            url: string
        }
    }[],
}

export type move = {
    move: {
        name: string,
        url: string
    },
    version_details: {
        level_learned_at: Number,
        move_learn_method: {
            name: string,
            url: string
        },
        version_group: {
            name: string,
            url: string
        }
    }[]
}

export type states = {
    base_stat: Number,
    effort: Number,
    stat: {
        name: string,
        url: string
    },
}

export type type = {
    slot: Number,
    type: {
        name: string,
        url: string
    },
}

export type PokemonFullData = {
    abilities: ability[],
    base_experience: Number,
    forms: form[],
    game_indices: game_indices[]
    height: Number,
    weight: Number,
    held_items: held_items[],
    id: Number,
    is_default: Boolean,
    location_area_encounters: string,
    moves: move[],
    name: string,
    order: Number,
    past_types: any,
    sprites: {
        back_default: string|null,
        back_female: string|null,
        back_shiny: string|null,
        back_shiny_female: string|null,
        front_default: string|null,
        front_female: string|null,
        front_shiny: string|null,
        front_shiny_female: string|null,
    },
    species: {
        name: string,
        url: string
    },
    stats: states[],
    types: type[]
}
  
export type PokemonListState = {
    list: PokemonData[],
    filteredList: PokemonData[],
    process: Boolean,
    search: string,
    message: string
}

export type PokemonDataState = {
    data: PokemonFullData,
    list: PokemonFullData[],
    process: Boolean,
    message: string
}