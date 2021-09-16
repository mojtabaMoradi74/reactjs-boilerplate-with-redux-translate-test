const ease = {
    /**
    * @param event should be string as box-shadow | color | width or other things
    * @returns for example box-shadow | color | width 0.2s ease
    */
    veryQuickly: (event) => `${event} 0.1s ease`,
    quickly: (event) => `${event} 0.2s ease`,
    quick: (event) => `${event} 0.4s ease`,
    middle: (event) => `${event} 0.6s ease`,
    slow: (event) => `${event} 0.8s ease`,
    slowly: (event) => `${event} 1s ease`,
    verySlow: (event) => `${event} 1.2s ease`,
}

export default ease;