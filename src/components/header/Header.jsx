import logoAnime from '../../assets/logoAnime.png'
import search from '../../assets/search.png'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import style from './header.module.scss'   

export default function Header() {
    return(
        <BrowserRouter>
            <header className={style.header}>
                <section className={style.logoHeader}>
                    <img src={logoAnime} alt="Logo de anime do site, olhos de anime estilo manga"/>
                    <h1>Mangato</h1>
                </section>
            <nav className={style.navLinks}>
                <ul>
                    <li><Link className={style.link} clasto='/'>Inicio</Link></li>
                    <li><Link className={style.link} to='/'>Animes</Link></li>
                </ul>
            </nav>
            <section className={style.barraPesquisa}>
                <input type="search" name="" id="" placeholder='O que você procura ?'/>
                <button><img src={search} alt=""/></button>
            </section>
            </header>
            <Routes>
                <Route path='/' element={<Inicio/>} />
                <Route path='/' element={<Inicio/>} />
            </Routes>
        </BrowserRouter>
    )
}