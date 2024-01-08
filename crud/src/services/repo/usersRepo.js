import { BASEURL } from "@env";

class UserRepo {
    static createUser = async ({data, rejectWithValue}) => {
        try {
            const response = await fetch(`${BASEURL}users`, {
                method: 'POST',
                headers: {
                'Content-type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            return response;
        }
        catch (error) {
            console.log('Error occurred');
            console.log(error);
            return rejectWithValue(error)
        }
    }

    static readUser = async ({rejectWithValue}) => {
        try {
            const response = await fetch(`${BASEURL}users`, {
              method: 'GET',
              headers: {
                'Content-type': 'application/json',
              },
            });
            return response;
        }
        catch(error) {
            return rejectWithValue(error)
        }
    }

}

export default UserRepo
