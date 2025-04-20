class Emitter{
    constructor(){
        this.subscriptions = new Map();
    }
    
    subscribe(eventName, callback){
        if(!this.subscriptions.has(eventName)){
            this.subscriptions.set(eventName, new Map());
        }
        
        const subscriptionId = new Date().getTime();
        
        const subs = this.subscriptions.get(eventName);
        subs.set(subscriptionId, callback);
        
        
        return {
            release: function(){
                if(!subs.get(subscriptionId)){
                    throw new Error('already released');
                }
                
                console.log('deleting subscription: ', subs.get(subscriptionId))
                
                subs.delete(subscriptionId);
            }
        }
    }
    
    emit(eventName, ...args){
        const eventSubscription = this.subscriptions.get(eventName);
        
        if(!eventSubscription){
            console.log('event undefined')
            return;
        }
        
        eventSubscription.forEach((callback => {
            callback(...args);
        }))
    }
}

const emitter = new Emitter();

let channel = '';

const subscription = emitter.subscribe('channelLink', (link) => {
    console.log('subscription link: ', link);
})

emitter.emit('channelLink', 'youtube.com');

subscription.release();

const subscription1 = emitter.subscribe('channelLink', (link) => {
    console.log('subscription link: ', link);
})

emitter.emit('channelLink', 'google.com');
