import ffi from 'ffi-napi'

const main = new ffi.Library('main.dll', {
    'Call': [
        'void', ['string', 'pointer']
    ],
})

const callback = ffi.Callback('void', ['string'], res => {
    console.log('Response', res)
})

console.log('Call PING')
main.Call('PING', callback)

console.log('Call OTHER')
main.Call('OTHER', callback)
