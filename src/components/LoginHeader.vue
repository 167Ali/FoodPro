<template>
    <nav class="navbar">
        <div class="navbar-left">
            <font-awesome-icon :icon="['fas', 'utensils']" class="logo" />
            <span class="brand-name">foodpro</span>
        </div>
        <div class="navbar-right">
            <div class="user-dropdown" @click="toggleDropdown">
                <span>{{ username }}</span>
                <font-awesome-icon :icon="['fas', dropdownOpen ? 'caret-up' : 'caret-down']" class="arrow" />
                <div v-show="dropdownOpen" class="dropdown-menu">
                    <ul>
                        <li>
                            <font-awesome-icon :icon="['fas', 'wallet']" />
                            pandapay
                        </li>
                        <li>
                            <font-awesome-icon :icon="['fas', 'crown']" />
                            Subscribe to free delivery
                        </li>
                        <li>
                            <font-awesome-icon :icon="['fas', 'shopping-bag']" />
                            Orders & reordering
                        </li>
                        <li>
                            <font-awesome-icon :icon="['fas', 'user']" />
                            Profile
                        </li>
                        <li>
                            <font-awesome-icon :icon="['fas', 'gift']" />
                            Vouchers
                        </li>
                        <li>
                            <font-awesome-icon :icon="['fas', 'trophy']" />
                            panda rewards
                        </li>
                        <hr />
                        <li>
                            <font-awesome-icon :icon="['fas', 'question-circle']" />
                            Help center
                        </li>
                        <li>
                            <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
                            Logout
                        </li>
                    </ul>
                </div>
            </div>

            <div class="cart-icon">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" />
            </div>
        </div>
    </nav>
</template>

<script>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'LoginHeader',
    components: {
        FontAwesomeIcon,
    },
    setup() {
        const dropdownOpen = ref(false);
        const username = ref('USER');

        const toggleDropdown = () => {
            dropdownOpen.value = !dropdownOpen.value;
        };

        return {
            dropdownOpen,
            username,
            toggleDropdown,
        };
    },
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background-color: #ffffff;
    border-bottom: 1px solid #eaeaea;
}

.navbar-left {
    display: flex;
    align-items: center;
}

.logo {
    font-size: 24px;
    margin-right: 10px;
    color: #00754a;
}

.brand-name {
    font-size: 24px;
    color: #00754a;
    font-weight: bold;
}

.navbar-right {
    display: flex;
    align-items: center;
}

.user-dropdown {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.user-dropdown span {
    margin-right: 5px;
}

.arrow {
    font-size: 16px;
    margin-left: 5px;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    border: 1px solid #eaeaea;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 10px;
    z-index: 1000;
}

.dropdown-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.dropdown-menu li {
    padding: 10px 0;
    display: flex;
    align-items: center;
}

.dropdown-menu li i {
    margin-right: 10px;
}

.dropdown-menu hr {
    margin: 10px 0;
    border: none;
    border-top: 1px solid #eaeaea;
}

.cart-icon {
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 25px;
}

.icon {
    font-size: 20px;
}
</style>