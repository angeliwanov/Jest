const googleSearch = require('./script.js');

const dbMock = [
    'dogs.com',
    'dogpictures.com',
    'cats.com',
    'twitter.com'
]

describe('google search', () => {
    it('is google searching', () => {
        expect(googleSearch('dog', dbMock)).toEqual(['dogs.com', 'dogpictures.com'])
        expect(googleSearch('pop', dbMock)).toEqual([])
    })
    it('search does not work with null or undefined', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    })
    it('return 3 or less', () => {
        expect(googleSearch('com', dbMock).length).toEqual(3)
    })
})


