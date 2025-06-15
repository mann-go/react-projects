// Format price to given currency
// TODO: Add an option for currency based on user location
export function formatPrice(price) {
    let formattedPrice = new Intl.NumberFormat(navigator.language, {
        style: "currency",
        currency: "GBP",
    }).format(price);

    return formattedPrice;
}

// Generate a random UUID
export function generateUUID() {
    return self.crypto.randomUUID();
}

