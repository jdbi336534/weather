/**
 * 首次打开页面的时候，输入uid，appkey
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Inputinfo from "../components/info/Inputinfo";

function Information() {
  return (
      <Inputinfo />
  );
}

Information.propTypes = {
};

export default connect()(Information);
