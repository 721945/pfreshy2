export default function (context) {
  // console.log('555')
  const user = context.store.getters.isLoggedIn;
  if (!user) {
    context.router.push("/login");
  }
}
