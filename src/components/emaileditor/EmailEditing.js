import React from "react";
import EmailEditor from "react-email-editor";
import "./EmailEditing.css";
export default function EmailEditing(props) {
  const [title, setTitle] = React.useState("");
  const emailEditorRef = React.useRef(null);
  const [email, setEmail] = React.useState();
  const exportHtml = () => {
    setEmail(
      emailEditorRef.current.editor.exportHtml((data) => {
        const { design, html } = data;
        console.log("exportHtml", html);
      })
    );
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
  };

  console.log(email);

  return (
    <div className="main">
      <div>
        <div>
          <input onChange={(e) => setTitle(e.target.value)} type="text" />
          <button onClick={() => console.log(title)}>Send Data</button>
          <button onClick={exportHtml}>Export HTML</button>
        </div>

        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      </div>
    </div>
  );
}
