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
})();
