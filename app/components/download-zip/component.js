import Ember from 'ember';
import FileSaverMixin from 'ember-cli-file-saver/mixins/file-saver';
 
const { Component, computed } = Ember;
 
export default Component.extend(FileSaverMixin, {
 
  tagName: 'button',
  filename:'downloaded',
  contentType:'application/zip',
 
//   click() {
//     this.get('download')()
//       .then((content) => this.saveFileAs(this.get('filename'), content, this.get('contentType')));
//   }
click()
{
    let content='';
    this.saveFileAs(this.get('filename'), content, this.get('contentType'));
}
});