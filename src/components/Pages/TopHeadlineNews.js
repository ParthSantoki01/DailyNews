import React, { useEffect, useState } from 'react';
import Newsitem from '../Card/Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
function TopHeadlineNews(props) {
    const [articles, setarticles] = useState([]);
    const [allarticales, setallarticales] = useState([]);
    const [page, setpage] = useState(0);
    const [loading, setloading] = useState(true);
    const [totalResults, settotalResults] = useState(0);
    const fetchData = async () => {
        setloading(true);
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`;
        const response = await fetch(url);
        const parsedData = await response.json();
        setallarticales(parsedData.articles);
        setarticles(parsedData.articles.slice(0, 9));
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
        let totnew = currpage * 9;
        setarticles(articles.concat(allarticales.slice(totnew, totnew + 9)));
        setloading(false);
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const countryName = [
        { value: 'India', code: 'in' },
        { value: 'USA', code: 'us' },
        { value: 'Australia', code: 'au' },
        { value: 'Russia', code: 'ru' },
        { value: 'France', code: 'fr' },
        { value: 'United Kingdom', code: 'gb' },
    ];
    const getCountryName = (string) => {
        for (let i = 0; i < 6; i++) {
            if (string === countryName[i].code) {
                return countryName[i].value;
            }
        }
    };

    return (
        <div style={{ marginTop: '80px' }}>
            {loading && <Spinner />}
            {!loading && (
                <h1 className='mt-3 text-center'>
                    {props.headline} - {capitalizeFirstLetter(props.category)}{' '}
                    News {getCountryName(props.country)}
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
                                {capitalizeFirstLetter(props.category)} News of{' '}
                                {getCountryName(props.country)}
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
                                            <Newsitem
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

TopHeadlineNews.defaultProps = {
    headline: 'Top Headlines',
    category: '',
    country: 'in',
};
export default TopHeadlineNews;
