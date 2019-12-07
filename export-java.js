(() => {
  const fsmContent = JSON.parse(localStorage.fsm);

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
      mu.push([
        fsmContent.nodes[transition.nodeA].text,
        transition.text, // Separate if multiple symbols
        fsmContent.nodes[transition.nodeB].text,
      ]);
    }
  });
})()