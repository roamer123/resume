import React from 'react';
import { Select } from 'components'
import {
  MenuItem,
} from 'rc-menu';

const CODE = 'CODE'
const VALUE = 'VALUE'
const Option = Select.Option;
const optionsCreate = ({options, addonBefore, addonAfter}) => {
      // console.log(options)
      !options && (options = [])
      return options.map((option, i) =>
        <Option
          key={i}
          value={option['CODE']}
        >
          {
            `${addonBefore || ''}${option[VALUE]} ${addonAfter || ''}`
          }
        </Option>
      )
}
const itemCreate = ({options, addonBefore, addonAfter, handleClick}) => {
      // console.log(options)
      !options && (options = [])
      return options.map((option, i) =>
        <MenuItem
          key={i}
        >
          {
            <span onClick={() => handleClick(option[CODE])}>{`${addonBefore || ''}${option[VALUE]} ${addonAfter || ''}`}</span>
          }
        </MenuItem>
      )
}
const liCreate = ({
    lis,
    liData,
    handleClick,
    addonBefore,
    addonAfter,
    active
  }) => {
  return lis.map((li, i) => {
      const step = li[VALUE]
      const code = li[CODE]
      return (
        <li
          className={active}
          onClick={(e) => handleClick(e, step, li)}
          key={i}
       >
          <p>{`${addonBefore || ''} ${step} ${liData[code] || 0} ${addonAfter || ''}`}</p>
        </li>

      )
    }
  )
}


export {
  optionsCreate,
  liCreate,
  itemCreate
}
