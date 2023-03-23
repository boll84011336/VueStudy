<template>
    <form @submit.prevent="submit">
        <input v-model="text" style="font-size:14px"/>
        <button type="submit" style="font-size: 14px; border-radius: 10px; background-color: blanchedalmond;">新增</button>
        <div class="card-header">
            <ul class="nav nav-tabs card-header card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">全部</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">進行中</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">已完成</a>
                </li>
            </ul>
        </div>
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

<style>
.card-header {
    display: flex;
    margin-left: 48px;
}

.nav-item {
    margin-right: 10px;
}

li a {
    text-decoration: none;
}


</style>
<!-- prevent 修飾符會叫用 event.preventDefault() 以阻止表單送出
在沒有 @submit.prevent 的情況下，頁面會閃一下，
這時頁面已送出表單並重新載入了，而加上 @submit.prevent 後畫面不會重新載入。 -->