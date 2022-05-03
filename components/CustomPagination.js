import { Pagination, Row } from 'react-bootstrap'

export default function CustomPagination({ page, length, handlePageChange }) {
    return (
        <div style={{ fontFamily: 'roboto', width: '100%', textAlign: 'center', display: 'flex', backgroundColor: "#c2c2d6", }}>
            <Pagination className="mx-auto" style={{ marginBottom: '75px',backgroundColor: "#c2c2d6",fontFamily: 'roboto', }}>
                {page > 0 && <Pagination.First onClick={() => handlePageChange(0)} />}
                {page > 0 && <Pagination.Prev onClick={() => handlePageChange(page - 8)} />}
                {page > 0 && <Pagination.Ellipsis />}

                {Array.from({ length: Math.ceil(length / 8) }).map((_, index) => {
                    if ((index * 8) >= page - 80 && (index * 8) <= page + 80) {
                        return (
                            <Pagination.Item
                                style={{ fontFamily: 'roboto', backgroundColor: '#c2c2d6'}}
                                key={index}
                                onClick={() => handlePageChange(index * 8)}
                                active={index * 8 === page}
                                disabled={index * 8 === page}
                            >
                                {index + 1}
                            </Pagination.Item>
                        )
                    }
                })}

                {page < length - 8 && <Pagination.Ellipsis />}
                {page < length - 8 && <Pagination.Next onClick={() => handlePageChange(page + 8)} />}
                {page < length - 8 && <Pagination.Last onClick={() => handlePageChange(length - 8)} />}
            </Pagination>
        </div>
    )
}