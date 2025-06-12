const apiUrl = `https://fakestoreapi.com/products`;

export async function getAllProducts() {
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

export async function getProductsByCategory(category) {
    try {
        const response = await fetch(apiUrl + "/" + category);
        if (!response.ok) {
            throw new Error("Network error");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products: ", error);
        return;
    }
}

