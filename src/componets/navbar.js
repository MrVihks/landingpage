import styles from "../styles/navbar.module.css"
export default function Navbar(){
    return(
        <>
            <div >
                <nav id={styles.background}>
                    <a>Inicio</a>
                    <a>Produtos</a>
                    <a>Sobre nós</a>
                </nav>
            </div>
        </>
    )
}