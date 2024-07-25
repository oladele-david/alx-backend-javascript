/* eslint-disable */
import ClassRoom from "./0-classroom";

/**
 * Initializes class rooms
 * @returns {ClassRoom[]}
 * @memberof ClassRoom
 */
export default function initializeRooms() {
   return [19,20,34].map((maxStudentsSize) => new ClassRoom(maxStudentsSize))
}
