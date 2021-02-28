import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import styles from './SearchBar.module.scss';


const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

export const SearchBar = ({initialState=''}) => {
  const searchLogo = '/assets/ic_Search.png';
  const [query, setQuery] = useState(initialState);
  const router = useRouter();
  const handleQuery = (event) => {
    setQuery(event.target.value);
  };
  const search = preventDefault(() => {
    console.log(router);
    router.push(`/items?search=${query}`)
  });
  return (
    <div className={styles.searchBar}>
      <form onSubmit={search}>
        <input type="text" placeholder="Nunca dejes de buscar" value={query} onChange={handleQuery}/>
        <button onClick={search} type="submit">
          <img src={searchLogo} alt="search logo"/>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;