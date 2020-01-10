import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Popover as InnerPopover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  useTheme,
} from '@chakra-ui/core';
import { Button, IconButton } from '../index';
import { mergeCSS, processThemeCSS } from '../../shared/utils/themeUtil';

const Popover = (props, ref) => {
  const {
    button,
    children,
    css: propsCss,
    hideArrow,
    hideCloseButton,
    title,
  } = props;

  const buttonProps = Object.assign({}, Meta.defaultProps.button, button);
  let InnerButton = Button;

  if (buttonProps.text) {
    buttonProps.leftIcon = buttonProps.icon;
    delete buttonProps.icon;
    buttonProps.children = buttonProps.text;
    delete buttonProps.text;
  } else {
    InnerButton = IconButton;
  }

  const theme = useTheme();
  const css = processThemeCSS({
    css: mergeCSS(
      propsCss,
      _.get(theme, 'Popover.base')
    ),
    props,
    theme,
  });

  const outterProps = {
    ...props,
    button: undefined,
  };

  return (
    <InnerPopover
      {...outterProps}
      css={css}
    >
      <PopoverTrigger>
        <InnerButton {...buttonProps}/>
      </PopoverTrigger>
      <PopoverContent zIndex={4}>
        {
          !hideArrow &&
            <PopoverArrow />
        }
        {
          !hideCloseButton &&
            <PopoverCloseButton
              right={1}
              padding={2}
              height='32px'
              width='32px'
            />
        }
        {
          title &&
            <PopoverHeader>{title}</PopoverHeader>
        }
        {
          children &&
            <PopoverBody>{children}</PopoverBody>
        }
      </PopoverContent>
    </InnerPopover>
  );
};
export default Popover;


// STORYBOOK META DATA ////////////////////////////////////////////////////////
/** A hovering content box, with a trigger. */
class Meta { render() { return } } export { Meta };
Meta.propTypes = {
  /** Props for the trigger button */
  button: PropTypes.shape({
    /** Whether the button is disabled */
    disabled: PropTypes.bool,
    /** Whether the button is in a loading (inactive) state */
    isLoading: PropTypes.bool,
    /** Name of an icon to show on the left side of the content */
    icon: PropTypes.string,
    /** The text to show while loading, if any */
    loadingText: PropTypes.string,
    /** Name of an icon to show on the right side of the content */
    rightIcon: PropTypes.string,
    /** The inner text of the button */
    text: PropTypes.node,
    /** The variant to use */
    variant: PropTypes.oneOf([ 'outline', 'ghost', 'link', 'solid' ]),
    /** Color scheme to use */
    variantColor: PropTypes.oneOf([ 'primary', 'secondary', 'tertiary', 'neutral' ]),
  }),
  /** The popover contents */
  children: PropTypes.node,
  /** Hide direction arrow */
  hideArrow: PropTypes.bool,
  /** Hide the close button */
  hideCloseButton: PropTypes.bool,
  /** Title of the popover */
  title: PropTypes.string,
  /** Whether the popover should be placed in the `body` of the DOM */
  usePortal: PropTypes.bool,
  /** Whether the popover is triggered via a click or a hover action */
  trigger: PropTypes.oneOf([ 'click', 'hover' ]),
  /** Position of the popover, relative to the trigger */
  placement: PropTypes.oneOf([ 'bottom', 'left', 'right', 'top' ]),
  /** Whether the triggered should receive focus when the popover closes */
  returnFocusOnClose: PropTypes.bool,
  /** Whether the popover should close when it loses focus */
  closeOnBlur: PropTypes.bool,
  /** Whether the popover should close when the user presses the ESC key */
  closeOnEsc: PropTypes.bool,
};
Meta.defaultProps = {
  button: {
    icon: 'FiInfo',
  },
  children: null,
  closeOnBlur: true,
  closeOnEsc: true,
  hideArrow: false,
  hideCloseButton: false,
  placement: 'bottom',
  returnFocusOnClose: true,
  title: null,
  trigger: 'click',
  usePortal: true,
};

// COMPONENT PROPS ////////////////////////////////////////////////////////////
Popover.propTypes = Meta.propTypes;
Popover.defaultProps = Meta.defaultProps;
