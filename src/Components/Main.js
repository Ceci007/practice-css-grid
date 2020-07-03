import React from 'react';
import './main.css';

const Main = () => {
    return (
        <main className="main-container">
            <h3 className="headline-3">Technologies</h3>
            <article className="article">
                    <div className="article__img"><img src="./img/design.jpg" width="300" /></div>
                    <div className="article__content">
                        <p className="article__content--p">
                            For a couple of decades now, designers have used Photoshop to mock up Web page designs. 
                            However, that work generally results in a static graphic of the page, which has to be 
                            translated by a developer into the components of a Web page: HTML files and 
                            Web-compatible image files.
                        </p>
                        <button className="article__content--button">read more</button>
                    </div>
            </article>
            <div className="more-articles">
                <div className="card-container">
                    <img src="./img/animations.png" />
                </div>
                <div className="card-container">
                    <img src="./img/grid-design.jpg" />
                </div>
                <div className="card-container">
                    <img src="./img/svg.png" />
                </div>
                <div className="card-container">
                    <img src="./img/style.png" /> 
                </div>
                <div className="card-container">
                    <img src="./img/css-grid.png" /> 
                </div>
            </div>
            <aside className="comments">
                <div className="card">
                    <div className="card__img"><img src="./img/user-1.jpg" width="60" />Sara</div>
                    <p>
                        Photoshop is an integral component of our curriculum, both as a professional education facility that provides instruction to junior and senior high schools in digital media communications.
                    </p>
                    <div className="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                </div>
                <div className="card">
                    <div className="card__img"><img src="./img/user-2.jpg" width="60" />Tiffany</div>
                    <p>
                        I'm a video maker and photographer, and I don't see an inappropriate scenario for this software. I don't deal strictly with graphics, for that you can work with Photoshop in combination with Illustrator, but for my work as a photographer it does everything.
                    </p>
                    <div className="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                </div>
                <div className="card">
                    <div className="card__img"><img src="./img/user-3.jpg" width="60" />John</div>
                    <p>
                        The graphic design department uses Adobe Photoshop to create and develop all the graphic content for our company, whether it is for advertising posters or for our social networks, it is a powerful tool that you can learn to use in a short time.
                    </p>
                    <div className="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
                </div>
            </aside>
        </main>
    );
}

export default Main;