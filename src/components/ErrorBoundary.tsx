import React from "react";

class ErrorBoundary extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {hasError: false}
    }
    static getDerivedStateFromError(error: Error) {
        console.log(error.message)
        return {hasError: true}
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // log Error with api call
        console.error(errorInfo.componentStack, error)
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children
    }
}

export default ErrorBoundary