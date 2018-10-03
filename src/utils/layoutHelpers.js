export function textColor(color) {
    switch (color) {
        case 'RED':
            return 'has-text-danger';
        case 'GREEN':
            return 'has-text-success';
        case 'YELLOW':
            return 'has-text-danger';
        case 'BLUE':
            return 'has-text-success';
        case 'BLACK':
            return 'has-text-black-bis';
        default:
            return '';
    }
}

