const treeData = [{
  title: '上海-张江销售中心',
  number: 1200,
  key: '0',
  um: '',
  children: [{
    title: '上海营区',
    number: 400,
    key: '0-0',
    um: '',
    children: [{
      title: '一号楼-4楼-A区',
      number: 200,
      key: '0-0-0',
      um: '',
      children: [{
        title: '陆星座席组',
        number: 18,
        key: '0-0-0-0',
        um: 'luxing001',
      }, {
        title: '韩寒座席组',
        number: 18,
        key: '0-0-0-1',
        um: 'hanhan001',
      }]
    }, {
      title: '一号楼-4楼-B区',
      number: 200,
      key: '0-0-1',
      um: '',
      children: [{
        title: '王坤座席组',
        number: 18,
        key: '0-0-1-0',
        um: 'wangkun002',
      }, {
        title: '宋亚强座席组',
        number: 30,
        key: '0-0-1-1',
        um: 'songyaqiang002',
      }]
    }]
  }, {
    title: '江苏营区',
    number: 400,
    key: '0-1',
    um: '',
    children: [{
      title: '一号楼-4楼-A区',
      number: 200,
      key: '0-1-0',
      um: '',
      children: [{
        title: '陆星座席组',
        number: 18,
        key: '0-1-0-1',
        um: 'luxing003',
      }]
    }, {
      title: '一号楼-4楼-B区',
      number: 200,
      key: '0-1-1',
      um: '',
      children: [{
        title: '王坤座席组',
        number: 18,
        key: '0-1-1-0',
        um: 'wangkun003',
      }, {
        title: '宋亚强座席组',
        number: 30,
        key: '0-1-1-1',
        um: 'songyaqiang003',
      }]
    }]
  }, {
    title: '广西营区',
    number: 400,
    key: '0-2',
    um: '',
    children: [{
      title: '一号楼-4楼-A区',
      number: 200,
      key: '0-2-0',
      um: '',
      children: [{
        title: '陆星座席组',
        number: 18,
        key: '0-2-0-0',
        um: 'luxing004',
      }]
    }, {
      title: '一号楼-4楼-B区',
      number: 200,
      key: '0-2-1',
      um: '',
      children: [{
        title: '王坤座席组',
        number: 18,
        key: '0-2-1-0',
        um: 'wangkun005',
      }, {
        title: '宋亚强座席组',
        number: 30,
        key: '0-2-1-1',
        um: 'songyaqiang005',
      }]
    }]
  }]
}, {
  title: '成都销售中心',
  number: 398,
  key: '1',
  um: '',
  children: [{
    title: '成都营区',
    number: 400,
    key: '1-0',
    um: '',
    children: [{
      title: '一号楼-4楼-A区',
      number: 200,
      key: '1-0-0',
      children: [{
        title: '陆星座席组',
        number: 18,
        key: '1-0-0-0',
        um: 'luxing006',
      }]
    }, {
      title: '一号楼-4楼-B区',
      number: 200,
      key: '1-0-1',
      um: '',
      children: [{
        title: '王坤座席组',
        number: 18,
        key: '1-0-1-0',
        um: 'wangkun007',
      }, {
        title: '宋亚强座席组',
        number: 30,
        key: '1-0-1-1',
        um: 'songyaqiang007',
      }]
    }]
  }, {
    title: '江苏营区',
    number: 400,
    key: '1-1',
    um: '',
    children: [{
      title: '一号楼-4楼-A区',
      number: 200,
      key: '1-1-0',
      um: '',
      children: [{
        title: '陆星座席组',
        number: 18,
        key: '1-1-0-0',
        um: 'luxing007',
      }]
    }, {
      title: '一号楼-4楼-B区',
      number: 200,
      key: '1-1-1',
      um: '',
      children: [{
        title: '王坤座席组',
        number: 18,
        key: '1-1-1-0',
        um: 'wangkun008',
      }, {
        title: '宋亚强座席组',
        number: 30,
        key: '1-1-1-1',
        um: 'songyaqiang008',
      }]
    }]
  }]
}, {
  title: '天津销售中心',
  number: 500,
  key: '2',
  um: '',
}, {
  title: '广州销售中心',
  number: 400,
  key: '3',
  um: '',
}]

export default {
  resultCode: '000000',
  resultMesg: '成功',
  data: treeData,
}
