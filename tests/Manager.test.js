
const Manager = require("../lib/Manager");

const testManager = new Manager('Fred', 4576, 'johnSmith@gmail.com', 12);

test('Can we get the manger name from getName()?', ()=>{
    expect(testManager.getName()).toBe('Fred')
})

test('Can we get the manger id from getId()?', ()=>{
    expect(testManager.getId()).toBe(4576)
})

test('Can we get the manger email from getEmail()?', ()=>{
    expect(testManager.getEmail()).toBe('johnSmith@gmail.com')
})

test('Can we get the manger office number from getOffice()?', ()=>{
    expect(testManager.getOffice()).toBe(12)
})

test('Can we get the role from getRole()?', ()=>{
    expect(testManager.getRole()).toBe('Manager')
})