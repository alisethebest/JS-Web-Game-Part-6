function newNonPlayableCharacter(x: number, y: number) {
    let element = newImage('assets/red-character/static.gif');
    element.style.zIndex = '1';

    let direction: 'west' | 'north' | 'east' | 'south' | null = null;

    function moveCharacter() {
        switch (direction) {
            case 'west':
                x -= 1;
                break;
            case 'north':
                y += 1;
                break;
            case 'east':
                x += 1;
                break;
            case 'south':
                y -= 1;
                break;
        }
        element.style.left = `${x}px`;
        element.style.bottom = `${y}px`;
    }

    setInterval(moveCharacter, 1);

    function walkEast() {
        direction = 'east';
        element.src = './assets/red-character/east.gif';
    }

    function walkNorth() {
        direction = 'north';
        element.src = './assets/red-character/north.gif';
    }

    function walkWest() {
        direction = 'west';
        element.src = './assets/red-character/west.gif';
    }

    function walkSouth() {
        direction = 'south';
        element.src = './assets/red-character/south.gif';
    }

    function stop() {
        direction = null;
        element.src = './assets/red-character/static.gif';
    }

    return {
        element,
        walkWest,
        walkNorth,
        walkEast,
        walkSouth,
        stop
    };
}
