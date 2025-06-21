const apiUrl = `https://randomuser.me/api/?inc=name,picture&results=10&seed=7c6b30af5f32fdb8`;

export async function getMockUsers() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network Error");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products: ", error);
        return;
    }
}