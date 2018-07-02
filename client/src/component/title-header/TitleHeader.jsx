import React from 'react';
import { Row, Col } from 'components/grid';

import styles from './index.less';

export default class titleHeader extends React.Component {
    render() {
      const { title } = this.props;
        return (
          <Row className={styles.title_header_bg}>
            <Col span={24}>
              <span>{title}</span>
            </Col>
          </Row>
        )
    }
};
