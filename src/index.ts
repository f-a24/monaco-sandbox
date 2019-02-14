import * as monaco from 'monaco-editor';

(() => {
  const editor = monaco.editor.create(
    document.getElementById('editor') as HTMLElement,
    {
      value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
        '\n'
      ),
      language: 'javascript',
      theme: 'vs-dark'
    }
  );
  window.addEventListener('resize', () => {
    editor.layout();
  });
  if ("serviceWorker" in navigator) {
    const isLocalhost = Boolean(
      window.location.hostname === "localhost" ||
      window.location.hostname === "[::1]" ||
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
    if (!isLocalhost) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js");
      });
    }
  }
})();
