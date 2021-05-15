const initialState = {
  list: [{ title: "primeiro teste", body: "ola wagner teste aqui" }]
};
export default function notesReducers(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTE":
      break;
  }
  return state;
}
