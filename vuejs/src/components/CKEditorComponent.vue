<template>
  <div class="wrapper">
    <form v-on:submit.prevent="">
      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </form>
  </div>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: 'CKEditorComponent',
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      // ...
    };
  },
  methods: {
    //
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper{
  width: 70%;
  margin-right:auto;
  margin-left:auto;
}
</style>
