import axios from "axios";

const insrance = axios.create({

    baseURL:'https://api.themoviedb.org/3',
    params: {
         api_key : '70407f4ad2222207eedcc9f8b10acfdd'
    }

});



export default  insrance 