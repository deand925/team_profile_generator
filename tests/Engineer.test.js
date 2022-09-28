const Engineer = require("../lib/Engineer");

const testEngineer = new Engineer('Fred', 4576, 'johnSmith@gmail.com', 'johnSmith');

test('Can we get the engineer name from getName()?', ()=>{
    expect(testEngineer.getName()).toBe('Fred')
})

test('Can we get the engineer id from getId()?', ()=>{
    expect(testEngineer.getId()).toBe(4576)
})

test('Can we get the engineer email from getEmail()?', ()=>{
    expect(testEngineer.getEmail()).toBe('johnSmith@gmail.com')
})

test('Can we get the engineer GitHub from getGitHub()?', ()=>{
    expect(testEngineer.getGitHub()).toBe('johnSmith')
})

test('Can we get the engineer role from getRole()?', ()=>{
    expect(testEngineer.getRole()).toBe('Engineer')
})