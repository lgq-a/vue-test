<template>
    <div>
        <h1>home</h1>
        <button @click="goToMenu" class="btn btn-success">Let's go</button>
    </div>
</template>
<script>
export default {
    methods: {
        goToMenu(){
            //跳转至上一个页面
            //this.$router.go(-1);
            console.log(this.$router);

            //指定跳转位置
            //this.$router.replace("/register");

            //指定跳转到路由名字
            //this.$router.replace({name:'menuLink'});

            //通过pusht跳转
            //this.$router.push("/menu");
            this.$router.push({name:'menuLink'});
        }
    },
}
</script>