export function tryInitYotpoWidgets() {
  const { yotpo, yotpoWidgetsContainer, Yotpo } = window;

  console.log("Yotpo debug:", {
    yotpo: !!yotpo,
    yotpoWidgetsContainer: !!yotpoWidgetsContainer,
    Yotpo: !!Yotpo,
  });

  try {
    if (yotpoWidgetsContainer?.initWidgets) {
      yotpoWidgetsContainer.initWidgets();
      console.log("Called yotpoWidgetsContainer.initWidgets()");
      return;
    }

    if (yotpo?.initWidgets) {
      yotpo.initWidgets();
      console.log("Called yotpo.initWidgets()");
      return;
    }

    if (Yotpo?.API) {
      try {
        new Yotpo.API(yotpo ?? {}).refreshWidgets?.();
        console.log("Called new Yotpo.API(...).refreshWidgets()");
        return;
      } catch (e) {
        console.warn("Yotpo.API refresh attempt failed:", e);
      }
    }

    console.warn("No known Yotpo init function found yet.");
  } catch (err) {
    console.error("Error while trying to init Yotpo widgets:", err);
  }
}