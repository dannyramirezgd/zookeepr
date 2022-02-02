const fs = require('fs');
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper
} = require ('../lib/zookeepers.js');
const { zookeepers } = require('../data/zookeepers');

jest.mock('fs');

test('filters by query', () => {
    const listOfKeepers = [
        {
            "id": "0",
            "name": "Kim",
            "age": 28,
            "favoriteAnimal": "dolphin"
            },
            {
            "id": "1",
            "name": "Raksha",
            "age": 31,
            "favoriteAnimal": "penguin"
            }
    ];
    const filteredKeepers = filterByQuery({age: 28}, listOfKeepers)

    expect(filteredKeepers.length).toEqual(1);
})

test('finds by id', () => {
    const listOfKeepers = [
        {
            "id": "0",
            "name": "Kim",
            "age": 28,
            "favoriteAnimal": "dolphin"
            },
            {
            "id": "1",
            "name": "Raksha",
            "age": 31,
            "favoriteAnimal": "penguin"
            }
    ];
    const filteredKeepers = findById('0', listOfKeepers);
    expect(filteredKeepers.age).toEqual(28);
})

test('creates new zookeeper', () => {
    const zookeeper = createNewZookeeper(
        {id: 0, name: 'Darla'},
        zookeepers
    );
    expect(zookeeper.name).toBe('Darla');
    expect(zookeeper.id).toBe(0);
})

test('validates zookeeper', () => {
    const zookeeper =     
        {
        "id": "0",
        "name": "Kim",
        "age": 28,
        "favoriteAnimal": "dolphin"
        }
    const invalidZookeeper = 
        {
        "id": "0",
        "name": "Kim",
        "age": 28,
        }
    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
})