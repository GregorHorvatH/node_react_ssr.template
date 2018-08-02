const appName = '@awesome_app';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(appName);

    if (serializedState === null) {
      throw new Error('--- Saved state not found');
    }

    const deserializedState = JSON.parse(serializedState);

    if (process.env.NODE_ENV !== 'production') {
      console.log('%c +++ Saved state found.', 'color: #00ff00'); // eslint-disable-line
      console.log('Loading state:', deserializedState); // eslint-disable-line
    }

    return deserializedState;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(error.message); // eslint-disable-line
    }

    return;
  }
};

export const saveState = (state, whiteList) => {
  const { lastAction } = state;

  if (
    !whiteList ||
    !lastAction ||
    !lastAction.type ||
    whiteList.indexOf(lastAction.type) < 0
  ) {
    return;
  }

  console.log('Saving state:', state); // eslint-disable-line
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(appName, serializedState);
  } catch (error) {
    console.error(error.message); // eslint-disable-line
  }
};
