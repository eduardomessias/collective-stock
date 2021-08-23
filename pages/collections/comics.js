import { getComicsData } from '../../lib/comics'

export async function getStaticProps() {
    const data = await getComicsData(1)

    return {
        props: {
            data
        }
    }
}

export default function Comics ({data}) {
    const comicsList = data.map((comics) => <p>{comics.title}</p>)
    return (
        <>
        <h1>Hello, comics collection!</h1>
        {comicsList}        
        </>
    )
}