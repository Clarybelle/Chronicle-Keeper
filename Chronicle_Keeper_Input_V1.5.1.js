/* CHRONICLE KEEPER V1.5.1 — INPUT MODIFIER */
var modifier = function (text) {
  CE.init(state);
  var result = CE.commands(state, text);
  return { text: result.text };
};

modifier(text);
