import { combineReducers } from 'redux'
import { usuario } from './Usuarios'
import { genero } from './Generos'
import { filme } from './Filmes'
import { locacao } from './locacaos'

export const reducers = combineReducers({
  usuario,genero,filme,locacao
})
