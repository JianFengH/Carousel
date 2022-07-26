import React from "react";

export function logProps(WrappedComponent) {
  class Enhance extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('current props:', this.props);
      console.log('previous props:', prevProps);
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  Enhance.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return Enhance;
}