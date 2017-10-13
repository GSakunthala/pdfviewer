import ActiveModelAdapter from 'active-model-adapter';
import AdapterArrayBufferMixin from 'ember-cli-file-saver/mixins/adapter-arraybuffer-mixin';
 
const ApplicationAdapter = ActiveModelAdapter.extend(AdapterArrayBufferMixin);
 
ApplicationAdapter.reopen({
 // 
});
 
export default ApplicationAdapter;