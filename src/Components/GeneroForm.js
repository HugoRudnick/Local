import React, { useState, useEffect } from 'react'
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from '@material-ui/core';
import useForm from "./useForm";
import { connect } from 'react-redux'
import * as actions from '../Actions/genero'
import { useToasts } from 'react-toast-notifications'
import  dayjs  from 'dayjs'

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
    nome : '',
    dataCriacao : '',
    ativo : ''
}

const GenerosForms = ({ classes, ...props }) => {

    //toast  
    const { addToast } = useToasts()

    //validação de campos
 const validate = (fieldValues = values) => {
    let temp = { ...errors }
    // if('usuario' in fieldValues)
    //     temp.usuario = fieldValues.usuario? "" : "Campo Obrigatório."
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

    //material-ui select
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);


    const handleSubmit = e => {
        e.preventDefault()
        //  if(validate()) {
            const onSuccess = () => { 
                resetForm()
                addToast("Gênero cadastrado com sucesso!", { appearance: 'success' })
            }

            // values.dataCriacao = dayjs(new Date()).format('YYYY-MM-DD')
            values.dataCriacao = dayjs().format('YYYY-MM-DD')
           
            if(props.currentId == 0 ){
                // if(name == "incluir"){
                     props.createGeneros(values, onSuccess)
                // }            
            }else{
                props.updateGenero(props.currentId,values, onSuccess)
            }    
            
        //  }
    }

    const onDeleteAll = (() => {
        
        if(window.confirm('Confirmar exclusão dos registros?'))
        {
            props.generoList.map((record, index) => {
            props.deleteGenero(record.id,() => addToast("Exclusão realizada com sucesso!", { appearance: 'info' }))    
            })
        }

        
      })


    useEffect(() => {
        console.log(props.currentId)
        if(props.currentId != 0) {
            setValues({
                ...props.generoList.find(genero => genero.id == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])


    return (
    <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
        Cadastro de Gêneros
      <Grid container>
        <Grid Item xs ={6}>
            <TextField
                name= "nome"
                variant = "outlined"
                label="Nome"
                value={values.nome}
                onChange={handleInputChange}
                {...(errors.nome && { error: true, helperText: errors.nome })}
                
            />
            {/* <TextField
            disabled
                name= "dataCriacao"
                id="outlined-disabled"  
                variant = "outlined"
                label="Data criação"
                type="date"
                value={values.dataCriacao}
                onChange={handleInputChange}
                {...(errors.dataCriacao && { error: true, helperText: errors.dataCriacao })}
                
            /> */}
            {/* <TextField
                disabled
                id="date"
                name= "dataCriacao"
                label="Data Criação"
                type="date"
                // value=
                onChange={( e ) => { values.dataCriacao = e.target.value } }
                // value={values.dataCriacao}
                // defaultValue = {dayjs().format('DD/MM/YYYY')}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            /> */}
            
            <FormControl variant="outlined"
                        className={classes.formControl}
                        {...(errors.ativo && { error: true })}
                    >
                        <InputLabel ref={inputLabel}>Situação</InputLabel>
                        <Select
                            name="ativo"
                            value={values.ativo}
                            onChange={handleInputChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="">Selecione</MenuItem>
                            <MenuItem value="Ativo">Ativo</MenuItem>
                            <MenuItem value="Inativo">Inativo</MenuItem>
                        </Select>
                        {errors.ativo && <FormHelperText>{errors.ativo}</FormHelperText>}
                    </FormControl>

            {/* campo situacao */}
            
            {/* <TextField
                name= "senha"
                variant = "outlined"
                label="Senha"
                type="password"
                value={values.senha}
                onChange={handleInputChange}
                {...(errors.senha && { error: true, helperText: errors.senha })}
            /> */}
            <div>
                <button
                    variant="contained"
                    color="primary"
                    name="incluir"
                    type="submit"
                    className={classes.smMargin}                
                >
                    Submit
                </button>

                {/* <button
                    variant="contained"
                    className={classes.smMargin}                
                    onClick={resetForm}
                >
                    Reset
                </button> */}

                <button
                    variant="contained"
                    name="deletar"
                    type="button"
                    className={classes.smMargin}                
                    onClick={ onDeleteAll }
                >
                    Excluir Lista
                </button>
            </div>
        </Grid>
      </Grid>

    </form>
  )
}
const mapStateToProps = state => ({
    generoList: state.genero.list
})
  
const mapActionToProps = {
    createGeneros: actions.create,
    updateGenero: actions.update,
    deleteGenero: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(GenerosForms));
