export function formatMoney(amount, currency) {
    const amountStr = amount.toString();
    const reversedAmountStr = amountStr.split('').reverse().join('');
    const formattedReversedAmountStr = reversedAmountStr.replace(
        /(\d{3})(?=\d)/g,
        '$1.'
    );
    return formattedReversedAmountStr.split('').reverse().join('') + ' ' + currency;
}
