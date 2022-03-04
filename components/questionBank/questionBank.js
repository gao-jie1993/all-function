import { isEmpty, alert, navigateTo } from "../../utils/util";

const app = getApp();

// checkNum: 已选数量初始值为0。  maxCheckedNum: 最多可选数量。max: 用来判断是否禁用
const querstList = [
  {
    title: '请问您的性别是？ [单选题] ',
    name: 'check1',
    type: 'radio',
    options: [
      { value: '1', text: '男' },
      { value: '2', text: '女' },
    ],
  },
  {
    title: '请问您的年龄段是？ [单选题]',
    name: 'check2',
    type: 'radio',
    options: [
      { value: '1', text: '18岁以下' },
      { value: '2', text: '18岁-30岁' },
      { value: '3', text: '31岁-35岁' },
      { value: '4', text: '36岁-45岁' },
      { value: '5', text: '45岁以上' },
    ],
  },
  {
    title: '请问您的职业类型是？ [单选题]',
    name: 'check3',
    type: 'radio',
    hasInput: true,
    inputValue: '',
    options: [
      { value: '1', text: '学生' },
      { value: '2', text: '企业职员' },
      { value: '3', text: '公务员' },
      { value: '4', text: '个体户' },
      { value: '5', text: '创业者' },
      { value: '6', text: '自由职业者' },
      { value: '7', text: '其他（请描述）' },
    ],
  },
  {
    title: '请问您的月收入是？ [单选题]',
    name: 'check4',
    type: 'radio',
    options: [
      { value: '1', text: '5000元以下' },
      { value: '2', text: '5000元-10000元' },
      { value: '3', text: '10000元-20000元' },
      { value: '4', text: '20000元以上' },
    ],
  },
  {
    title: `请问您会在什么场合穿着LEVI'S® 日本制系列产品？ [最多选3项]`,
    name: 'check5',
    type: 'check',
    hasInput: true,
    checkNum: 0,
    maxCheckedNum: 3,
    max: false,
    inputValue: '',
    options: [
      { value: '1', text: '每一天' },
      { value: '2', text: '朋友聚会' },
      { value: '3', text: '休闲逛街' },
      { value: '4', text: '日常工作' },
      { value: '5', text: '户外出行' },
      { value: '6', text: '娱乐派对' },
      { value: '7', text: '其他（请描述）' },
    ],
  },
  {
    title: '请问您有哪些兴趣爱好？ [最多选3项] ',
    name: 'check6',
    type: 'check',
    hasInput: true,
    checkNum: 0,
    maxCheckedNum: 3,
    max: false,
    inputValue: '',
    options: [
      { value: '1', text: '家居设计' },
      { value: '2', text: '米其林餐厅' },
      { value: '3', text: '手冲咖啡' },
      { value: '4', text: '洋酒雪茄' },
      { value: '5', text: '演出展览' },
      { value: '6', text: '旅行' },
      { value: '7', text: '宠物' },
      { value: '8', text: '运动健身' },
      { value: '9', text: '茶艺插花' },
      { value: '10', text: '数码科技' },
      { value: '11', text: '汽车' },
      { value: '12', text: '动漫电竞' },
      { value: '13', text: '美妆护肤' },
      { value: '14', text: '摄影写真' },
      { value: '15', text: '其他（请描述）' },
    ],
  },
  {
    title: '请问您日常的穿衣风格偏好是？ [最多选3项]',
    name: 'check7',
    type: 'check',
    hasInput: true,
    checkNum: 0,
    maxCheckedNum: 3,
    max: false,
    inputValue: '',
    options: [
      { value: '1', text: '品质细节' },
      { value: '2', text: '极简干练' },
      { value: '3', text: '西装衬衫' },
      { value: '4', text: '休闲运动' },
      { value: '5', text: '日系' },
      { value: '6', text: '中性风' },
      { value: '7', text: '工装风' },
      { value: '8', text: '街头嘻哈' },
      { value: '9', text: '时尚潮流' },
      { value: '10', text: '其他（请描述）' },
    ],
  },
  {
    title: `请问您从哪里第一次了解到LEVI'S® 日本制系列产品？ [单选题]`,
    name: 'check8',
    type: 'radio',
    hasInput: true,
    inputValue: '',
    options: [
      { value: '1', text: '潮流杂志' },
      { value: '2', text: '网络媒体' },
      { value: '3', text: '明星代言' },
      { value: '4', text: '门店宣传' },
      { value: '5', text: '朋友推荐' },
      { value: '6', text: '其他（请描述）' },
    ],
  },
  {
    title: `请问您购买过几次LEVI'S® 日本制系列产品？ [单选题]`,
    name: 'check9',
    type: 'radio',
    options: [
      { value: '1', text: '仅1次' },
      { value: '2', text: '2次以上' },
    ],
  },
  {
    title: `请问您购买LEVI'S® 日本制系列产品的主要原因是？ [最多选5项]`,
    name: 'check10',
    type: 'check',
    hasInput: true,
    checkNum: 0,
    maxCheckedNum: 5,
    max: false,
    inputValue: '',
    options: [
      { value: '1', text: '品牌影响力' },
      { value: '2', text: '明星/KOL推荐' },
      { value: '3', text: '朋友分享推荐' },
      { value: '4', text: '产品设计、面料版型等' },
      { value: '5', text: '日本原产' },
      { value: '6', text: '限量稀有' },
      { value: '7', text: 'MIJ产品展示' },
      { value: '8', text: '店员推荐及服务' },
      { value: '9', text: '免费定制服务' },
      { value: '10', text: '换购日本制通勤包' },
      { value: '11', text: '定制工坊预约权' },
      { value: '12', text: '性价比高' },
      { value: '13', text: '其他（请描述）' },
    ],
  },
  {
    title: `请问您购买LEVI'S® 日本制系列产品首选搭配的上装类型是？ [最多选3项]`,
    name: 'check11',
    type: 'check',
    hasInput: true,
    checkNum: 0,
    maxCheckedNum: 3,
    max: false,
    inputValue: '',
    options: [
      { value: '1', text: '西装' },
      { value: '2', text: '衬衫' },
      { value: '3', text: '牛仔外套' },
      { value: '4', text: '卫衣' },
      { value: '5', text: 'T恤' },
      { value: '6', text: '其他（请描述）' },
    ],
  },
];

