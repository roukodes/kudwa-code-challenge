import { Alert, Button, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { Component } from 'react';
import { Link as RouterLink } from 'react-router';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error('Unhandled UI error', { error, errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Alert severity="error">
          <Stack spacing={1}>
            <Typography fontWeight={600}>Something went wrong.</Typography>
            <Stack direction="row" spacing={1}>
              <Button variant="outlined" size="small" onClick={this.handleReset}>
                Try again
              </Button>
              <Button variant="contained" size="small" component={RouterLink} to="/">
                Go Home
              </Button>
            </Stack>
          </Stack>
        </Alert>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
