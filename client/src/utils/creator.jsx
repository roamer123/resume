import React from 'react';
import {Select} from 'components'

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
            `${addonBefore || ''}${option['VALUE']} ${addonAfter || ''}`
          }
        </Option>
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
    console.log('lis', lis, liData);

  return lis.map((li, i) => {
      const step = li['VALUE']
      const code = li['CODE']
      console.log('code', code, li, liData[code]);
      return (
        <li
          className={active}
          onClick={(e) => handleClick(e, step, li)}
          key={i}
       >
          <p>{`${addonBefore || ''} ${step} ${addonAfter || ''}`}</p>
        </li>

      )
    }
  )
}


export { optionsCreate, liCreate }
