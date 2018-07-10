import React from 'react';
import {Select} from 'components'

const Option = Select.Option;
const optionsCreate = (options, optMap, addonBefore, addonAfter) => (
      options.map((option, i) =>
        <Option key={i} value={option}>{optMap ? `${addonBefore || ''}${optMap[option]}` : `${addonBefore || ''}${option}`}</Option>
      )
    )
const liCreate = (lis, liMap, handleClick, addonBefore, addonAfter) => (
  Object.keys(lis).map((li, i) => {
      const step = liMap[li]
      return <li onClick={(e) => handleClick(e, step, li)} key={i}><p>{`${addonBefore} ${step} ${lis[li]} ${addonAfter}`}</p></li>
    }
  )
)

export { optionsCreate, liCreate }
