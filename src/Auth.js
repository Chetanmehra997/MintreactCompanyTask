import axios from 'axios';

const API_URL = 'http://localhost:5000/users' 

// const token = localStorage.getItem('foodie_token')

export const user_login = (value) => {
    return axios.post (API_URL + "/admin/login",value)
}