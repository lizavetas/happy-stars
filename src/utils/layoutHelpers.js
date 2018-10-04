export function textColor(color) {
    switch (color) {
        case 'RED':
            return 'has-text-danger';
        case 'GREEN':
            return 'has-text-success';
        case 'YELLOW':
            return 'has-text-warning';
        case 'BLUE':
            return 'has-text-info';
        case 'BLACK':
            return 'has-text-black-bis';
        default:
            return '';
    }
}

export const tagColor = (color) => {
    switch (color) {
        case 'RED':
            return 'is-danger';
        case 'GREEN':
            return 'is-success';
        case 'YELLOW':
            return 'is-warning';
        case 'BLUE':
            return 'is-info';
        case 'BLACK':
            return 'is-black';
        default:
            return '';
    }
}

export const createColumns = (columns, columnSize) => {
    return columns.reduce((result, value, index, array) => {
        if (index % columnSize === 0) {
            result.push(array.slice(index, index + columnSize));
        }
        return result;
    }, [])
}
