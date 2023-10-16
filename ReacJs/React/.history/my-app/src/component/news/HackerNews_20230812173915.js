import React, { useState } from 'react';
// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
    const [hits, setHits] = useState([]);
    return (
        <div>
            {hits.length > 0 && hi}
        </div>
    );
};

export default HackerNews;