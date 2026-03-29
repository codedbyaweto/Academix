const Home = () => {
    return (
        <div className="home">
            <h1 className="home-title">Greenspring Report App</h1>

            <p className="home-subtitle">
                Manage student results, track performance, and analyze scores easily.
            </p>

            <div className="home-actions">
                <a href="/add" className="home-btn">
                    Add Result
                </a>

                <a href="/results" className="home-btn secondary">
                    View Results
                </a>
            </div>
        </div>
    );
};

export default Home;