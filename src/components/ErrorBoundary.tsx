import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
    // In production we keep logs clean
    console.error('App Error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.hash = '';
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white border border-stone-300 rounded-xl p-8 shadow-sm text-center space-y-5">
            <div className="w-14 h-14 mx-auto rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div>
              <h1 className="font-serif text-2xl font-bold text-[#0F294A]">
                Groupe Scolaire Présentation de Marie - Yoff
              </h1>
              <p className="text-sm text-stone-600 mt-2">
                Une interruption temporaire est survenue lors du chargement de la page.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 bg-stone-50 border border-stone-200 rounded text-left text-xs text-stone-700 font-mono overflow-auto max-h-32">
                {this.state.error.message}
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReload}
                className="px-5 py-2.5 bg-[#0F294A] hover:bg-[#1E3A8A] text-white font-semibold text-xs rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Recharger la page</span>
              </button>

              <button
                onClick={() => {
                  window.location.href = window.location.pathname;
                }}
                className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Retour à l'accueil</span>
              </button>
            </div>

            <div className="text-[11px] text-stone-500 pt-3 border-t border-stone-200">
              Secrétariat : Route de l'Aéroport, face Cité ASECNA, Yoff · Tél : +221 33 820 21 13
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
