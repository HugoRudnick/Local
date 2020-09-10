import React, { useState, useEffect } from 'react'
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from '@material-ui/core';
import useForm from "./useForm";
import { connect } from 'react-redux'
import * as actions from '../Actions/locacao'
import * as actionsFilme from '../Actions/filme'
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
    idGenero : '',
    ativo : ''
}

const LocacaoForms = ({ classes, ...props }) => {

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
                addToast("Submitted successfully", { appearance: 'success' })
            }

            // values.dataCriacao = dayjs(new Date()).format('YYYY-MM-DD')
            values.dataCriacao = dayjs().format('YYYY-MM-DD')
           
            if(props.currentId == 0 ){
                // if(name == "incluir"){
                     props.createlocacao(values, onSuccess)
                // }            
            }else{
                props.updatelocacao(props.currentId,values, onSuccess)
            }    
            
        //  }
    }

    const onDeleteAll = (() => {
        
        if(window.confirm('Confirmar exclusão dos registros?'))
        {
            props.locacaoList.map((record, index) => {
            props.deleteLocacao(record.id,() => addToast("Exclusão realizada com sucesso!", { appearance: 'info' }))    
            })
        }       
      })


    useEffect(() => {
        // console.log(props.currentId)
        if(props.currentId != 0) {
            setValues({
                ...props.locacaoList.find(locacao => locacao.id == props.currentId)
            })
            setErrors({})
           
        }
    }, [props.currentId])

    useEffect(() => {

        // props.fecthGenero();

    }, [])

    return (
    <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
      <Grid container>
        <Grid Item xs ={6}>
            <FormControl variant="outlined"
                        className={classes.formControl}
                        {...(errors.idGenero && { error: true })}
                    >
                        <InputLabel ref={inputLabel}>Filme</InputLabel>
                        <Select
                            name="genero"
                            value={values.ativo}
                            onChange={handleInputChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="">Selecione</MenuItem>
                            {/* <MenuItem value="Ativo">Ativo</MenuItem>
                            <MenuItem value="Inativo">Inativo</MenuItem> */}
{
                        // props.filmeList.map((record, index) => {
                        //     return (
                        //         <MenuItem value= { record.idGenero.nome } >  { record.idGenero.nome }   </MenuItem>   
                        //     )
                        // })
}
                        </Select>
                        {errors.ativo && <FormHelperText>{errors.ativo}</FormHelperText>}
            </FormControl>
           
            
            <TextField
                name= "cpf"
                variant = "outlined"
                label="CPF"
                value={values.cpf}
                onChange={handleInputChange}
                {...(errors.cpf && { error: true, helperText: errors.cpf })}                
            />

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
    locacaoList: state.locacao.list
})

// const mapStateToProps = ({filme, genero}) => ({
//     filmeList: state.filme.list,
//     generoList: state.genero.list,
// })
  
const mapActionToProps = {
    createLocacao: actions.create,
    updateLocacao: actions.update,
    deleteLocacao: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(LocacaoForms));
