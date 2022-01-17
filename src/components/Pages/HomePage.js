import React, { useEffect, useState } from 'react';
import Newsitem from '../Card/Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
function HomePage(props) {
    const [articles, setarticles] = useState([]);
    const [allarticales, setallarticales] = useState([]);
    const [page, setpage] = useState(0);
    const [loading, setloading] = useState(true);
    const fetchData = async () => {
        setloading(true);
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`;
        const response = await fetch(url);
        const parsedData = await response.json();
        setallarticales(parsedData.articles);
        setarticles(parsedData.articles.slice(0, 9));
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
    return (
        <div style={{ marginTop: '80px' }}>
            {loading && <Spinner />}
            {!loading && (
                <h1 className='mt-3 text-center'>Top Headlines - India</h1>
            )}
            {!loading && (
                <InfiniteScroll
                    dataLength={articles.length}
                    next={loadMoreData}
                    hasMore={articles.length !== allarticales.length}
                    loader={<Spinner />}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                            <br />
                            <b>Thank you for reading News of India</b>
                        </p>
                    }
                >
                    <div className='container mt-3 mb-5'>
                        <div className='row row-cols-1 row-cols-md-3 g-4'>
                            {articles.map((article) => {
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

export default HomePage;
