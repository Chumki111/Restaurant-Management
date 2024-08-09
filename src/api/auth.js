import axiosSecure from "."

// save user data db
export const saveUser = async (user) => {
    const currentUser = {
        email: user?.email,
        role: 'customer',
        status: 'Verified'
    }
    const { data } = await axiosSecure(`/users/${user?.email}`, currentUser)
    return data;
}
// get token from server
export const getToken = async(email)=>{
    const {data} = await axiosSecure.post("jwt",email);
    console.log('Received token from server',data);
    return data;
}