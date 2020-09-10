import axios from 'axios'

const baseUrl = 'http://localhost:5243/api/'

export default {

  usuario (url = baseUrl + 'usuario/') {
    return {
      fetchAll: () => axios.get(url),
      fetchById: id => axios.get(url + id),
      create: newRecord => axios.post(url, newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id)
    }
  },

  genero (url = baseUrl + 'genero/') {
    return {
      fetchAll: () => axios.get(url),
      fetchById: id => axios.get(url + id),
      create: newRecord => axios.post(url , newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
      deleteall: () => axios.delete(url)
    }
  },

  filme (url = baseUrl + 'filme/') {
    return {
      fetchAll: () => axios.get(url),
      fetchById: id => axios.get(url + id),
      create: newRecord => axios.post(url, newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
      deleteall: () => axios.delete(url)
    }
  },

  locacao (url = baseUrl + 'locacao/') {
    return {
      fetchAll: () => axios.get(url),
      fetchById: id => axios.get(url + id),
      create: newRecord => axios.post(url, newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
      deleteall: () => axios.delete(url)
    }
  }
}
