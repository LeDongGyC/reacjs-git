import React, { useState } from 'react';
// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
    const [hits, setHits] = useState([]);
    return (
        <div>
            {hits.length > 0 && hits}
        </div>
    );
};

export default HackerNews;