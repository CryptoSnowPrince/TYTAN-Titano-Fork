export function formatCurrency(number, precision = 0) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: precision,
        minimumFractionDigits: precision,
    }).format(number);
}

export function formatNumber(number, precision = 0) {
    return new Intl.NumberFormat("en-US", {
        maximumFractionDigits: precision,
        minimumFractionDigits: precision,
    }).format(number);
}
