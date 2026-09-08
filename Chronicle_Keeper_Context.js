/* CHRONICLE KEEPER V1.4.3 — CONTEXT MODIFIER */
var modifier = function (text) {
  CE.init(state);
  return { text: CE.inject(state, text, info) };
};

modifier(text);
