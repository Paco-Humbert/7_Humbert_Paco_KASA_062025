// Importation du composant Banner
import Banner from '../../components/Banner/Banner'
import LogementsList from '../../components/Cards/cards'


function Home() {
    return (
        <>
            <Banner page="home" content="Chez vous, partout et ailleurs" />
            <LogementsList />
        </>
    )
}


export default Home