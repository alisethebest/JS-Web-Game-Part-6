function newPlayableCharacter(x: number, y: number) {
    const element = newImage('assets/green-character/static.gif');
    element.style.zIndex = '1';

    function handleDirectionChange(direction: 'west' | 'north' | 'east' | 'south' | null) {
        switch (direction) {
            case 'west':
                element.src = 'assets/green-character/west.gif';
                break;
            case 'north':
                element.src = 'assets/green-character/north.gif';
                break;
            case 'east':
                element.src = 'assets/green-character/east.gif';
                break;
            case 'south':
                element.src = 'assets/green-character/south.gif';
                break;
            default:
                element.src = 'assets/green-character/static.gif';
                break;
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange);

    return {
        element
    };
}

