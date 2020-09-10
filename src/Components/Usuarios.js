import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from '../Actions/usuario';
import UsuarioForms from './UsuarioForms'
import { Grid, Paper, TableContainer, table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from '@material-ui/core'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
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

const Usuarios = ({ classes, ...props }) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllUsuarios()
    }, [])

    //toast  
    const { addToast } = useToasts()

    const onDelete = id => {
        if(window.confirm('Confirmar exclusão do registro?'))
        props.deleteUsuario(id,() => addToast("Exclusão realizada com sucesso!", { appearance: 'info' }))
    }
    
      return(<Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={6}>
            <UsuarioForms {...({ currentId, setCurrentId })} />
          </Grid>
  
          <Grid item xs={6}>
            <TableContainer>
              <table>
                <TableHead className={classes.root}>
                  <TableRow>
                    <TableCell>Usuarios</TableCell>
                    {/* <TableCell>Senha</TableCell> */}
                    <tableCell></tableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    props.usuarioList.map((record, index) => {
                      return (<TableRow key={index}>
                        <TableCell>{record.usuario}</TableCell>
                        {/* <TableCell>{record.senha}</TableCell> */}
                        <tableCell>
                          <ButtonGroup variant="Text">
                            <Button><EditIcon color ="primary"
                            onClick={() => { setCurrentId(record.idUsuario) }} /> </Button>
                            
                            <Button><DeleteIcon color ="secondary" 
                            onClick={() => onDelete(record.idUsuario)} /> </Button>
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
      </Paper>)
}


const mapStateToProps = state => ({
    usuarioList: state.usuario.list
  })
  
  const mapActionToProps = {
    fetchAllUsuarios: actions.fetchAll,
    deleteUsuario: actions.Delete
  }

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Usuarios));