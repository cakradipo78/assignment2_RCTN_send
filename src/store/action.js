export const getDataUser = () => {

    const sendData  = async (dispatch) =>{  
        try {
            console.log("Pak ari terpanggil");
            
            const data = await fetch ("https://jsonplaceholder.typicode.com/users")
            const result = await data.json()

            console.log(result);
            

                dispatch({

                    type:"GET_ALL_DATA",
                    payload: result

                })


        } catch (error) {
            console.log(error);
            

        }

    }
return sendData


}