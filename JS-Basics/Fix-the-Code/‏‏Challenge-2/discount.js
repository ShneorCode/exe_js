export function calculateDiscount(price) {
    if (price > 100) {
        return price * 0.9;
    }
    if (price < 20);  // צריך להסיר את ה - ;
    {
        return price;
    }
    return price * 0.95;
}