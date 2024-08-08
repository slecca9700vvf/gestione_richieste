import React, {useState,useEffect} from 'react';
import { IRequestsList } from '../../../Interfaces/IRequest';

//per tabelle MUI material
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { json } from 'stream/consumers';



type Props = { lista_richieste: Array<IRequestsList> };



const ElencoRichieste = (props: Props) => {
    let jsonListaRichieste : Array<IRequestsList> = props.lista_richieste;
    let IntestazioniColonne: Array<string> = Object.keys(jsonListaRichieste[0])
    

    //TODO provare ad automatizzare la composizione delle colonne

    //per tabelle MUI material
    interface Column {
        id: 'idRichiesta' | 'numeroRichiesta' | 'priorita' | 'statoRichiesta' | 'tipologiaRichiesta' | 'ufficio';
        label: string;
        minWidth?: number;
        align?: 'right';
        format?: (value: number) => string;
    }
    /*
    const columns: Column[] = [];
    let itemColonna : Column;

    IntestazioniColonne.map((nomeColonna:string) => {
        itemColonna.id = nomeColonna;
        itemColonna.label = nomeColonna;
        columns.push(itemColonna)
        })
    */
    const columns: readonly Column[] = [
        { id: 'idRichiesta', label: 'idRichiesta', minWidth: 170 },
        { id: 'numeroRichiesta', label: 'numeroRichiesta', minWidth: 170 },
        { id: 'priorita', label: 'priorita', minWidth: 170 },
        { id: 'statoRichiesta', label: 'statoRichiesta', minWidth: 170 },
        { id: 'tipologiaRichiesta', label: 'tipologiaRichiesta', minWidth: 170 },
        { id: 'ufficio', label: 'ufficio', minWidth: 170 },
    ]

      

    const rows = jsonListaRichieste
    
    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.idRichiesta}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }

export default ElencoRichieste


