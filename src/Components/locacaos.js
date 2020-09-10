import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../Actions/locacao'
import * as actionsFilme from '../Actions/filme'
import LocacaoForms from './LocacaoForm'
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

const Locacao = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0)

  useEffect(() => {
    props.fetchAllLocacao()
    // props.fetchAllGeneros()
  }, [])

  //toast
  const { addToast } = useToasts()

  const onDelete = id => {
    if(window.confirm('Confirmar exclusão do registro?'))
    props.deleteLocacao(id,() => addToast("Exclusão realizada com sucesso!", { appearance: 'info' }))
  }

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={6}>
          <LocacaoForms {...({ currentId, setCurrentId })} />
        </Grid>

        <Grid item xs={6}>
          <TableContainer>
            <table>
              <TableHead className={classes.root}>
                <TableRow>
                  <TableCell>FIlme</TableCell>
                  <TableCell>CPF</TableCell>
                  <TableCell>Data Criação</TableCell>
                  <tableCell></tableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                 props.locacaoList && props.locacaoList.map((record, index) => {
                    return (<TableRow key={index}>
                      <TableCell>{record.filmeId}</TableCell>
                      <TableCell>
                          {record.cpf} 
                      </TableCell>
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
  locacaoList: state.locacao.list,
})

const mapActionToProps = {
  fetchAllLocacao: actions.fetchAll,
  deleteLocacao: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Locacao))
