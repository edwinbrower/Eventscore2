/**
 * List
 *
     <List><ListView /></List>
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import { List } from 'react-native-elements';

// Consts and Libs
import { AppColors } from '@theme/';

/* Component ==================================================================== */
export default class CustomList extends Component {
  static propTypes = {
    containerStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
  }

  static defaultProps = {
    containerStyle: [],
  }

  listProps = () => {
    // Defaults
    const props = {
      ...this.props,
      containerStyle: [{
        margin: 0,
        backgroundColor: AppColors.background,
        borderTopColor: AppColors.border,
        borderBottomWidth: 0,
      }],
    };

    if (this.props.containerStyle) {
      props.containerStyle.push(this.props.containerStyle);
    }

    return props;
  }

  render = () => <List {...this.listProps()} />;
}

