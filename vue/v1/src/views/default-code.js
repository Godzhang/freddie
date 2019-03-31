const code = 
`<template>
    <div>
        <input v-model="message">
        {{ message }}
        <br />
        <button @click="handleClick()">click</button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message: ''
            }
        },
        methods: {
            handleClick () {
                this.message = 'zhangqi'
            }
        }
    }
</script>`

export default code
