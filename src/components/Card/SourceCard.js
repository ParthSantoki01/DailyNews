import React from 'react';

function SourceCard(props) {
    const countryName = [
        { country: 'Argentina', code: 'ar' },
        { country: 'Australia', code: 'au' },
        { country: 'Austria', code: 'at' },
        { country: 'Belgium', code: 'be' },
        { country: 'Brazil', code: 'br' },
        { country: 'Bulgaria', code: 'bg' },
        { country: 'Canada', code: 'ca' },
        { country: 'China', code: 'cn' },
        { country: 'Colombia', code: 'co' },
        { country: 'Cuba', code: 'cu' },
        { country: 'Czech Republic', code: 'cz' },
        { country: 'Egypt', code: 'eg' },
        { country: 'France', code: 'fr' },
        { country: 'Germany', code: 'de' },
        { country: 'Greece', code: 'gr' },
        { country: 'Hong Kong', code: 'hk' },
        { country: 'Hungary', code: 'hu' },
        { country: 'India', code: 'in' },
        { country: 'Indonesia', code: 'id' },
        { country: 'Ireland', code: 'ie' },
        { country: 'Israel', code: 'il' },
        { country: 'Italy', code: 'it' },
        { country: 'Japan', code: 'jp' },
        { country: 'Latvia', code: 'lv' },
        { country: 'Lithuania', code: 'lt' },
        { country: 'Malaysia', code: 'my' },
        { country: 'Mexico', code: 'mx' },
        { country: 'Morocco', code: 'ma' },
        { country: 'Netherlands', code: 'nl' },
        { country: 'New Zealand', code: 'nz' },
        { country: 'Nigeria', code: 'ng' },
        { country: 'Norway', code: 'no' },
        { country: 'Philippines', code: 'ph' },
        { country: 'Poland', code: 'pl' },
        { country: 'Portugal', code: 'pt' },
        { country: 'Romania', code: 'ro' },
        { country: 'Russia', code: 'ru' },
        { country: 'Saudi Arabia', code: 'sa' },
        { country: 'Serbia', code: 'rs' },
        { country: 'Singapore', code: 'sg' },
        { country: 'Slovakia', code: 'sk' },
        { country: 'Slovenia', code: 'si' },
        { country: 'South Africa', code: 'za' },
        { country: 'South Korea', code: 'kr' },
        { country: 'Sweden', code: 'se' },
        { country: 'Switzerland', code: 'ch' },
        { country: 'Taiwan', code: 'tw' },
        { country: 'Thailand', code: 'th' },
        { country: 'Turkey', code: 'tr' },
        { country: 'UAE', code: 'ae' },
        { country: 'Ukraine', code: 'ua' },
        { country: 'United Kingdom', code: 'gb' },
        { country: 'United States', code: 'us' },
        { country: 'Venuzuela', code: 've' },
    ];

    const getCountryName = (string) => {
        for (let i = 0; i < countryName.length; i++) {
            if (string === countryName[i].code) {
                return countryName[i].country;
            }
        }
        return 'Unknown Country';
    };

    return (
        <div className='col'>
            <div className='card h-100 shadow hovereffecs rounded-3'>
                <h5 className='card-header card-title'>{props.source.name}</h5>
                <div className='card-body'>
                    <p>
                        Country :{' '}
                        <strong>{getCountryName(props.source.country)}</strong>
                    </p>
                    <p className='card-text text-wrap'>
                        {props.source.description}
                    </p>
                </div>
                <div className='card-footer d-flex justify-content-center p-1 bg-light mt'>
                    <a
                        href={props.source.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-outline-dark btn-sm stretched-link'
                    >
                        Go to Website
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SourceCard;
