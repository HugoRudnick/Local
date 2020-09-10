import React, { useState, useEffect } from 'react'
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from '@material-ui/core';
import useForm from "./useForm";
import { connect } from 'react-redux'
import * as actions from '../Actions/usuario'
import { useToasts } from 'react-toast-notifications'

const styles = theme =>({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },

    smMargin:{
        margin: theme.spacing(1)
    }
})

const initialFieldValues ={
    usuario : '',
    senha : ''
}

const UsuariosForms = ({classes, ...props}) => {

    //toast  
    const { addToast } = useToasts()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if('usuario' in fieldValues)
            temp.usuario = fieldValues.usuario? "" : "Campo Obrigatório."
        // // if(!fieldValues.senha)
        // //     temp.senha = fieldValues.senha? "" : "Campo Obrigatório."
        // if('senha' in fieldValues)
        // temp.senha = fieldValues.senha? "" : "Campo Obrigatório."
        setErrors({
            ...temp
        })
    
        // if(fieldValues == values){
        //     return Object.values(temp).every(x => x == "")
        // }
    
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, validate, props.setCurrentId)

    const handleSubmit = e => {
        e.preventDefault()
        //  if(validate()) {
            const onSuccess = () => { 
                resetForm()
                addToast("Cadastro realziado com sucesso!", { appearance: 'success' })
            }
            if(props.currentId == 0 ){
                 props.createUsuarios(values, onSuccess)
            }else{
                props.updateUsuario(props.currentId,values, onSuccess)
            }    
            
        //  }
    }

    useEffect(() => {
        if(props.currentId != 0) {
            setValues({
                ...props.usuarioList.find(usuario => usuario.idUsuario == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    return (
        <form autoComplete="off" noValidate className = { classes.root } onSubmit={handleSubmit} label = "teste">
        Cadastro de Usuários
          <Grid container>
            <Grid Item xs ={6}>
                <TextField
                    name= "usuario"
                    variant = "outlined"
                    label="Usuário"
                    value={values.usuario}
                    onChange={handleInputChange}
                    {...(errors.usuario && { error: true, helperText: errors.usuario })}
                    
                />
                <TextField
                    name= "senha"
                    variant = "outlined"
                    label="Senha"
                    type="password"
                    value={values.senha}
                    onChange={handleInputChange}
                    {...(errors.senha && { error: true, helperText: errors.senha })}
                />
                <div>
                    <button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.smMargin}                
                    >
                        Cadastrar
                    </button>
    
                    {/* <button
                        variant="contained"
                        className={classes.smMargin}                
                        onClick={resetForm}
                    >
                        Reset
                    </button> */}
    
    
                </div>
            </Grid>
          </Grid>
    
        </form>
      );
}

const mapStateToProps = state => ({
    usuarioList: state.usuario.list
})
  
  const mapActionToProps = {
    createUsuarios: actions.create,
    updateUsuario: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(UsuariosForms));
