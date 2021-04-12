export const getYear = date => {
    return new Date(date).getFullYear()
}

export const releaseDateFormat = date => {
    return new Date(date).toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}