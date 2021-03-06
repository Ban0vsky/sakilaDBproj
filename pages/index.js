import React, { useState } from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { CustomPagination, MoviesTable } from '../components'
import axios from 'axios'

export async function getStaticProps() {
	try {
		const { data } = await axios.get(`${process.env.APP_DOMAIN}/api/movies/0`)
		return { props: { ...data } }
	} catch (error) {
		console.error(error)
	}

	return {
		props: {
			length: 0,
			movies: []
		},
	}
}

export default function Home({ movies, length }) {
	const [data, setData] = useState(movies)
	const [page, setPage] = useState(0)

	const handlePageChange = async (page) => {
		setPage(page)
		const { data } = await axios.get(`/api/movies/${page}`)
		setData(data.movies)
	}

	return (
		<div>
			<Head>
				<title>Sakila project</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 style={{fontFamily: 'Roboto', width: "100%", textAlign: 'center', marginTop: '50px'}}>Hey kid, wanna see a movie?</h1>
			<Container style={{ marginTop: '50px', backgroundColor: "#c2c2d6", paddingTop: '30px' }}>
				
				<MoviesTable style={{fontFamily: 'Roboto'}} data={data} />
				<CustomPagination
					style={{fontFamily: 'Roboto', backgroundColor: '#c2c2d6'}}
					page={page}
					length={length}
					handlePageChange={handlePageChange}
				/>
			</Container>
		</div>
	)
}
