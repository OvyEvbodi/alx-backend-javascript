// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom';

const initializeRooms = () => {
    const roomNo = [19, 20, 34];
    const allRooms = [];

    for( let i = 0; i < 3; i ++) {
        const room = new ClassRoom(roomNo[i]);
        allRooms.push(room);
    }
    return allRooms;
}

export default initializeRooms;
