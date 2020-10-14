import React, { useState, Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Grid } from '@shopgate/engage/components';
import { themeConfig } from '@shopgate/engage';

const styles = {
  tabs: css({
    borderBottom: `1px solid ${themeConfig.colors.shade7}`,
    background: themeConfig.colors.light,
    boxShadow: `0px 1rem 0.5rem ${themeConfig.colors.light}`,
    marginBottom: '0.5rem',
    paddingTop: '0.5rem',
    minHeight: 52,
  }).toString(),
  tabsSticky: css({
    top: 0,
    position: 'sticky',
    zIndex: 2,
  }).toString(),
  tab: css({
    height: '100%',
    textAlign: 'center',
    fontWeight: 500,
    padding: '0.5rem 0',
    borderBottom: '3px solid transparent',
  }).toString(),
  tabActive: css({
    borderBottom: `3px solid ${themeConfig.colors.primary}!important`,
  }).toString(),
};

/**
 * @returns {JSX}
 */
export const Tab = ({ title, active, onClick }) => (
  <Grid.Item
    grow={1}
    className={`${styles.tab} ${active ? styles.tabActive : ''}`}
    onClick={onClick}
  >
    {title}
  </Grid.Item>
);
Tab.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
Tab.defaultProps = {
  active: false,
  onClick: () => {},
};

/**
 * @returns {JSX}
 */
const Tabs = ({ sticky, children }) => {
  const [activeTab, setActiveTab] = useState(() => {
    const flatChildren = React.Children.toArray(children);
    const active = flatChildren.find(c => c.props.active);
    if (active) {
      return active.props.title;
    }
    return flatChildren[0].props.title;
  });

  const content = useMemo(() => {
    const flatChildren = React.Children.toArray(children);
    const active = flatChildren.find(c => c.props.title === activeTab);
    return active.props.children;
  }, [activeTab, children]);

  return (
    <Fragment>
      <Grid className={`${styles.tabs} ${sticky ? styles.tabsSticky : ''}`}>
        {React.Children.map(children, child => (
          React.cloneElement(child, {
            active: activeTab === child.props.title,
            onClick: () => setActiveTab(child.props.title),
          })
        ))}
      </Grid>
      {content}
    </Fragment>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  sticky: PropTypes.bool,
};
Tabs.defaultProps = {
  sticky: true,
};

Tabs.Tab = Tab;
export default Tabs;
