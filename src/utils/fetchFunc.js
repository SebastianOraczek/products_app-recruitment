import axios from "axios";
import headers from "./headers";

export const fetchData = async (url, fnc) => {
    const res = await axios.get(url, { headers });
    const data = res.data.data;

    if (res.status === 200) {
        await fnc(data);
    } else {
        console.log(`Error with status ${res.status}`);
    };
};
