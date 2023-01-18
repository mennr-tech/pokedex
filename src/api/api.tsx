import { pokemonAPI } from "./url"

export const getPokemonList = () => {
    return fetch(pokemonAPI + '?limit=2000').then((res) => res.json());
}

export const getPokemonData = (name: string) => {
    return fetch(pokemonAPI + name).then((res) => res.json());
}