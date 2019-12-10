(() => {
  const fsmContent = JSON.parse(localStorage.fsm);

  // Alphabet with all symbols
  let A = [];
  // States are strings, their name
  let Q = []; // All states
  let I = []; // All initial states
  let F = []; // All final states
  // Transition are : [source state, symbol consumed (unique), target state]
  let mu = []; // All transitions
  
  // List all states
  fsmContent.nodes.forEach(state => {
    Q.push(state.text);

    // Final state
    if(state.isAcceptState) F.push(state.text);
  });

  // List all transitions and initial states
  fsmContent.links.forEach(transition => {
    // Initial state
    if(transition.type === "StartLink"){
      I.push(fsmContent.nodes[transition.node].text);

    }else if(transition.type === "SelfLink"){
      // All symbols must be separated by ',', the comma can't be a symbol so
      transition.text.split(/,\s?/).forEach(symbol => {
        // Add symbol to alphabet if doesn't exist
        if(!A.includes(symbol)){
          A.push(symbol);
        }

        mu.push([
          fsmContent.nodes[transition.node].text,
          symbol,
          fsmContent.nodes[transition.node].text,
        ]);
      })

    }else{
      // All symbols must be separated by ',', the comma can't be a symbol so
      transition.text.split(/,\s?/).forEach(symbol => {
        // Add symbol to alphabet if doesn't exist
        if(!A.includes(symbol)){
          A.push(symbol);
        }

        mu.push([
          fsmContent.nodes[transition.nodeA].text,
          symbol,
          fsmContent.nodes[transition.nodeB].text,
        ]);
      })
    }
  });

  // Clear the space before in console
  if(clear) clear();

  // Java code string
  let javaCode = "// Code exported from http://madebyevan.com/fsm/ with https://github.com/grallm/export-fsm\n"
  + "// Alphabet\n"
  + "Set<String> A = new HashSet<String>();\n";

  // Alphabet
  for(let symb of A){
    javaCode += 'A.add("' + symb + '");\n';
  }

  // States
  javaCode += "\n// States\nSet<Etat> Q = new HashSet<Etat>();\n";
  for(let state of Q){
    javaCode += 'Q.add(new Etat("' + state + '"));\n';
  }

  // Initial States
  javaCode += "\n// Initial States\nSet<String> I = new HashSet<String>();\n";
  for(let state of I){
    javaCode += 'I.add("' + state + '");\n';
  }

  // Final States
  javaCode += "\n// Final States\nSet<String> F = new HashSet<String>();\n";
  for(let state of F){
    javaCode += 'F.add("' + state + '");\n';
  }

  // Transitions
  javaCode += "\n// Transitions\nSet<Transition> mu = new HashSet<Transition>();\n";
  for(let trans of mu){
    javaCode += 'mu.add(new Transition("'+ trans[0] +'","'+ trans[1] +'","'+ trans[2] +'"));\n';
  }

  // Constrct the FSM
  javaCode += "\n// Constructor\nAutomate afn = new AFN(A, Q, I, F, mu);\n\n";

  console.log(javaCode)
})()