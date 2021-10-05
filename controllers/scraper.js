import axios from 'axios'
import cheerio from 'cheerio'
    
const url = 'http://bcfireinfo.for.gov.bc.ca/hprScripts/WildfireNews/Fires.asp?Mode=normal&AllFires=1&FC=0'

const scraper = async () => {
	try {
		const response = await axios.get(url)
		const html = response.data
    	return buildFireData(html)
	} catch (error) {
		console.error(error)
	}
}

const buildFireData = (html) => {
	let fireData = []
	const $ = cheerio.load(html)
	let row = $('table tbody tr')
	$(row).each((index, element) => {

		if(index !== 0) {
	    const tds = $(element).find('td');

	    const fireNo = $(tds[1]).text();
	    const latLon = $($(tds[1]).find('a[target=_blank]')).attr('href')
	    const [lon, lat] = getLatLon(latLon)
	    const location = $(tds[2]).text();
	    const discoveryDate = $(tds[3]).text();
	    const status = $(tds[4]).text();
	    const hectares = $(tds[5]).text();

	    if(status !== 'Out' && lat !== undefined && lon !== undefined) {
	    	const tableRow = { fireNo, lat, lon, location, discoveryDate, status, hectares }
	    	fireData.push(tableRow)
	    }
	  }
	})

	return fireData 

}

const getLatLon = (href) => {
	let lon, lat
	const regex = /(-?\d+\.\d+),(-?\d+\.\d+)/g
	let extracted = regex.exec(href) || null
	if(extracted !== null) {
		lon = parseFloat(extracted[1])
		lat = parseFloat(extracted[2])
	}
	
	return [lon, lat]
}

export default scraper