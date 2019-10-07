const myPlugin = store => {
  store.subscribe((mutation, state) => {
    console.log("plugin done");
  });
};

export default myPlugin;
