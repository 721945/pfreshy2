export default function (context) {
  const user = context.store.getters.getUser;
  const user2 = context.$fireAuth.currentUser;
  console.log(user2);
  if (user) {
    if (user.role == "member") {
      console.log("test2222");
      // context.router.push("/" + user.uid);
    } else if (user.role == "staff") {
      // context.router.push("/staff/" + user.uid);
    } else if (user.role == "admin") {
      // context.router.push("/admin");
    }
  } else {
    console.log("333");
    // context.router.push("/");
  }
}