// 已选数据
const obj = {
  check1: {},
  check2: {},
  check3: {},
  check4: {},
  check5: {},
  check6: {},
  check7: {},
  check8: {},
  check9: {},
  check10: {},
  check11: {},
};

// input禁用
const quizMap = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
};

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * 组件的初始数据
   */
  data: {
    querstList: [], // 问卷题
    obj: {}, // 所选答案
    quizMap: {}, // input禁用
    other: '其他（请描述）',
  },

  lifetimes: {
    // 将两份数据拷贝一份，防止原始数据被污染
    attached() {
      this.setData({
        querstList: JSON.parse(JSON.stringify(querstList)),
        obj: JSON.parse(JSON.stringify(obj)),
        quizMap: JSON.parse(JSON.stringify(quizMap)),
      });
    },
    detached() {
      this.setData({
        querstList: JSON.parse(JSON.stringify(querstList)),
        obj: JSON.parse(JSON.stringify(obj)),
        quizMap: JSON.parse(JSON.stringify(quizMap)),
      });
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 单多选择框
    selectChange(e) {
      const { type } = e;
      const { name, itemindex } = e.currentTarget.dataset;
      const { value } = e.detail;
      this.value = e.detail.value;
      this.name = name;
      this.itemindex = itemindex;
      this.processData(type, value, name);
    },
    // 多行输入框
    bindTextAreaBlur(e) {
      const { type } = e;
      const value = e.detail.value.trim();
      const { name, itemindex } = e.currentTarget.dataset;
      this.itemindex = itemindex;
      this.name = name;
      this.processData(type, value, name);
    },
    /*
      统一处理输入框和单多选择框事件,
      type -----  input:输入框   change:单多选框
      name ----- 选中的字段
      value ----- 绑定的值
    */
    processData(type, value, name) {
      const { obj } = this.data;
      const { itemindex } = this;
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (key === name) {
            if (type === 'change') {
              obj[name].check = value;
              if (!obj[name].input) {
                obj[name].input = '';
              }
              // 如果取消选框，将值设置为空对象
              if (!value || value.length === 0) {
                obj[name] = {};
              }
            } else if (type === 'input') {
              obj[name].input = value;
              // 双向绑定value值
              this.setData({
                [`querstList[${itemindex}].inputValue`]: value,
              });
            }
          }
        }
      }
    },
    // 给label绑定事件，点击时候判断是否达到限制
    checkChange(e) {
      // 获取题的index
      const { itemindex } = this;
      // 获取答案的index
      const { querstList } = this.data;
      const { index, type } = e.currentTarget.dataset;
      // 当选择的是多选框的时候逻辑
      if (type === 'check') {
        querstList[itemindex].options[index].checked = !querstList[itemindex].options[index].checked;
        // 当勾选一项后就让已选数量 +1，取消勾选先后 -1
        querstList[itemindex].checkNum = querstList[itemindex].options[index].checked
        ? querstList[itemindex].checkNum + 1 : querstList[itemindex].checkNum - 1;
      }
      this.checkMax(itemindex);
      this.inputIsDisable();
    },
    // 达到最多可选数量，其他选项不可选
    checkMax(itemindex) {
      const { querstList } = this.data;
      const { maxCheckedNum, checkNum, max } = querstList[itemindex];
      // 定义变量，动态赋值给禁用属性
      let status = null;
      // 当勾选数量与最大可选数量相等时
      if (checkNum === maxCheckedNum) status = true;
      else if (checkNum < maxCheckedNum && max) status = false;
      // 当变量值被赋值后，(满足以上两个判断)
      if (status !== undefined) {
        querstList[itemindex].max = status;
        for (let i = 0; i < querstList[itemindex].options.length; i++) {
          if (!querstList[itemindex].options[i].checked) querstList[itemindex].options[i].canCheck = status;
        }
        this.setData({
          [`querstList[${itemindex}]`]: querstList[itemindex],
        });
      }
    },

    // 当未选择其他选项则禁用输入框
    inputIsDisable() {
      const { other, obj, querstList } = this.data;
      const { value, itemindex, name } = this;
      if ((typeof value === 'string' && value === other) || (typeof value === 'object' && value.includes(other))) {
        this.setData({
          [`quizMap[${itemindex}]`]: true,
        });
        // 当选择了其他，将input框中的文字赋值给obj中的input
        obj[name].input = querstList[itemindex].inputValue;
      } else {
        this.setData({
          [`quizMap[${itemindex}]`]: false,
        });
      }
    },
    // 提交问卷
    handleSubmit: function() {
      this.unfinish();
    },
    // 当没答完题时弹出弹框，并将未答的题做红字体标记
    unfinish() {
      this.changeTitleStyle();
      this.alertUnfinishModal();
    },
    // 将未答的题做红字体标记
    changeTitleStyle() {
      const { querstList, obj } = this.data;
      for (const key in obj) {
      console.log("key", obj, key)

        if (obj.hasOwnProperty(key)) {
          console.log(4556, obj[key])
          if (isEmpty(obj[key])) {
            querstList.forEach(e => {
              if (e.name === key) e.style = true;
            });
          } else {
            console.log(444, obj, key)
            if (obj[key].check.length > 0) {
              querstList.forEach(e => {
                if (e.name === key) e.style = false;
              });
            } else {
              querstList.forEach(e => {
                if (e.name === key) e.style = true;
              });
              obj[key] = {};
            }
          }
          this.setData({ querstList });
        }
      }
    },
    // 当没答完题时弹出弹框
    alertUnfinishModal() {
      const { obj } = this.data;
      const arr = Object.values(obj).map(item => isEmpty(item)).filter(item => item);
      if (arr.length > 0) {
        alert('您有部分题目未填写，请完成标红部分题目后再提交', {
          title: '温馨提示',
          confirmText: '我知道了',
        });
        this.isSubmitting = false;
      } else {
        this.submitQuestionnaire();
      }
    },
    // 提交前再做一次处理，将未选`其他`选项的input清空
    inputIsEmpty() {
      const { obj, other } = this.data;
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (!isEmpty(obj[key])) {
            // typeof obj[key].check === 'string'： 代表是单选  'object'：代表是多选
            // 当是单选且选择的选项不是其他的时候，将输入框内容清空，多选一样的逻辑
            if (typeof obj[key].check === 'string' && obj[key].check !== other) obj[key].input = '';
            if (typeof obj[key].check === 'object' && !obj[key].check.includes(other)) obj[key].input = '';
          }
        }
      }
    },
    // 提交接口
    async submitQuestionnaire() {
      if (this.isSubmitting) return;
      this.isSubmitting = true;
      const { obj } = this.data;
      this.inputIsEmpty();
      app.dataStatistics('submit', 'investigate');
      const res = await api.submitQuestionnaire({ result: obj }).catch(e => e);
      const success = res.code === 200;
      if (success) navigateTo("pages/index/index");
      else {
        fatal(res, 'back');
        this.isSubmitting = false;
      }

      app.logger('submit', {
        message: '提交调查问卷',
        response: { obj },
      });
    },
  },
});
