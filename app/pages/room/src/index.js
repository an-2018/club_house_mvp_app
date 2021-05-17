import SocketBuilder from '../../_shared/socketBuilder.js'
import { constants } from '../../_shared/constants.js'

const socketBuilder = new SocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
    .setOnUserConnected((user) => console.log('user connected', user))
    .setOnUserDisConnected((user) => console.log('user connected', user))
    .build()

const room = {
    id: Date.now(),
    topic: 'JS expert'
}

const user = {
    img: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/pilot_traveller_person_avatar-512.png",
    username: 'Jack Rider'
}

socket.emit(constants.events.JOIN_ROOM, {user, room})