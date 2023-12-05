interface Character {
    walkEast: () => void;
    // Other methods and properties...
}

// Assuming newPlayableCharacter and newNonPlayableCharacter return a Character type
function newPlayableCharacter(x: number, y: number): Character {
    // Function implementation...
}

function newNonPlayableCharacter(x: number, y: number): Character {
    // Function implementation...
}

const pc: Character = newPlayableCharacter(100, 110);
const npc: Character = newNonPlayableCharacter(50, 300);

npc.walkEast();

// Assuming newInventory returns an HTMLDivElement
function newInventory(): HTMLDivElement {
    // Function implementation...
}

// Assuming move function and its related types are defined elsewhere
interface Moveable {
    to: (x: number, y: number) => void;
}

function move(element: HTMLDivElement | HTMLImageElement): Moveable {
    // Function implementation...
}

const inventory: HTMLDivElement = newInventory();
move(inventory).to(0, 0);

// Assuming newImage returns an HTMLImageElement
function newImage(src: string): HTMLImageElement {
    // Function implementation...
}

move(newImage('assets/tree.png')).to(200, 450);
move(newImage('assets/pillar.png')).to(350, 250);
move(newImage('assets/pine-tree.png')).to(450, 350);
move(newImage('assets/crate.png')).to(150, 350);
move(newImage('assets/well.png')).to(500, 575);

// Assuming newItem returns an HTMLImageElement
function newItem(src: string): HTMLImageElement {
    // Function implementation...
}

move(newItem('assets/sword.png')).to(500, 555);
move(newItem('assets/shield.png')).to(165, 335);
move(newItem('assets/staff.png')).to(600, 250);

