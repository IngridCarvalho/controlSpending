import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
          setLogged(true);
        }else{
          setLogged(false);
        }
    }, [logged])

    const logout = () => {
      localStorage.removeItem('token');
      setLogged(false);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-color">
        <div className="container">
          <a className="navbar-brand" href="#">Controle de Gastos</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account">Contas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">Categorias</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/expense">Despesas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/revenue">Receitas</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Relatórios
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {
          logged &&
          <button type="button" className="btn btn-dark" onClick={logout}>Sair</button>
        }
      </nav>
    )
}

export default Header;