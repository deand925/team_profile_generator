const Intern = require("../lib/Intern");

const testIntern = new Intern('Fred', 4576, 'johnSmith@gmail.com', 'UCSF');

test('Can we get the name from getName()?', ()=>{
    expect(testIntern.getName()).toBe('Fred')
})

test('Can we get the employee id from the getId()?', ()=>{
    expect(testIntern.getId()).toBe(4576)
})

test('Can we get the user email from the getEmail()?', ()=>{
    expect(testIntern.getEmail()).toBe('johnSmith@gmail.com')
})

test('Can we get the user school from the getSchool()', ()=>{
    expect(testIntern.getSchool()).toBe('UCSF')
})

test('Can we get the user role from the getRole()', ()=>{
    expect(testIntern.getRole()).toBe('Intern')
})