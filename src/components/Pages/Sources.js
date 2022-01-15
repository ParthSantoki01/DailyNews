import React, { useEffect, useState } from 'react';
import SourceCard from '../Card/SourceCard';
import Spinner from './Spinner';
function Sources(props) {
    const [sources, setsources] = useState([]);
    const [loading, setloading] = useState(true);
    const fetchData = async () => {
        document.title = 'News Sources - Daily News';
        setloading(true);
        let url = `https://saurav.tech/NewsAPI/sources.json`;
        const response = await fetch(url);
        const parsedData = await response.json();
        setsources(parsedData.sources);
        setloading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const sourcecard = [];
    for (let i = 0; i < sources.length; i++) {
        sourcecard.push(<SourceCard key={i} source={sources[i]} />);
    }
    return (
        <div style={{ marginTop: '80px' }}>
            {loading && <Spinner />}
            {!loading && <h1 className='mt-3 text-center'>All News Sources</h1>}
            {!loading && (
                <div className='container mt-3 mb-5'>
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {sourcecard}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sources;
