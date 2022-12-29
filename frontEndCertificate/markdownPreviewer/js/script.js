const projectName = 'markdown-previewer';

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});


// INSERTS target="_blank" INTO HREF TAGS (required for Codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });

  }
  handleEditorMaximize() {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    });

  }
  handlePreviewMaximize() {
    this.setState({
      previewMaximized: !this.state.previewMaximized
    });

  }

  render() {
    const classes = this.state.editorMaximized ?
      ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress'] :
      this.state.previewMaximized ?
        ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress'] :
        ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];
    return /*#__STAYSMARTWZ__*/(
      React.createElement("div", null, /*#__STAYSMARTWZ__*/
        React.createElement("div", { className: classes[0] }, /*#__STAYSMARTWZ__*/
          React.createElement(Toolbar, {
            icon: classes[2],
            onClick: this.handleEditorMaximize,
            text: "Editor"
          }), /*#__STAYSMARTWZ__*/


          React.createElement(Editor, { markdown: this.state.markdown, onChange: this.handleChange })), /*#__STAYSMARTWZ__*/

        React.createElement("div", { className: "converter" }), /*#__STAYSMARTWZ__*/
        React.createElement("div", { className: classes[1] }, /*#__STAYSMARTWZ__*/
          React.createElement(Toolbar, {
            icon: classes[2],
            onClick: this.handlePreviewMaximize,
            text: "Previewer"
          }), /*#__STAYSMARTWZ__*/

          React.createElement(Preview, { markdown: this.state.markdown }))));
  }
}

const Toolbar = props => {
  return /*#__STAYSMARTWZ__*/
  (
    React.createElement("div", { className: "toolbar" }, /*#__STAYSMARTWZ__*/
      React.createElement("i", { className: "", title: "no-stack-dub-sack" }),
      props.text, /*#__STAYSMARTWZ__*/
      React.createElement("i", { className: props.icon, onClick: props.onClick })));

};

const Editor = props => {
  return /*#__STAYSMARTWZ__*/(
    React.createElement("textarea", {
      id: "editor",
      onChange: props.onChange,
      type: "text",
      value: props.markdown }));

};

const Preview = props => {
  return /*#__STAYSMARTWZ__*/(
    React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: marked(props.markdown, { renderer: renderer }) },

      id: "preview" }));


};