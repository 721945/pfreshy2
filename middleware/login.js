export default function (context) {
  // console.log('555')
  const user = context.store.getters.userGet
  console.log(user)
  if (user) {
    if (user.role == 'member') {
      context.redirect('/' + user.uid)
    } else if (user.role == 'staff') {
      context.redirect('/staff/' + user.uid)
    } else if (user.role == 'admin') {
      context.redirect('/admin')
    }
  } else {
  }
}
