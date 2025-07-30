import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <nav>
                <Link to="/Login">Login</Link>
            </nav>
        </div>
    );
};

export default Home;