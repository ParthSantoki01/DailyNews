import React from 'react';
import '../style.css';
function Newsitem(props) {
    const removeSpace = (text) => {
        let newText = text.split(/[ ]+/);
        newText = newText.join(' ');
        if (newText[newText.length - 1] === ' ') {
            newText = newText.substring(0, newText.length - 1);
        }
        return newText;
    };

    return (
        <div className='col'>
            <div className='card h-100 mb-3 w-100 shadow bg-body hovereffecs rounded-3'>
                <span className='position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger'>
                    {props.article.source.name}
                </span>
                <img
                    style={{
                        maxWidth: '100%',
                        maxHeight: '35vh',
                        margin: 'auto',
                    }}
                    src={
                        props.article.urlToImage ||
                        'https://picsum.photos/300/200?random=1'
                    }
                    className='card-img-top'
                    alt=''
                />
                <div className='card-body'>
                    <h5 className='card-title'>
                        {removeSpace(props.article.title)}
                    </h5>
                    <p className='card-text'>
                        <small className='text-muted'>
                            publishedAt -{' '}
                            {new Date(props.article.publishedAt).toGMTString()}
                        </small>
                    </p>
                </div>
                <div className='card-footer d-flex justify-content-center p-1 bg-light mt'>
                    <a
                        href={props.article.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-outline-dark btn-sm stretched-link'
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}

Newsitem.defultprops = {
    title: 'Hii this is funny Title',
};

export default Newsitem;
