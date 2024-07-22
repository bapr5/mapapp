import axios from 'axios';


const API_ROUTE = '127.0.0.1:3333'

// export default axios.create({
//     baseURL:'127.0.0.1:3333'
// })

export function query_items(from,limit){
    console.log(axios.get('http://127.0.0.1:3333/users', {from:0,limit:10}))
}