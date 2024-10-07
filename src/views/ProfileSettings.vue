<template>
    <div class="container mt-5 d-flex justify-content-center">
        <div class="form-container">
            <!-- Profile Section -->
            <div class="mb-4">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="fw-bold">My profile</h5>
                    <i class="fa-regular fa-user"></i>
                </div>
                <form @submit.prevent="saveProfile">
                    <div class="mb-3 input-wrapper">
                        <input type="text" v-model="profile.firstName" class="form-control" id="firstName" required
                            @focus="onFocus($event)" @blur="onBlur($event)" placeholder="" />
                        <label for="firstName" class="floating-label">First name</label>
                    </div>
                    <div class="mb-3 input-wrapper">
                        <input type="text" v-model="profile.lastName" class="form-control" id="lastName" required
                            @focus="onFocus($event)" @blur="onBlur($event)" placeholder=" " />
                        <label for="lastName" class="floating-label">Last name</label>
                    </div>
                    <div class="mb-3 input-wrapper">
                        <input type="text" v-model="profile.mobile" class="form-control" id="mobile" required
                            @focus="onFocus($event)" @blur="onBlur($event)" placeholder="" />
                        <label for="mobile" class="floating-label">Mobile number</label>
                    </div>
                    <button type="submit" class="btn btn-primary" :disabled="isProfileFormInvalid">Save</button>
                </form>
            </div>
            <hr />
            <!-- Email Section -->
            <div class="mb-4">
                <h5 class="fw-bold">Email</h5>
                <br>
                <form @submit.prevent="saveEmail">
                    <div class="mb-3 input-wrapper">
                        <input type="email" v-model="profile.email" class="form-control" id="email" required
                            @focus="onFocus($event)" @blur="onBlur($event)" placeholder="" />
                        <label for="email" class="floating-label">Email</label>
                        <span v-if="isEmailVerified" class="badge bg-warning mt-2">Verified</span>
                    </div>
                    <button type="submit" class="btn btn-primary" :disabled="!profile.email">Save</button>
                </form>
            </div>
            <hr />
            <br />
            <!-- Password Section -->
            <div>
                <h5 class="fw-bold">Password</h5>
                <br>
                <form @submit.prevent="savePassword">
                    <div class="mb-3 input-wrapper">
                        <input type="password" v-model="profile.currentPassword" class="form-control"
                            id="currentPassword" required @focus="onFocus($event)" @blur="onBlur($event)"
                            placeholder="" />
                        <label for="currentPassword" class="floating-label">Current password</label>
                    </div>
                    <div class="mb-3 input-wrapper">
                        <input type="password" v-model="profile.newPassword" class="form-control" id="newPassword"
                            required @focus="onFocus($event)" @blur="onBlur($event)" placeholder=" " />
                        <label for="newPassword" class="floating-label">New password</label>
                    </div>
                    <button type="submit" class="btn btn-primary" :disabled="isPasswordFormInvalid">Save</button>
                    <hr>
                    <router-link to="/fav">Favorites</router-link>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState({
            profile: state => state.profile,
            isEmailVerified: state => state.profile.isEmailVerified,
        }),
        // Computed property for the Profile form
        isProfileFormInvalid() {
            return (
                !this.profile.firstName ||
                !this.profile.lastName ||
                !this.profile.mobile
            );
        },
        
        isPasswordFormInvalid() {
            return (
                !this.profile.currentPassword ||
                !this.profile.newPassword
            );
        }
    },
    methods: {
        ...mapActions(['saveProfile', 'saveEmail', 'savePassword']),
        onFocus(event) {
            const input = event.target;
            input.classList.add('active');
        },
        onBlur(event) {
            const input = event.target;
            if (!input.value) {
                input.classList.remove('active');
            }
        },
    },
};
</script>

<style scoped>
.form-container {
    width: 100%;
    max-width: 500px;
    padding: 20px;
}

.input-wrapper {
    position: relative;
    margin-bottom: 1.5rem;
}

input.form-control {
    width: 100%;
    padding: 12px 15px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
    transition: border-color 0.3s ease;
}

input.form-control:focus {
    outline: none;
    border-color: #000000;
}


.floating-label {
    position: absolute;
    left: 15px;
    top: 15px;
    font-size: 16px;
    color: #999;
    transition: 0.2s ease all;
    pointer-events: none;
}

/* Floating label active state */
input.form-control:focus+.floating-label,
input.form-control:not(:placeholder-shown)+.floating-label {
    top: -10px;
    /* Adjust this for your desired float height */
    left: 15px;
    /* Adjust for better spacing */
    font-size: 12px;
    /* Smaller font size when floating */
    color: #000000;
    /* Color change when active or focused */
    background: white;
    /* Background color to avoid overlapping */
    padding: 0 5px;
    /* Padding to give space between label and input border */
}





</style>
