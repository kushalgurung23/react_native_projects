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

    static deleteUser = async ({id, rejectWithValue}) => {
        try {
            const response = await fetch(`${BASEURL}users/${id}`, {
              method: 'DELETE'
            });
            return response;
        }
        catch(error) {
            return rejectWithValue(error)
        }
    }

    static updateUser = async ({data, rejectWithValue}) => {
        try {
            console.log(`${BASEURL}users/${data.id}`);
            const response = await fetch(`${BASEURL}users/${data.id}`, {
                method: 'PUT',
                headers: {
                'Content-type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            return response;
        }
        catch (error) {
            return rejectWithValue(error)
        }
    }

}

export default UserRepo
