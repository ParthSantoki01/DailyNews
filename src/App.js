import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Country from './components/Pages/Country';
import Navbar from './components/Card/Navbar';
import HomePage from './components/Pages/HomePage';
import TopHeadlineNews from './components/Pages/TopHeadlineNews';
import NewsSources from './components/Pages/NewsSources';
import Sources from './components/Pages/Sources';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route
                        exact
                        path='/general'
                        element={
                            <TopHeadlineNews
                                key='general'
                                category='general'
                                country='in'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/business'
                        element={
                            <TopHeadlineNews
                                key='business'
                                category='business'
                                country='in'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/entertainment'
                        element={
                            <TopHeadlineNews
                                key='entertainment'
                                category='entertainment'
                                country='in'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/health'
                        element={
                            <TopHeadlineNews
                                key='health'
                                category='health'
                                country='in'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/science'
                        element={
                            <TopHeadlineNews
                                key='science'
                                category='science'
                                country='in'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/sports'
                        element={
                            <TopHeadlineNews
                                key='sports'
                                category='sports'
                                country='in'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/technology'
                        element={
                            <TopHeadlineNews
                                key='technology'
                                category='technology'
                                country='in'
                            />
                        }
                    />
                    <Route exact path='/country' element={<Country />} />
                    <Route
                        exact
                        path='/country/in/general'
                        element={
                            <TopHeadlineNews
                                key='ingeneral'
                                category='general'
                                country='in'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/in/business'
                        element={
                            <TopHeadlineNews
                                key='inbusiness'
                                category='business'
                                country='in'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/in/entertainment'
                        element={
                            <TopHeadlineNews
                                key='inentertainment'
                                category='entertainment'
                                country='in'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/in/health'
                        element={
                            <TopHeadlineNews
                                key='inhealth'
                                category='health'
                                country='in'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/in/science'
                        element={
                            <TopHeadlineNews
                                key='inscience'
                                category='science'
                                country='in'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/in/sports'
                        element={
                            <TopHeadlineNews
                                key='insports'
                                category='sports'
                                country='in'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/in/technology'
                        element={
                            <TopHeadlineNews
                                key='intechnology'
                                category='technology'
                                country='in'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/us/general'
                        element={
                            <TopHeadlineNews
                                key='usgeneral'
                                category='general'
                                country='us'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/us/business'
                        element={
                            <TopHeadlineNews
                                key='usbusiness'
                                category='business'
                                country='us'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/us/entertainment'
                        element={
                            <TopHeadlineNews
                                key='usentertainment'
                                category='entertainment'
                                country='us'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/us/health'
                        element={
                            <TopHeadlineNews
                                key='ushealth'
                                category='health'
                                country='us'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/us/science'
                        element={
                            <TopHeadlineNews
                                key='usscience'
                                category='science'
                                country='us'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/us/sports'
                        element={
                            <TopHeadlineNews
                                key='ussports'
                                category='sports'
                                country='us'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/us/technology'
                        element={
                            <TopHeadlineNews
                                key='ustechnology'
                                category='technology'
                                country='us'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/fr/general'
                        element={
                            <TopHeadlineNews
                                key='frgeneral'
                                category='general'
                                country='fr'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/fr/business'
                        element={
                            <TopHeadlineNews
                                key='frbusiness'
                                category='business'
                                country='fr'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/fr/entertainment'
                        element={
                            <TopHeadlineNews
                                key='frentertainment'
                                category='entertainment'
                                country='fr'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/fr/health'
                        element={
                            <TopHeadlineNews
                                key='frhealth'
                                category='health'
                                country='fr'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/fr/science'
                        element={
                            <TopHeadlineNews
                                key='frscience'
                                category='science'
                                country='fr'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/fr/sports'
                        element={
                            <TopHeadlineNews
                                key='frsports'
                                category='sports'
                                country='fr'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/fr/technology'
                        element={
                            <TopHeadlineNews
                                key='frtechnology'
                                category='technology'
                                country='fr'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/ru/general'
                        element={
                            <TopHeadlineNews
                                key='rugeneral'
                                category='general'
                                country='ru'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/ru/business'
                        element={
                            <TopHeadlineNews
                                key='rubusiness'
                                category='business'
                                country='ru'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/ru/entertainment'
                        element={
                            <TopHeadlineNews
                                key='ruentertainment'
                                category='entertainment'
                                country='ru'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/ru/health'
                        element={
                            <TopHeadlineNews
                                key='ruhealth'
                                category='health'
                                country='ru'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/ru/science'
                        element={
                            <TopHeadlineNews
                                key='ruscience'
                                category='science'
                                country='ru'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/ru/sports'
                        element={
                            <TopHeadlineNews
                                key='rusports'
                                category='sports'
                                country='ru'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/ru/technology'
                        element={
                            <TopHeadlineNews
                                key='rutechnology'
                                category='technology'
                                country='ru'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/au/general'
                        element={
                            <TopHeadlineNews
                                key='augeneral'
                                category='general'
                                country='au'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/au/business'
                        element={
                            <TopHeadlineNews
                                key='aubusiness'
                                category='business'
                                country='au'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/au/entertainment'
                        element={
                            <TopHeadlineNews
                                key='auentertainment'
                                category='entertainment'
                                country='au'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/au/health'
                        element={
                            <TopHeadlineNews
                                key='auhealth'
                                category='health'
                                country='au'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/au/science'
                        element={
                            <TopHeadlineNews
                                key='auscience'
                                category='science'
                                country='au'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/au/sports'
                        element={
                            <TopHeadlineNews
                                key='ausports'
                                category='sports'
                                country='au'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/au/technology'
                        element={
                            <TopHeadlineNews
                                key='autechnology'
                                category='technology'
                                country='au'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/uk/general'
                        element={
                            <TopHeadlineNews
                                key='ukgeneral'
                                category='general'
                                country='gb'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/uk/business'
                        element={
                            <TopHeadlineNews
                                key='ukbusiness'
                                category='business'
                                country='gb'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/uk/entertainment'
                        element={
                            <TopHeadlineNews
                                key='ukentertainment'
                                category='entertainment'
                                country='gb'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/uk/health'
                        element={
                            <TopHeadlineNews
                                key='ukhealth'
                                category='health'
                                country='gb'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/uk/science'
                        element={
                            <TopHeadlineNews
                                key='ukscience'
                                category='science'
                                country='gb'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/uk/sports'
                        element={
                            <TopHeadlineNews
                                key='uksports'
                                category='sports'
                                country='gb'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/country/uk/technology'
                        element={
                            <TopHeadlineNews
                                key='uktechnology'
                                category='technology'
                                country='gb'
                            />
                        }
                    />
                    <Route
                        exact
                        path='/newsportal/bbc'
                        element={<NewsSources key='bbc' source='bbc-news' />}
                    />
                    <Route
                        exact
                        path='/newsportal/fox'
                        element={<NewsSources key='fox' source='fox-news' />}
                    />
                    <Route
                        exact
                        path='/newsportal/cnn'
                        element={<NewsSources key='cnn' source='cnn' />}
                    />
                    <Route
                        exact
                        path='/newsportal/google'
                        element={
                            <NewsSources key='google' source='google-news' />
                        }
                    />
                    <Route exact path='/sources' element={<Sources />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
