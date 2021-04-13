
import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import {Spinner} from 'react-bootstrap';

function CallAPI(props) {
    const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [search, setSearch] = useState('redux');
  const [url, setUrl] = useState(
    `http://hn.algolia.com/api/v1/search?query=${query}`,
  )
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      const result = await axios(url);
      
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
    return (
        <Fragment>
      <input
        type="text"
        onChange={event => setQuery(event.target.value)}
      />
       <button type="button" onClick={() => setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)}>
        Search
      </button>

      {isLoading ? (
        <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
    );
}

export default CallAPI;