import React, { forwardRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Popover as InnerPopover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useTheme,
} from '@chakra-ui/core';
import FocusLock from 'react-focus-lock';
import { Button, IconButton } from '../index';
import { mergeCSS, processThemeCSS } from '../../shared/utils/themeUtil';

const Popover = (props, ref) => {
  const {
    button,
    children,
    css: propsCss,
    footer,
    hideArrow,
    hideCloseButton,
    lockFocus,
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
  const buttonColor = _.get(buttonProps, 'variantColor', 'neutral');

  const theme = useTheme();
  const css = processThemeCSS({
    css: mergeCSS(
      propsCss,
      {
        '[data-focus-lock-disabled]': { background: 'inherit' },
      },
      _.get(theme, 'Popover.content')
    ),
    props,
    theme,
  });
  const cssArrow = processThemeCSS({ css: _.get(theme, 'Popover.arrow'), props, theme });
  const cssCloseButton = processThemeCSS({
    css: mergeCSS(
      { transition: 'all 0.25s, border 0s, line-height 0s' },
      _.get(theme, 'Button.base'),
      _.get(theme, 'Button.ghost'),
      _.get(theme, 'Popover.closeButton')
    ),
    props: {
      ...props,
      variant: 'ghost',
      variantColor: buttonColor,
    },
    theme,
  });
  const cssHeader = processThemeCSS({
    css: mergeCSS(
      { minHeight: '42px' },
      _.get(theme, 'Popover.header')
    ),
    props,
    theme,
  });
  const cssBody = processThemeCSS({ css: _.get(theme, 'Popover.body'), props, theme });
  const cssFooter = processThemeCSS({ css: _.get(theme, 'Popover.footer'), props, theme });

  const outterProps = {
    ...props,
    button: undefined,
  };

  const Wrapper = lockFocus ? FocusLock : Fragment;

  return (
    <InnerPopover
      {...outterProps}
    >
      <PopoverTrigger>
        <InnerButton {...buttonProps}/>
      </PopoverTrigger>
      <PopoverContent
        css={css}
        zIndex={4}
      >
        <Wrapper>
          {
            !hideArrow &&
              <PopoverArrow css={cssArrow}/>
          }
          {
            !hideCloseButton &&
              <PopoverCloseButton
                css={cssCloseButton}
                height='32px'
                padding={0}
                right='5px'
                size='xl'
                top='4px'
                width='32px'
              />
          }
          {
            title &&
              <PopoverHeader css={cssHeader} d='flex' align='center'>{title}</PopoverHeader>
          }
          {
            children &&
              <PopoverBody css={cssBody}>{children}</PopoverBody>
          }
          {
            footer &&
              <PopoverFooter css={cssFooter}>{footer}</PopoverFooter>
          }
        </Wrapper>
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
    isDisabled: PropTypes.bool,
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
  /** Whether the popover should close when it loses focus */
  closeOnBlur: PropTypes.bool,
  /** Whether the popover should close when the user presses the ESC key */
  closeOnEsc: PropTypes.bool,
  /** The popover footer contents */
  footer: PropTypes.node,
  /** Hide direction arrow */
  hideArrow: PropTypes.bool,
  /** Hide the close button */
  hideCloseButton: PropTypes.bool,
  /** Whether to lock keyboard focus inside the popover body */
  lockFocus: PropTypes.bool,
  /** Position of the popover, relative to the trigger */
  placement: PropTypes.oneOf([ 'bottom', 'left', 'right', 'top' ]),
  /** Whether the triggered should receive focus when the popover closes */
  returnFocusOnClose: PropTypes.bool,
  /** Title of the popover */
  title: PropTypes.node,
  /** Whether the popover is triggered via a click or a hover action */
  trigger: PropTypes.oneOf([ 'click', 'hover' ]),
  /** Whether the popover should be placed in the `body` of the DOM */
  usePortal: PropTypes.bool,
};
Meta.defaultProps = {
  button: {
    icon: 'FiInfo',
  },
  children: null,
  closeOnBlur: true,
  closeOnEsc: true,
  footer: null,
  hideArrow: false,
  hideCloseButton: false,
  lockFocus: false,
  placement: 'bottom',
  returnFocusOnClose: true,
  title: null,
  trigger: 'click',
  usePortal: true,
};

// COMPONENT PROPS ////////////////////////////////////////////////////////////
Popover.propTypes = Meta.propTypes;
Popover.defaultProps = Meta.defaultProps;
