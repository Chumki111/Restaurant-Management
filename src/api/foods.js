import axiosSecure from ".";

// fetch top six foods
export const getTopFoods = async () => {
    const { data } = await axiosSecure(`/top-foods`);
    return data;
};
// get all foods and search
export const getAllFoods = async (search = '') => {
    const { data } = await axiosSecure(`/all-foods?search=${search}`);
    return data;
};