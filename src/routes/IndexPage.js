import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Example from "../components/Example";

function IndexPage() {
  return (
      <Example />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
