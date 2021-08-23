export async function getComicsData(pageNumber) {
    const cgc = await fetch('https://collective-stock.vercel.app/api/ebay/comics?page_number=1')
    const j = await cgc.json()

    return j
}