export const getYear = date => {
    return new Date(date).getFullYear()
}

export const releaseDateFormat = date => {
    return new Date(date).toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

const timeFormat = date => {
    return new Date(date).toLocaleTimeString('en-GB')
}

export const reviewDateFormat = date => {
    return `${releaseDateFormat(date)} ${timeFormat(date)}`
}