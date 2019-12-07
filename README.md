# export-fsm
Some code to export Finite States Machines (FSM) made on http://madebyevan.com/fsm/ to our Java framework and maybe to JSON

## Export to Java
The main goal is to export our drawn FSM from the website to the Java FSM framework made for our course, [JFSM from edesmontils](https://github.com/edesmontils/JFSM)
Symbols in transitions must be separated with `,` or `, `
Symbols cannot contain `,`

### TODO
- [X] Read the localStorage.fsm (and understand the JSON format)
- [X] Compose the Java code, log it in console
- [ ] Make a minified file
- [ ] Export directly a Java file
- [ ] Chrome Extension : choose names ?
- [ ] Choose variable names (to allow to have multiple FSM exported without any variable with same names) -> No Java variables for A, I, F, Q

## Export to JSON
Try to export an easily JSON file, maybe create a Chrome extension to import and export with one button
