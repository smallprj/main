<template>
    <div>
        <form v-on:submit.prevent="">
            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
            <button @click="click">Empty the editor</button>
        </form>
        <p>{{ editorData }}</p>
        <div v-html="editorData" class="ck-content"></div>
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
            click(){
                console.log(this.editorData);
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
