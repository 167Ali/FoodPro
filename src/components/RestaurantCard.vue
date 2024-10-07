<template>
    <div class="card">
        <div class="card-img-top-container">
            <img :src="image" class="card-img-top" alt="Restaurant Image">
            <div class="discount-tags">
                <span class="discount-tag" v-for="(discount, index) in discounts" :key="index">
                    {{ discount }}
                </span>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-cuisine">{{ cuisine }}</p>
            <div class="card-info">
                <span class="rating">⭐ {{ rating }} ({{ reviews }}+)</span>
                <span class="price">{{ price }}</span>
            </div>
            <div class="delivery-info">
                <span>{{ deliveryTime }} min</span> · <span>{{ deliveryFee }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    image: String,
    name: String,
    cuisine: String,
    rating: Number,
    reviews: Number,
    price: String,
    deliveryTime: Number,
    deliveryFee: String,
    discounts: Array
});
</script>

<style scoped>
.card {
    border: 1px solid #eaeaea;
    border-radius: 10px;
    padding: 15px;
    max-width: 350px;
    margin: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.card-img-top-container {
    position: relative;
}

.card-img-top {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
}

.discount-tags {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
}

.discount-tag {
    background-color: #00754A;
    color: white;
    font-size: 12px;
    padding: 4px 8px;
    margin-bottom: 4px;
    border-radius: 5px;
}

.card-title {
    font-size: 18px;
    font-weight: bold;
}

.card-cuisine {
    color: grey;
    font-size: 14px;
}

.card-info {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
}

.delivery-info {
    font-size: 14px;
    color: grey;
}
</style>
