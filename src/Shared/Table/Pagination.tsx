import { TablePagination } from '@mui/material';
import React, { useState } from 'react';
function Pagination({ handleChangePage, handleChangRowPage, totalCount = 0 }: any) {
    const [rowPerPage, setrowPerPage] = useState<number>(10)
    const [Page, setPage] = useState<number>(0)
    const onhandlePage = (event: unknown, newPage: number) => {
        handleChangePage(newPage);
        setPage(newPage)
        return newPage;
    }

    const onhandlChangeRowPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        let _rowPerPage = event.target.value;
        handleChangRowPage(_rowPerPage)
        setrowPerPage(parseInt(_rowPerPage));
        setPage(0)
    }
    return (
        <TablePagination
        rowsPerPageOptions={[2, 5, 10, 25, 100]}
        component="div"
        count={totalCount}
        rowsPerPage={rowPerPage}
        page={Page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={onhandlChangeRowPage}
    />    )
}

export default Pagination
