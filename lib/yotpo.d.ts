interface YotpoAPI {
  refreshWidgets?: () => void;
}

interface Yotpo {
  initWidgets?: () => void;
}

interface YotpoWidgetsContainer {
  initWidgets?: () => void;
}

declare global {
  interface Window {
    yotpo?: Yotpo;
    yotpoWidgetsContainer?: YotpoWidgetsContainer;
    Yotpo?: {
      API: new (yotpo: Yotpo) => YotpoAPI;
    };
  }
}

export {}
