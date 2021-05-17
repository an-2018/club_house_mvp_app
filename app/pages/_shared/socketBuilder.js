import { constants } from "./constants.js"

export default class ScketBuilder{
    constructor({ socketUrl, namespace }){
        this.socketUrl = `${socketUrl}/${namespace}`
        
        this.onUserConnected = () => {}
        this.setOnUserDisConnected = () => {}
    }

    setOnUserConnected(fn){
        this.onUserConnected = fn

        return this
    }

    setOnUserDisConnected(fn){
        this.setOnUserDisConnected = fn

        return this
    }

    build(){
        const socket = globalThis.importScripts.connect(this.socketUrl, {
            withCredentials: false
        })

        socket.on('connection', () => console.log('Connected'))

        socket.on(constants.events.USER_CONNECTED, this.onUserConnected)
        socket.on(constants.events.USER_DISCONNECTED, this.setOnUserDisConnected)

        return socket
    }
}