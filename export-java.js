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

  console.log("Alphabet:");
  console.log(A);
  console.log("States:");
  console.log(Q);
  console.log("Initial States:");
  console.log(I);
  console.log("Final States:");
  console.log(F);
  console.log("Transitions:");
  console.log(mu);
})()