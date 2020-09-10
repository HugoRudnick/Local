import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../Actions/genero'
import GenerosForms from './GeneroForm'
import { Grid, Paper, TableContainer, table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from '@material-ui/core'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import  dayjs  from 'dayjs';
import { useToasts } from 'react-toast-notifications'

const styles = theme => ({
  root: {
    '& . MuiTableCell-head': {
      fontSize: '1.25rem'
    }
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
})

const Generos = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0)

  useEffect(() => {
    props.fetchAllGeneros()
  }, [])

  //toast  
  const { addToast } = useToasts()

  const onDelete = id => {
    if(window.confirm('Confirmar exclusão do gênero?'))
    props.deleteGenero(id,() => addToast("Exclusão realizada com sucesso!", { appearance: 'info' }))
  }

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={6}>
          <GenerosForms {...({ currentId, setCurrentId })} />
        </Grid>

        <Grid item xs={6}>
          <TableContainer>
            <table>
              <TableHead className={classes.root}>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Data Criação</TableCell>
                  <TableCell>Situação</TableCell>
                  <tableCell></tableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  props.generoList.map((record, index) => {
                    return (<TableRow key={index}>
                      <TableCell>{record.nome}</TableCell>
                      {/* <TableCell> {record.dataCriacao} </TableCell> */}
                      <TableCell> { dayjs(record.dataCriacao).format('DD-MM-YYYY') } </TableCell>
                      <TableCell>{record.ativo}</TableCell>
                      <tableCell>
                        <ButtonGroup variant="Text">
                          <Button><EditIcon color ="primary"
                          onClick={() =>  { setCurrentId(record.id) }} /> </Button>
                                                  
                          <Button><DeleteIcon color ="secondary" 
                          onClick={() => onDelete(record.id)} /> </Button>
                        </ButtonGroup>

                      </tableCell>
                    </TableRow>)
                  })
                }
              </TableBody>
            </table>
          </TableContainer>
        </Grid>

      </Grid>
    </Paper>
  )
}

const mapStateToProps = state => ({
  generoList: state.genero.list
})

const mapActionToProps = {
  fetchAllGeneros: actions.fetchAll,
  deleteGenero: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Generos));
