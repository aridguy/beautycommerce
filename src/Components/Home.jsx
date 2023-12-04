import HomeImg from '../assets/home.png'

function Home () {
    return (
        <>
        <section className="home" id='home'>
            <div className="intro">
                <p>Welcome to Beauty Queen!</p>
            </div>
            <div className="content container ">
                <div className="left-side">
                    <h1>Care For Your Skin,<br /> Care For Your <br /> Beauty</h1>
                    <p>Our skin care clinic best dermatologists in <br /> Lahore and Islamabad offer premium <br /> aesthetics.</p>
                    <button className="btn btn-primary">Read more</button>
                </div>
                <div className="right-side">
                    <img className='img-fluid' src={HomeImg} alt="" />
                </div>
            </div>
        </section>
        </>
    )
}

export default Home