<template>
    <form @submit.prevent="submit">
        <input v-model="text"/>
        <button>Submit</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                text: '',
            };
        },
        methods: {
            submit() {
                this.$emit('abc', this.text);
                this.text = '';
            }
        }
    }
</script>