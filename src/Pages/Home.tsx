import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../Search.module.css';
import { getPokemonList } from "../api/api";
import { RootState } from "../redux/store";
import {
  GET_POKEMON_PROCESS_START,
  GET_POKEMON_PROCESS_SUCCESS,
  SET_FILTERED_POKEMON,
  SET_SEARCH,
} from "../redux/actions/pokemon";
import { PokemonData } from "../models/pokemon";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const PokemonList = useSelector(
    (state: RootState) => state.PokemonListReducer
  );
  const [history, setHistory] = useState<string[]>();

  useEffect(() => {
    if (PokemonList.list.length == 0) {
      dispatch(GET_POKEMON_PROCESS_START());
      getPokemonList().then((json) => {
        dispatch(GET_POKEMON_PROCESS_SUCCESS(json.results));
      });
    }

    if(localStorage.getItem('history')) {
      try {
        var searchHistory: string[] = JSON.parse(localStorage.getItem('history') || "[]");
        setHistory(searchHistory);
      }
      catch (error) {
        clearHistory();
      }
    }
  }, []);

  useEffect(() => {
    if (PokemonList.search == "") {
      dispatch(SET_FILTERED_POKEMON([]));
    } else {
      const filtereddata = PokemonList.list.filter((ele: PokemonData) => {
        return ele.name.toLocaleLowerCase().includes(PokemonList.search.toLocaleLowerCase());
      });
      dispatch(SET_FILTERED_POKEMON(filtereddata));
    }
  }, [PokemonList.search]);

  const onChangeSearch = (element: any) => {
    dispatch(SET_SEARCH(element.target.value));
  };

  const clearHistory = () => {
    localStorage.setItem("history", "[]");
    setHistory([]);
  }

  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.search_input}>
        <input type="text" placeholder="Type to search pokemon ex. Pikachu" value={PokemonList.search} onChange={onChangeSearch} />
        <div className={styles.autocom_box}>
          {
            (PokemonList.search == "" && history?.length != 0) && (
              <>
                <li>
                  <span>
                    Recent History
                  </span>
                  <span onClick={clearHistory} className={styles.clear_history}>
                    clear history
                  </span>
                </li>
                {history?.map((ele: string) => {
                  return (
                    <li>
                      <Link to={"/" + ele}>{ele}</Link>
                    </li>
                  );
                })}
            </>
            )
          }
          {
            PokemonList.search != "" && (
              <>
                {PokemonList.filteredList.map((ele: PokemonData) => {
                  return (
                    <li>
                      <Link to={"/" + ele.name}>{ele.name}</Link>
                    </li>
                  );
                })}
              </>
            )
          }
        </div>
      </div>
    </div>
      <div className="styles.d-flex">
      </div>
    </>
  );
}
