import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsSouceItem from '../Card/NewsSouceItem';
function NewsSources(props) {
    const [articles, setarticles] = useState([]);
    const [allarticales, setallarticales] = useState([]);
    const [page, setpage] = useState(0);
    const [loading, setloading] = useState(true);
    const [totalResults, settotalResults] = useState(0);
    const fetchData = async () => {
        setloading(true);
        let url = `https://saurav.tech/NewsAPI/everything/${props.source}.json`;
        const response = await fetch(url);
        const parsedData = await response.json();
        setallarticales(parsedData.articles);
        setarticles(parsedData.articles.slice(0, 6));
        settotalResults(parsedData.totalResults);
        setloading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const loadMoreData = async () => {
        setloading(true);
        let currpage = page + 1;
        setpage(currpage);
        let totnew = currpage * 6;
        setarticles(articles.concat(allarticales.slice(totnew, totnew + 6)));
        setloading(false);
    };

    const newsSourceName = [
        { value: 'BBC News', code: 'bbc-news' },
        { value: 'CNN', code: 'cnn' },
        { value: 'Fox News', code: 'fox-news' },
        { value: 'Google News', code: 'google-news' },
    ];
    const getNewsSource = (string) => {
        for (let i = 0; i < 6; i++) {
            if (string === newsSourceName[i].code) {
                return newsSourceName[i].value;
            }
        }
    };
    return (
        <div style={{ marginTop: '80px' }}>
            {loading && <Spinner />}
            {!loading && (
                <h1 className='mt-3 text-center'>
                    Everything on {getNewsSource(props.source)}
                </h1>
            )}
            {!loading && (
                <InfiniteScroll
                    dataLength={articles.length}
                    next={loadMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                            <br />
                            <b>
                                Thank you for reading{' '}
                                {/* {capitalizeFirstLetter(props.category)} News of{' '}
                            {getNewsSource(props.country)} */}
                            </b>
                        </p>
                    }
                >
                    <div className='container mt-3 mb-5'>
                        <div className='row row-cols-1 row-cols-md-3 g-4'>
                            {!loading &&
                                articles.map((article) => {
                                    if (article.urlToImage) {
                                        return (
                                            <NewsSouceItem
                                                key={article.url}
                                                article={article}
                                            />
                                        );
                                    }
                                })}
                        </div>
                    </div>
                </InfiniteScroll>
            )}
        </div>
    );
}

export default NewsSources;
