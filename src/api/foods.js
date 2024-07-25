import axiosSecure from ".";

// fetch top six foods
export const getTopFoods = async () => {
    const { data } = await axiosSecure(`/top-foods`);
    return data;
};