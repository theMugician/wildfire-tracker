//Scrape Wildire Data
import axios from 'axios'
import cheerio from 'cheerio'
    
const url = 'http://bcfireinfo.for.gov.bc.ca/hprScripts/WildfireNews/Fires.asp?Mode=normal&AllFires=1&FC=0'

const scraper = () => {
	axios(url)
  .then(response => {
    const html = response.data
    buildFireData(html)
  })
  .catch(console.error)
}

const buildFireData = (html) => {
	let object = []
	const $ = cheerio.load(html)
	let row = $('table tbody tr')
	$(row).each((index, element) => {

		if(index !== 0) {
	    const tds = $(element).find('td');

	    const fireNo = $(tds[1]).text();
	    const latLon = $($(tds[1]).find('a')).attr('href')
	    const [lon, lat] = getLatLon(latLon)
	    const location = $(tds[2]).text();
	    const discoveryDate = $(tds[3]).text();
	    const status = $(tds[4]).text();
	    const hectares = $(tds[5]).text();

	    if(status !== 'Out') {
	    	const tableRow = { fireNo, lat, lon, location, discoveryDate, status, hectares }
	    	object.push(tableRow)
	    }
	  }

		//console.log($(element).find('td').text())
	})

	console.log(object)

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

// Fetch data
// Target data 
// Build object
// POST object