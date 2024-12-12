import style from '../footer/footer.module.scss'
import logoFacebook from '../../assets/logoFacebook.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoInstagram from '../../assets/logoInstagram.png'

export default function Footer(){
    return (
        <footer>
            <section className={style.contatosFooter}>
                <p>(22) 99922-00000</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="" /></a>
                    <a href=""><img src={logoLinkedin} alt="" /></a>
                    <a href=""><img src={logoInstagram} alt="" /></a>
                </nav>
            </section>
            <section className={style.copyright}>
                <p>Layout desenvolvido por Kauã Alves para fins educativos (Campinho) - 2024</p>
            </section>
        </footer>    
    )
}