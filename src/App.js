import React,{Fragment, useEffect} from 'react';
import './App.css';
// import TopolPlugin from './main'

function App() {
  const TOPOL_OPTIONS = {
    id: "#app",
    authorize: {
        apiKey: "ROlqfYqOewVitHFKc3FHesLLu9D14EGoMETkQHLpdFtCHwTKEt7J91WXDmQG",
        userId: "001",
    },
    language: "en",
    templateId: 1,
    title: "My template builder",
    topBarOptions: [
      "undoRedo", 
      "changePreview", 
      "previewSize", 
      "previewTestMail",
      "saveAndClose",
      "save"
    ],
    light: true,
    callbacks: {
      onSaveAndClose: function(json, html) {
        // HTML of the email
        //console.log(html);
        // JSON object of the email
        //console.log(json);
        // Implement your own close callback
        // Data variable contains the response data of the save request
      },
      onSave: function(json, html) {
        // HTML of the email
        //console.log(html);
        // JSON object of the email
        //console.log(json);
      },
      onTestSend: function (email, json, html) {
        // HTML of the email
        console.log(html);
        // JSON object of the email
        console.log(json);
        // Email of the recipient
        console.log(email);
        // Callback when send test email button is clicked
      },
      // onOpenFileManager: function () {
      //   // Implement your own file manager open callback
      // },
      // onAutoSave(json) {
      //     // Called when the editor decides that it needs an autosave. Mostly when the user makes a change and does not save it immediately.
      //     console.log(json);
      // },
      // onBlockSave(json) {
      //     var name = window.prompt('Enter block name:')
      //     if (name !== null) {
      //         console.log('saving block', json)
      //     }
      // },
      // onBlockRemove(id) {
      //     if (window.confirm('Are you sure?')) {
      //         console.log('removing block', id)
      //     }
      // },
      // onBlockEdit(id) {
      //     var name = window.prompt('Block name:', 'My block 001')
      //     if (name !== null) {
      //         console.log('saving edited block', id)
      //     }
      // },
      // onInit() {
      //   //Called when editor is loaded
      // }

    }
  };

  useEffect(() => {
    const script = document.createElement("script");
 
    script.src = "https://d5aoblv5p04cg.cloudfront.net/editor-2/loader/build.js";
    script.type="text/javascript"
 
    document.body.appendChild(script);

    const TopolPlugin = window.TopolPlugin;
    TopolPlugin.init(TOPOL_OPTIONS);
    // TopolPlugin.save();
    // TopolPlugin.togglePreview();
    // TopolPlugin.setSavedBlocks([
    //   {
    //     'id': 11,
    //     'name': 'My saved block - by setSavedBlocks',
    //     'definition': [{ "tagName": "mj-section", "attributes": { "full-width": false, "padding": "9px 0px 9px 0px", "background-color": "#000000" }, "type": null, "children": [{ "tagName": "mj-column", "attributes": { "width": "33.333333%", "vertical-align": "top" }, "children": [{ "tagName": "mj-social", "attributes": { "display": "facebook:url twitter:url google:url", "padding": "10px 10px 10px 30px", "text-mode": "false", "icon-size": "25px", "base-url": "https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/simplewhite/", "facebook-href": "https://www.facebook.com/PROFILE", "facebook-icon-color": "none", "facebook-alt": "Sdílet", "twitter-href": "https://www.twitter.com/PROFILE", "twitter-icon-color": "none", "twitter-alt": "", "google-href": "https://plus.google.com/PROFILE", "google-icon-color": "none", "google-alt": "", "instagram-icon-color": "none", "linkedin-icon-color": "none", "align": "left", "youtube-icon-color": "none", "youtube-alt": "", "youtube-icon": "https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/simplewhite/youtube.png", "youtube-href": "https://www.youtube.com", "containerWidth": 200 }, "uid": "H1lqIiX4lm" }], "uid": "SJ3I0XVx7" }, { "tagName": "mj-column", "attributes": { "width": "33.333333%", "vertical-align": "top" }, "children": [{ "tagName": "mj-image", "attributes": { "src": "https://storage.googleapis.com/jan50/blackberrylogo.png", "padding": "19px 10px 10px 10px", "alt": "", "href": "", "containerWidth": 200, "width": 100, "widthPercent": 50 }, "uid": "rkEyL-HeQ" }], "uid": "r1e280m4xQ" }, { "tagName": "mj-column", "attributes": { "width": "33.333333%", "vertical-align": "top" }, "children": [{ "tagName": "mj-spacer", "attributes": { "height": 15, "containerWidth": 200 }, "uid": "rJfqLiXEgm" }], "uid": "B1W380QVxX" }], "layout": 1, "backgroundColor": "", "backgroundImage": "", "paddingTop": 0, "paddingBottom": 0, "paddingLeft": 0, "paddingRight": 0, "uid": "rkqIjQNe7" }]
    //   },
    //   {
    //     'id': 12,
    //     'img': 'https://d5aoblv5p04cg.cloudfront.net/editor/blocks/menu1.jpg',
    //     'definition': [{ "tagName": "mj-section", "attributes": { "full-width": false, "padding": "9px 0px 9px 0px", "background-color": "#000000" }, "type": null, "children": [{ "tagName": "mj-column", "attributes": { "width": "33.333333%", "vertical-align": "top" }, "children": [{ "tagName": "mj-social", "attributes": { "display": "facebook:url twitter:url google:url", "padding": "10px 10px 10px 30px", "text-mode": "false", "icon-size": "25px", "base-url": "https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/simplewhite/", "facebook-href": "https://www.facebook.com/PROFILE", "facebook-icon-color": "none", "facebook-alt": "Sdílet", "twitter-href": "https://www.twitter.com/PROFILE", "twitter-icon-color": "none", "twitter-alt": "", "google-href": "https://plus.google.com/PROFILE", "google-icon-color": "none", "google-alt": "", "instagram-icon-color": "none", "linkedin-icon-color": "none", "align": "left", "youtube-icon-color": "none", "youtube-alt": "", "youtube-icon": "https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/simplewhite/youtube.png", "youtube-href": "https://www.youtube.com", "containerWidth": 200 }, "uid": "H1lqIiX4lm" }], "uid": "SJ3I0XVx7" }, { "tagName": "mj-column", "attributes": { "width": "33.333333%", "vertical-align": "top" }, "children": [{ "tagName": "mj-image", "attributes": { "src": "https://storage.googleapis.com/jan50/blackberrylogo.png", "padding": "19px 10px 10px 10px", "alt": "", "href": "", "containerWidth": 200, "width": 100, "widthPercent": 50 }, "uid": "rkEyL-HeQ" }], "uid": "r1e280m4xQ" }, { "tagName": "mj-column", "attributes": { "width": "33.333333%", "vertical-align": "top" }, "children": [{ "tagName": "mj-spacer", "attributes": { "height": 15, "containerWidth": 200 }, "uid": "rJfqLiXEgm" }], "uid": "B1W380QVxX" }], "layout": 1, "backgroundColor": "", "backgroundImage": "", "paddingTop": 0, "paddingBottom": 0, "paddingLeft": 0, "paddingRight": 0, "uid": "rkqIjQNe7" }]
    //       }
    // ])


  },[TOPOL_OPTIONS])


  return (
    <Fragment>
      <div id="app" style={{position: 'absolute', width: '100%', height: '100%'}}>
    </div>
    </Fragment>
  );
}

export default App;
