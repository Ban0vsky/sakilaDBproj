import { Table } from 'react-bootstrap'

export default function MoviesTable({ data }) {
    return (
        <Table style={{ margin: '50px 0', fontFamilly: 'roboto'}}>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Genre</th>
                    <th>Classification</th>
                    <th>Prix</th>
                    <th>Nombre de location</th>
                </tr>
            </thead>
            <tbody>
                {data.map(movie => (
                    <tr key={movie.id}>
                        <td style={{ borderRight: 'solid white 1px'}}>{movie.title}</td>
                        <td style={{ borderRight: 'solid white 1px'}}>{movie.gendra}</td>
                        <td style={{ borderRight: 'solid white 1px'}}>{movie.rating}</td>
                        <td style={{ borderRight: 'solid white 1px'}}>{`${movie.rental_price} $`}</td>
                        <td>{movie.rental_count}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}