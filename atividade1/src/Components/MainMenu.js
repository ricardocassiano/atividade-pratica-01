import { Link } from "react-router-dom";

export const MainMenu = () => (
        <ul>
            <li>
                <Link to="/">Blog</Link>
            </li>
            <li>
                <Link to="/about">Sobre</Link>
            </li>
            <li>
                <Link to="/descricao">Descrição</Link>
            </li>
        </ul>

);