import React from 'react';
import { Upload, Icon } from 'components';
import {
  successMsg,
  errorMsg,
} from 'utils/message'
const Dragger = Upload.Dragger;

export default (props) => {
	const defaultprops = {
      name: 'file',
      multiple: true,
      action: 'http://localhost:7001/upload',
      onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          successMsg(`${info.file.name} 上传成功.`)
        } else if (status === 'error') {
          errorMsg(`${info.file.name} 上传失败.`)
        }
      },
    };
   const { text, ...otherProps } = props
	return (
		<Dragger {...defaultprops} {...otherProps}>
      <p className='upload-drag-icon'>
        <Icon type='achievement' style={{'fontSize': '46px', color: '#0db27a'}} />
      </p>
      <p className='upload-text' style={{'fontSize': '14px', 'lineHeight': '22px', 'color': 'rgba(0, 0, 0, 0.65)'}}>点击或拖拽文件到此区域</p>
      <p className='upload-text' style={{'fontSize': '12px', 'lineHeight': '20px', 'color': 'rgba(0, 0, 0, 0.45)'}}>{text || ''}</p>
    </Dragger>
    )
}
