export function formatCurrency(number = 0, precision = 0) {
    if (!number) number = 0;
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: precision,
        minimumFractionDigits: precision,
    }).format(number);
}

export function formatNumber(number = 0, precision = 0) {
    return new Intl.NumberFormat("en-US", {
        maximumFractionDigits: precision,
        minimumFractionDigits: precision,
    }).format(number);
}
