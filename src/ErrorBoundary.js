import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error loading component:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Sorry, something went wrong while loading the page.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
