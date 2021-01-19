import React, { Component } from 'react';
import Card from './Card'
import '../styles/Landing.css'

export default class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startingWidth: 70,
            width: 70,
            elementWidth: null,
            scrollSpeed: 20,
        }
    }
    // renderProjectCards = () => {

    // }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize)

        if (this.container.offsetWidth < 900) {
            this.setState({ 
                startingWidth: 100,
                width: 100,
            });
        } else if (this.container.offsetWidth < 1100) {
            this.setState({
                startingWidth: 80,
                width: 80,
                scrollSpeed: 30
             });
        }
    }
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        if (this.container.offsetWidth > 1100){
            this.setState({ 
                startingWidth: 70,
                width: 70,
                scrollSpeed: 20
            });
        } else if (this.container.offsetWidth > 900) {
            this.setState({ 
                startingWidth: 80,
                width: 80,
                scrollSpeed: 30
            });
        } else if (this.container.offsetWidth < 900) {
            this.setState({ 
                startingWidth: 100,
                width: 100
             });
        }
    }
    
    handleScroll = () => {
        let scrollTop = window.scrollY
        let width = Math.min(100, scrollTop/this.state.scrollSpeed+this.state.startingWidth);
        Math.round(width)
        // if (width === this.state.width) {
        //     return
        // }
    console.log(this.state.windowWidth);
        this.setState({
          width: width
        });
    }

    render() {
        return (
            <main ref={el => (this.container = el)}>
                <div className='background-image'>
                    <section style={{width: `${this.state.width}%`}} className='about-section'>
                        <div className='about'>
                            <img className='profile' src={require('../resources/profile2.png')} />
                            <div className='about-text'>
                                <p className='hello'>Hello!</p>
                                <p className='welcome-text'>My name is Philip. I am a software engineer based in New York. I love to build clean, tight websites and applications. I also enjoy playing video games, creating music, skateboarding, cooking, fixing and learning new things. I have worked with UX designers and created a prototype into a reality. I am fluent in HTML, Javascript, CSS, React, Express, Ruby, and Rails. See some of my work below!</p>
                            </div>
                        </div>
                        <div className='icons'>
                            <i className="devicon-html5-plain-wordmark colored"></i>
                            <i className="devicon-javascript-plain colored"></i>
                            <i className="devicon-css3-plain-wordmark colored"></i>
                            <i className="devicon-react-original-wordmark colored"></i>
                            <i className="devicon-express-original colored"></i>
                            <div style={{display: 'flex', alignItems: 'center'}}>     <i className="devicon-ruby-plain-wordmark colored"></i>
                            <i className="devicon-rails-plain-wordmark colored"></i></div>
                       

                        </div>
                    </section>
                </div>
                <section id='work' className='project-section'>
                {/* projectNumber, projectName, projectDescription, githubLink, siteLink */}
                    <p className='project-header'>My Work</p>
                    <Card projectImage='mygamelist.png' projectDescription={`MyGameList is a WIP web app that currently has full authentication, and retrieves game data from the IGDB API rendering a home page with a variety of carousels to see trending games and trailers. It will have review and rating functionality, and the ability to create ones own list of video games played to track all your games from different platforms in once place.`} projectDescription2='Technologies Used: React, CSS, Javascript, Express, SQL, PostgreSQL, bCrypt, Passport.' projectName='MyGameList' githubLink='https://github.com/pryan-x/MyGameList' 
                    // siteLink='https://steamreview.surge.sh'
                    />
                      <Card 
                    //  projectImage='mygamelist.png'
                      projectDescription={`Feature engineering script that utilizes stock symbols and dates from features to create labels for training and testing datasets. The script consolidates and transforms large datasets into a usable format with Pandas for 
                      training a LightGBM model, which is used in formulating stock trading strategies, and then exports results into csv files.
                      Through tweaking parameters and size of training sets, the correlation coefficient of the model reached a consistent .4 across multiple labels, which is on par with (if not above) industry standards for algorithms that use market indicators to predict stock price movements.`} projectDescription2='Technologies Used: Python, LightGBM, Pandas, Excel, MatPlotLib, NumPy, Backtrader.' projectName='Stock Pricing Model - Private Github (no link)' 
                    //   githubLink='https://github.com/pryan-x/MyGameList' 
                    // siteLink='https://steamreview.surge.sh'
                    />
                     <Card projectImage='pawsibly.png' projectDescription={`Pawsibly is an IOS app I made using React Native. It has hand-rolled full authentication, allowing one to save search filters. These filters then allow one to find adoptable pets within their given search parameters, such as: gender, breed, and distance.`} projectDescription2='Technologies Used: React-Native, Expo, CSS, Ruby, Rails, bCrypt.' projectName='Pawsibly' githubLink='https://github.com/pryan-x/Pawsibly' 
                    // siteLink='https://steamreview.surge.sh'
                    />
                    <Card projectImage='pawsibly.png' projectDescription={`Pawsibly is an IOS app I made using React Native. It has hand-rolled full authentication, allowing one to save search filters. These filters then allow one to find adoptable pets within their given search parameters, such as: gender, breed, and distance.`} projectDescription2='Technologies Used: React-Native, Expo, CSS, Ruby, Rails, bCrypt.' projectName='Pawsibly' githubLink='https://github.com/pryan-x/Pawsibly' 
                    // siteLink='https://steamreview.surge.sh'
                    />
                     <Card projectImage='richord.png' projectDescription={`In this project I worked in a team of three to create a website with hand-rolled full authentication. With Richord one is able to create a track using the key of C, and then save it to ones personal library of tracks with full playback pause and stop.`} projectDescription2='Technologies Used: React, CSS, Javascript, Express, bCrypt..'projectName='RICHORD' githubLink='https://github.com/ipsita999/RICHORD-APP' siteLink='http://richord.surge.sh/'
                    />
                    <Card projectImage='steamreviews.png' projectDescription={`This is a website where one can add games by searching through Steams API data and add them to a gallery. From the game gallery one is then able to navigate to a page will full details and screenshots of the game.`} projectDescription2='Technologies Used: React, CSS, Javascript.' projectName='Steam Reviews' githubLink='https://github.com/pryan-x/SteamReviews' siteLink='https://steamreview.surge.sh'/>
                    <Card projectImage='fridgefood.png' projectDescription={`To create Fridge Food I worked with 2 other software engineers and UX designers. We created an app that allows one to search ingredients one has in their fridge with any food restrictions. The results will be possible recipes one is able to create with the given ingredients.`} projectDescription2='Technologies Used: React, CSS, Javascript.' projectName='Fridge Food' githubLink='https://github.com/pryan-x/Fridge-Food' 
                    siteLink='https://fridgefood.surge.sh'
                    />
                
                   
                </section>
                <section id='contact' className='contact-section'>
                    <p className='contact-header'>Contact Me</p>
                    <div className='contact-container'>
                        <div className='contacts-left'>
                            <a className='contact' href='https://github.com/pryan-x'>
                                <img className='contact-icon' src={require('../resources/github-logo.png')} />
                                <span>GITHUB</span>
                            </a>
                            <a className='contact' href='https://www.linkedin.com/in/philip-ryan-452201196/'>
                                <img className='contact-icon' src={require('../resources/linkedin.png')} />
                                <span>LINKED IN</span>
                            </a>
                        </div>
                        <div className='contacts-right'>
                        <a className='contact' href='mailto:philip.ryan15@yahoo.com'>
                                <img className='contact-icon' src={require('../resources/mail.png')} />
                                <span>EMAIL</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}