const Employee = require('../lib/Employee');
const testEmployee = new Employee('Fred', 4576, 'johnSmith@gmail.com')

test('Can we get the name via getName()?', ()=>{
    expect(testEmployee.getName()).toBe('Fred');
})

test('Can we get the id via getId()?', ()=>{
    expect(testEmployee.getId()).toBe(4576);
})

test('Can we get the email via getEmail()?', ()=>{
    expect(testEmployee.getEmail()).toBe('johnSmith@gmail.com');
})