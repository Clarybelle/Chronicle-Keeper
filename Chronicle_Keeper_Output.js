/* CHRONICLE KEEPER V1.4.3 — OUTPUT MODIFIER */
var modifier = function (text) {
  CE.init(state);
  return { text: CE.consume(state, text) };
};

modifier(text);
