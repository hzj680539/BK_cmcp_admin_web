export default {
  // 按钮是否有权限
  button (buttonObj) {
    return true
  },
  // cmd是否维护
  cmd (buttonObj, cmd) {
    for (let item of buttonObj.cmds) {
      if (item === cmd) {
        return true
      }
    }
    return false
  }
}
