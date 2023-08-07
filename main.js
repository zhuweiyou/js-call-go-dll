import ffi from 'ffi-napi'

const main = new ffi.Library('main.dll', {
    'Call': [
        'void', ['string', 'pointer']
    ],
});

console.log('Call PING')
main.Call('PING', ffi.Callback('void', ['string'], res => {
    console.log('Response', res)
}))

console.log('Call OTHER')
main.Call('OTHER', ffi.Callback('void', ['string'], res => {
    console.log('Response', res)
}))
