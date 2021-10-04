import React, { Component } from 'react'

const Header = () => {
	return(
		<div className='header'>
			<div className='container'>
				<h1 className='header__title'>BC Wildfire Map</h1>
				<p className='header__subheading'>Current active wildfires for the province of British Columbia</p>
				<p>All wildfire data is updated one time a day at 01:00AM</p>
				<p>All wildfire data is taken from&nbsp;
					<a href='http://bcfireinfo.for.gov.bc.ca/hprScripts/WildfireNews/Fires.asp?Mode=normal&AllFires=0&FC=0'>
						BC Wildifre Services
					</a>
				</p>
			</div>
		</div>
	)
}

export default Header