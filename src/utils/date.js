export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date?.getDate().toString().padStart(2, '0');
    const month = (date?.getMonth() + 1).toString().padStart(2, '0'); // January is 0!
    const year = date?.getFullYear();

    return `${day}-${month}-${year}`;
}
export function formatTime(dateString) {
    const date = new Date(dateString);

    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };

    const formattedDate = date.toLocaleDateString('en-US', dateOptions);
    const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

    return `${formattedDate} ${formattedTime}`;
}
