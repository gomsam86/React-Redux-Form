export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    console.log('load state '+ serializedState);
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    console.log('save state '+ serializedState);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.log(error);
  }
};
