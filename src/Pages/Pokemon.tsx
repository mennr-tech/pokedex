import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from '../Pokemon.module.css';
import { getPokemonData } from "../api/api";
import {
  GET_POKEMON_DATA_PROCESS_START,
  GET_POKEMON_DATA_PROCESS_SUCCESS,
} from "../redux/actions/pokemon";
import { RootState } from "../redux/store";
import { move, PokemonData, states, type } from "../models/pokemon";
import {ability} from '../models/pokemon'

type Params = {
  name: string
};

export default function Pokemon() {
  const { name = "" } = useParams<Params>();
  const dispatch = useDispatch();
  const PokemonData = useSelector(
    (state: RootState) => state.PokemonDataReducer
  );

  useEffect(() => {
    dispatch(GET_POKEMON_DATA_PROCESS_START());
    const data = PokemonData.list.find((ele) => {
        return ele.name === name
    });
    if(data) {
        dispatch(GET_POKEMON_DATA_PROCESS_SUCCESS(data));
    }
    else {
        getPokemonData(name).then((json) => {
          dispatch(GET_POKEMON_DATA_PROCESS_SUCCESS(json));
        });
    }
  }, [name, PokemonData.list, dispatch]);
  return (
    <div className={styles.container}>
      <div className={styles.card}>

        <div className={styles.card_header}>
          <div className={styles.back_button}>
          <Link to="/" className={styles.previous}>&#8249; Back</Link>
          </div>
          <div className={styles.image_div}>
            <img src={PokemonData.data.sprites.front_default} alt="rover" />
          </div>
          <div className={styles.common_data_div}>
            <span className={styles.pokemon_name}>{PokemonData.data.name}</span>
            <div>
                <div className={styles.common_data}>
                  <span>height: </span>
                  <span>{PokemonData.data.height}</span>
                </div>
                <div className={styles.common_data}>
                  <span>weight: </span>
                  <span>{PokemonData.data.weight}</span>
                </div>
            </div>
          </div>
        </div>

        <div className={styles.card_body}>

          <h4>Abilities</h4>
          <div className={styles.features}>
            {
              PokemonData.data.abilities.map((ele: ability) => {
                return (
                  <div className={styles.features_data}>
                    {ele.ability.name}
                  </div>
                );
              })
            }
          </div>

          <h4>States</h4>
          <div className={styles.features}>
          {
            PokemonData.data.stats.map((ele: states) => {
              return (
                <div className={styles.features_data}>
                  <span>{ele.stat.name}: </span>
                  <span>{ele.base_stat.toString()}</span>
                </div>
              );
            })
          }
          </div>

          <h4>Types</h4>
          <div className={styles.features}>
          {
            PokemonData.data.types.map((ele: type) => {
              return (
                <div className={styles.features_data}>
                  <span>{ele.type.name}</span>
                  </div>
              );
            })
          }
          </div>

          <h4>Moves</h4>
          <div className={styles.features}>
            {
              PokemonData.data.moves.map((ele: move) => {
                return (
                  <div className={styles.features_data}>
                    {ele.move.name}
                  </div>
                );
              })
            }
          </div>

        </div>
      </div>
    </div>
  );
}
