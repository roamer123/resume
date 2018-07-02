import React from 'react';
import Tag from 'components/tag';
import {Row, Col} from 'components/grid';
import Input from 'components/input';
import Card from 'components/card';

// import { services, urls } from 'api/index';

import styles from './index.less';


const Search = Input.Search;
export default class TagSift extends React.Component {
    componentWillMount() {
    //     // const url = 'http://10.43.40.18:7001'
    //     services.get(urls.queryUserInfo, {});

    }
    getData() {
        const siftData = {
            '角色': ['全部', 'hr', '面试官'],
            '职位': ['全部', 'web', 'java', 'phyon', 'php']
        }
        let data = [];
        for (let key in siftData) {
             data.push(
               <Row key={key} className={styles.sift_warp} gutter={24} type='flex'>
                 <Col span={2} key={`${key}_title`}>
                   {key}
                 </Col>
                 <Col key={`${key}_sift`} span={22} pull={1}>
                   <div>
                     {this.generator(siftData[key])}
                   </div>
                 </Col>
               </Row>
             );
        }
        return data;
    }
    generator (data) {
        let child = [];
        data.map((l, i) => {
            child.push(
              <div className={styles.tag_mar} key={i}>
                <Tag hover>{l}</Tag>
              </div>
            )
        })
        return child;
    }

    searchVal() {
        const search = (
          <Row gutter={24}>
            <Col span={6} push={18}>
              <Search enterButton='搜索' placeholder='请输入内容' onSearch={value => console.log(value)} />
            </Col>
          </Row>
        );
        return search;
    }

    render() {
        return (
          <div>
            <Card className={styles.card_warp}>
              {this.getData()}
              {this.searchVal()}
            </Card>
          </div>
        )
    }
};
