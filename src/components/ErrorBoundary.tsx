import { Component, ReactNode } from "react";
import { InternalError } from "../pages/errors/InternalError";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error("Erro capturado no ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <InternalError />;
    }

    return this.props.children;
  }
}
