"use client"

import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex items-center justify-center p-8 bg-base-200 rounded-lg">
            <div className="text-center">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
              <p className="text-base-content/70">Please refresh the page and try again.</p>
              <button 
                onClick={() => window.location.reload()} 
                className="btn btn-primary btn-sm mt-4"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary