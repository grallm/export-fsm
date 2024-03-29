# export-fsm
Some code to export Finite States Machines (FSM) made on http://madebyevan.com/fsm/ to our Java framework and maybe to JSON

## Export to Java
The main goal is to export our drawn FSM from the website to the Java FSM framework made for our course, [JFSM from edesmontils](https://github.com/edesmontils/JFSM)
Symbols in transitions must be separated with `,` or `, `
Symbols cannot contain `,`

## How to use
1. Copy the code (under or in export-java.min.js)
```javascript
(()=>{const t=JSON.parse(localStorage.fsm);let n=[],e=[],o=[],s=[],a=[];t.nodes.forEach(t=>{e.push(t.text),t.isAcceptState&&s.push(t.text)}),t.links.forEach(e=>{"StartLink"===e.type?o.push(t.nodes[e.node].text):"SelfLink"===e.type?e.text.split(/,\s?/).forEach(o=>{n.includes(o)||n.push(o),a.push([t.nodes[e.node].text,o,t.nodes[e.node].text])}):e.text.split(/,\s?/).forEach(o=>{n.includes(o)||n.push(o),a.push([t.nodes[e.nodeA].text,o,t.nodes[e.nodeB].text])})}),clear&&clear();let r="// Code exported from http://madebyevan.com/fsm/ with https://github.com/grallm/export-fsm\n// Alphabet\nSet<String> A = new HashSet<String>();\n";for(let t of n)r+='A.add("'+t+'");\n';r+="\n// States\nSet<Etat> Q = new HashSet<Etat>();\n";for(let t of e)r+='Q.add(new Etat("'+t+'"));\n';r+="\n// Initial States\nSet<String> I = new HashSet<String>();\n";for(let t of o)r+='I.add("'+t+'");\n';r+="\n// Final States\nSet<String> F = new HashSet<String>();\n";for(let t of s)r+='F.add("'+t+'");\n';r+="\n// Transitions\nSet<Transition> mu = new HashSet<Transition>();\n";for(let t of a)r+='mu.add(new Transition("'+t[0]+'","'+t[1]+'","'+t[2]+'"));\n';r+="\n// Constructor\nAutomate afn = new AFN(A, Q, I, F, mu);\n\n",console.log(r)})();
```
2. Open the Developer Console (Windows: CTRL+Maj+I, Mac: CMD+OPT+I)
3. Paste the code and press Enter
4. Copy the Java code (you can right click and click on 'Copy')

### TODO
- [X] Read the localStorage.fsm (and understand the JSON format)
- [X] Compose the Java code, log it in console
- [X] Make a minified file
- [ ] Export directly a Java file
- [ ] Chrome Extension : choose names ?
- [ ] Choose variable names (to allow to have multiple FSM exported without any variable with same names) -> No Java variables for A, I, F, Q

## Export to JSON
Try to export an easily JSON file, maybe create a Chrome extension to import and export with one button
