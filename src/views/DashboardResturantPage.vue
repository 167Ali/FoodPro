<template>
    <div class="row me-xl-5 me-lg-2">
        <div class="col-lg-3">
            <DashboardFilter />
        </div>
        <div class="col-lg-9">
            <div class="position-relative my-4">
                <div class="position-relative">
                    <input type="text" class="form-control rounded-pill border-0 shadow-sm search ps-5"
                        placeholder="Search for restaurants, cuisines, and dishes" v-model="searchQuery"
                        @focus="showDropdown = true" @blur="hideDropdown" />
                    <i class="fa-solid fa-magnifying-glass fa-lg position-absolute"
                        style="color: rgb(123, 123, 123); top: 50%; left: 15px; transform: translateY(-50%);"></i>
                </div>
                <div class="dropdown mt-1 border-0 shadow-sm" v-if="showDropdown">
                    <div class="dropdown-menu show">
                        <h6 class="dropdown-header">Recent searches</h6>
                        <div class="dropdown-item" v-for="(item, index) in recentSearches" :key="index">
                            {{ item }}
                        </div>
                        <h6 class="dropdown-header">Popular searches</h6>
                        <div class="dropdown-item" v-for="(item, index) in popularSearches" :key="index">
                            {{ item }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 col-12 mb-4" v-for="(restaurant, index) in restaurants"
                    :key="index">
                    <RestaurantCard :image="restaurant.image" :name="restaurant.name" :cuisine="restaurant.cuisine"
                        :rating="restaurant.rating" :reviews="restaurant.reviews" :price="restaurant.price"
                        :deliveryTime="restaurant.deliveryTime" :deliveryFee="restaurant.deliveryFee"
                        :discounts="restaurant.discounts" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import RestaurantCard from '../components/RestaurantCard.vue'
import DashboardFilter from '../components/DashboardFilter.vue'
import { ref } from 'vue';
const searchQuery = ref('');
const showDropdown = ref(false);

const recentSearches = [
    'zing burger'
];

const popularSearches = [
    'pizza', 'kfc', 'burger', 'biryani', 'dominos',
    'pizza middle size price 300', 'mcdonalds', 'kfc zinger burger deal by 1 get 1 free'
];

function hideDropdown() {
    setTimeout(() => {
        showDropdown.value = false;
    }, 200); // Delay to allow click event on dropdown items to register
}

const restaurants = [
    {
        image: '/src/assets/img1.jpg',
        name: 'Suadish Biryani – Lahore',
        cuisine: 'Pakistani',
        rating: 4.5,
        reviews: 3000,
        price: 'Rs.199',
        deliveryTime: 15,
        deliveryFee: 'Rs.20',
        discounts: ['20% off: mc20', 'Up to 35% PRO']
    },
    {
        image: '/src/assets/img2.jpg',
        name: 'Kababjees Fried Chicken',
        cuisine: 'Burgers',
        rating: 4.6,
        reviews: 5000,
        price: 'Rs.99',
        deliveryTime: 35,
        deliveryFee: 'Rs.99',
        discounts: ['20% off: mc20', '15% off PRO']
    },
    {
        image: '/src/assets/img3.jpeg',
        name: 'Karachi Naseeb Biryani',
        cuisine: 'Pakistani',
        rating: 4.8,
        reviews: 500,
        price: 'Rs.149',
        deliveryTime: 10,
        deliveryFee: 'Rs.149',
        discounts: ['Up to 15% off', '20% off: mc20']
    },
    {
        image: '/src/assets/img1.jpg',
        name: 'Suadish Biryani – Lahore',
        cuisine: 'Pakistani',
        rating: 4.5,
        reviews: 3000,
        price: 'Rs.199',
        deliveryTime: 15,
        deliveryFee: 'Rs.20',
        discounts: ['20% off: mc20', 'Up to 35% PRO']
    },
    {
        image: '/src/assets/img2.jpg',
        name: 'Kababjees Fried Chicken',
        cuisine: 'Burgers',
        rating: 4.6,
        reviews: 5000,
        price: 'Rs.99',
        deliveryTime: 35,
        deliveryFee: 'Rs.99',
        discounts: ['20% off: mc20', '15% off PRO']
    },
    {
        image: '/src/assets/img3.jpeg',
        name: 'Karachi Naseeb Biryani',
        cuisine: 'Pakistani',
        rating: 4.8,
        reviews: 500,
        price: 'Rs.149',
        deliveryTime: 10,
        deliveryFee: 'Rs.149',
        discounts: ['Up to 15% off', '20% off: mc20']
    },
    {
        image: '/src/assets/img1.jpg',
        name: 'Suadish Biryani – Lahore',
        cuisine: 'Pakistani',
        rating: 4.5,
        reviews: 3000,
        price: 'Rs.199',
        deliveryTime: 15,
        deliveryFee: 'Rs.20',
        discounts: ['20% off: mc20', 'Up to 35% PRO']
    },
    {
        image: '/src/assets/img2.jpg',
        name: 'Kababjees Fried Chicken',
        cuisine: 'Burgers',
        rating: 4.6,
        reviews: 5000,
        price: 'Rs.99',
        deliveryTime: 35,
        deliveryFee: 'Rs.99',
        discounts: ['20% off: mc20', '15% off PRO']
    },
    {
        image: '/src/assets/img3.jpeg',
        name: 'Karachi Naseeb Biryani',
        cuisine: 'Pakistani',
        rating: 4.8,
        reviews: 500,
        price: 'Rs.149',
        deliveryTime: 10,
        deliveryFee: 'Rs.149',
        discounts: ['Up to 15% off', '20% off: mc20']
    },
    {
        image: '/src/assets/img1.jpg',
        name: 'Suadish Biryani – Lahore',
        cuisine: 'Pakistani',
        rating: 4.5,
        reviews: 3000,
        price: 'Rs.199',
        deliveryTime: 15,
        deliveryFee: 'Rs.20',
        discounts: ['20% off: mc20', 'Up to 35% PRO']
    },
    {
        image: '/src/assets/img2.jpg',
        name: 'Kababjees Fried Chicken',
        cuisine: 'Burgers',
        rating: 4.6,
        reviews: 5000,
        price: 'Rs.99',
        deliveryTime: 35,
        deliveryFee: 'Rs.99',
        discounts: ['20% off: mc20', '15% off PRO']
    },
    {
        image: '/src/assets/img3.jpeg',
        name: 'Karachi Naseeb Biryani',
        cuisine: 'Pakistani',
        rating: 4.8,
        reviews: 500,
        price: 'Rs.149',
        deliveryTime: 10,
        deliveryFee: 'Rs.149',
        discounts: ['Up to 15% off', '20% off: mc20']
    },
    {
        image: '/src/assets/img1.jpg',
        name: 'Suadish Biryani – Lahore',
        cuisine: 'Pakistani',
        rating: 4.5,
        reviews: 3000,
        price: 'Rs.199',
        deliveryTime: 15,
        deliveryFee: 'Rs.20',
        discounts: ['20% off: mc20', 'Up to 35% PRO']
    },
    {
        image: '/src/assets/img2.jpg',
        name: 'Kababjees Fried Chicken',
        cuisine: 'Burgers',
        rating: 4.6,
        reviews: 5000,
        price: 'Rs.99',
        deliveryTime: 35,
        deliveryFee: 'Rs.99',
        discounts: ['20% off: mc20', '15% off PRO']
    },
    {
        image: '/src/assets/img3.jpeg',
        name: 'Karachi Naseeb Biryani',
        cuisine: 'Pakistani',
        rating: 4.8,
        reviews: 500,
        price: 'Rs.149',
        deliveryTime: 10,
        deliveryFee: 'Rs.149',
        discounts: ['Up to 15% off', '20% off: mc20']
    },
    {
        image: '/src/assets/img1.jpg',
        name: 'Suadish Biryani – Lahore',
        cuisine: 'Pakistani',
        rating: 4.5,
        reviews: 3000,
        price: 'Rs.199',
        deliveryTime: 15,
        deliveryFee: 'Rs.20',
        discounts: ['20% off: mc20', 'Up to 35% PRO']
    },
    {
        image: '/src/assets/img2.jpg',
        name: 'Kababjees Fried Chicken',
        cuisine: 'Burgers',
        rating: 4.6,
        reviews: 5000,
        price: 'Rs.99',
        deliveryTime: 35,
        deliveryFee: 'Rs.99',
        discounts: ['20% off: mc20', '15% off PRO']
    },
    {
        image: '/src/assets/img3.jpeg',
        name: 'Karachi Naseeb Biryani',
        cuisine: 'Pakistani',
        rating: 4.8,
        reviews: 500,
        price: 'Rs.149',
        deliveryTime: 10,
        deliveryFee: 'Rs.149',
        discounts: ['Up to 15% off', '20% off: mc20']
    },
    {
        image: '/src/assets/img1.jpg',
        name: 'Suadish Biryani – Lahore',
        cuisine: 'Pakistani',
        rating: 4.5,
        reviews: 3000,
        price: 'Rs.199',
        deliveryTime: 15,
        deliveryFee: 'Rs.20',
        discounts: ['20% off: mc20', 'Up to 35% PRO']
    },
    {
        image: '/src/assets/img2.jpg',
        name: 'Kababjees Fried Chicken',
        cuisine: 'Burgers',
        rating: 4.6,
        reviews: 5000,
        price: 'Rs.99',
        deliveryTime: 35,
        deliveryFee: 'Rs.99',
        discounts: ['20% off: mc20', '15% off PRO']
    },
    {
        image: '/src/assets/img3.jpeg',
        name: 'Karachi Naseeb Biryani',
        cuisine: 'Pakistani',
        rating: 4.8,
        reviews: 500,
        price: 'Rs.149',
        deliveryTime: 10,
        deliveryFee: 'Rs.149',
        discounts: ['Up to 15% off', '20% off: mc20']
    },
    {
        image: '/src/assets/img1.jpg',
        name: 'Suadish Biryani – Lahore',
        cuisine: 'Pakistani',
        rating: 4.5,
        reviews: 3000,
        price: 'Rs.199',
        deliveryTime: 15,
        deliveryFee: 'Rs.20',
        discounts: ['20% off: mc20', 'Up to 35% PRO']
    },
    {
        image: '/src/assets/img2.jpg',
        name: 'Kababjees Fried Chicken',
        cuisine: 'Burgers',
        rating: 4.6,
        reviews: 5000,
        price: 'Rs.99',
        deliveryTime: 35,
        deliveryFee: 'Rs.99',
        discounts: ['20% off: mc20', '15% off PRO']
    },
    {
        image: '/src/assets/img3.jpeg',
        name: 'Karachi Naseeb Biryani',
        cuisine: 'Pakistani',
        rating: 4.8,
        reviews: 500,
        price: 'Rs.149',
        deliveryTime: 10,
        deliveryFee: 'Rs.149',
        discounts: ['Up to 15% off', '20% off: mc20']
    },
    {
        image: '/src/assets/img1.jpg',
        name: 'Suadish Biryani – Lahore',
        cuisine: 'Pakistani',
        rating: 4.5,
        reviews: 3000,
        price: 'Rs.199',
        deliveryTime: 15,
        deliveryFee: 'Rs.20',
        discounts: ['20% off: mc20', 'Up to 35% PRO']
    },
    {
        image: '/src/assets/img2.jpg',
        name: 'Kababjees Fried Chicken',
        cuisine: 'Burgers',
        rating: 4.6,
        reviews: 5000,
        price: 'Rs.99',
        deliveryTime: 35,
        deliveryFee: 'Rs.99',
        discounts: ['20% off: mc20', '15% off PRO']
    },
    {
        image: '/src/assets/img3.jpeg',
        name: 'Karachi Naseeb Biryani',
        cuisine: 'Pakistani',
        rating: 4.8,
        reviews: 500,
        price: 'Rs.149',
        deliveryTime: 10,
        deliveryFee: 'Rs.149',
        discounts: ['Up to 15% off', '20% off: mc20']
    },
    // More restaurants can be added here
]
</script>

<style scoped>
.dropdown-menu {
    width: 100%;
    z-index: 1000;
    border-radius: 20px;
    cursor: pointer;
}

.search {
    height: 60px;
}
</style>>
