import React, { useState } from 'react';
// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
    const [head, setHead] = useState([]);
    return (
        <div>
            {head.length > 0 && hi}
        </div>
    );
};

export default HackerNews;