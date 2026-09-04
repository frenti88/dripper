import { Component, type ErrorInfo, type ReactNode } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('DRYP ErrorBoundary caught an exception:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#faf8f5] text-[#121613] flex items-center justify-center p-6 select-none font-sans">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#e2e5e2] shadow-xl text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c05a3e] mx-auto shadow-2xs">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#c05a3e] font-bold block">
                Atelier Recovery • Resguardo
              </span>
              <h1 className="font-serif text-2xl font-medium text-[#121613]">
                Interrupción en el Taller
              </h1>
              <p className="text-xs text-[#5a625c] leading-relaxed">
                Ocurrió un error inesperado al renderizar la vista. Tus piezas guardadas y selecciones de horno permanecen intactas en tu almacenamiento local.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={this.handleReset}
                className="w-full py-3.5 px-6 rounded-full bg-[#121613] hover:bg-[#252c26] text-white font-semibold text-xs transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Restaurar Archivo DRYP</span>
              </button>
            </div>

            <p className="text-[10px] font-mono text-[#8a948c]">
              Cerámica colada a mano • Cumbres de Neblaria
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
