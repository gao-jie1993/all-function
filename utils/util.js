const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const navigateTo = (url) => {
  console.log(333, url)
  wx.navigateTo({
    url,
  });
}

const isEmpty = (val, errMsg) => {
  if (val !== 0 && (!val || val === "")) {
    return errMsg;
  }
  return "";
}

// 界面：模态对话框封装
const modals = (content, showCancel, options) => mp.showModal({
  content,
  showCancel,
  confirmText: '确定',
  ...options,
});

const alert = (content, options) => modals(content, false, options);

const confirm = (content, options) => modals(content, true, options);

const block = (content, options) => modals(content, false, {
  confirmText: '返回',
  ...options,
}).then(wx.navigateBack);

module.exports = {
  formatTime,
  navigateTo,
  isEmpty,
  alert,
  confirm,
  block
}
