<template>
    <div>
        <div class="navbar">
            <p class="navbarheading">FoodPro</p>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
    
</template>
<style scoped>
    .navbar{
        background-color: #00754A;
        height: 66px;
        justify-content: center;
    }
    .navbarheading{
        color: white;
        font-weight: bolder;
        font-size: 30px;
        display: inline-block;
    }
</style>