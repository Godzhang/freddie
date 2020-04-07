export default function({ store, redirect }) {
  if (!store.state.counter) {
    return redirect("/");
  }
}
