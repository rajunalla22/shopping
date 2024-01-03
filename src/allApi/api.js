
import axios from "axios";

 export const SignUpApi = (data) => {
    const {name, email, password} = data
    return axios ({
        method: "POST",
        url: "http://18.183.45.219:3000/api/v1/users/register",
        data: {
            "name": name,
            "email": email,
            "password": password
          }
    })
}
