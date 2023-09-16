
<script setup>
function search() {
    $(".header-form").toggleClass("active"),
        $(".header-src").children(".fa-search").toggleClass("fa-times");
};

function headerSidebar() {
    $("body").css("overflow", "hidden");
    $(".nav-sidebar").addClass("active");

};

function HeaderCart(){
    $("body").css("overflow", "hidden"),
    $(".cart-sidebar").addClass("active");
};

</script>


<template>
    <div>
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-5">
                        <div class="header-top-welcome">
                            <p>Welcome to Ecomart in Your Dream Online Store!</p>
                        </div>
                    </div>
                    <div class="col-md-5 col-lg-3"></div>
                    <div class="col-md-7 col-lg-4">
                        <ul class="header-top-list">
                            <li><a href="offer.html">Seller Apply</a></li>
                            <li><a href="faq.html">need help</a></li>
                            <li><a href="contact.html">contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <header class="header-part">
            <div class="container">
                <div class="header-content">
                    <div class="header-media-group">
                        <button class="header-user" @click="headerSidebar">
                            <img src="@/assets/images/menu.png" alt="user" />
                        </button>
                        <router-link :to="{name:'home.page'}" href="index.html">
                            <img src="@/assets/images/logo.png" alt="logo" />
                        </router-link>
                        <button class="header-src" @click="search">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    <router-link :to="{name:'home.page'}" class="header-logo"><img src="@/assets/images/logo.png" alt="logo" /></router-link>

                    <form class="header-form">
                        <input type="text" placeholder="Search anything..." /><button>
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                    <div class="header-widget-group">
                        
                        <button class="header-widget header-cart" title="Cartlist" @click="HeaderCart">
                            <i class="fas fa-shopping-basket"></i>
                            <sup>9+</sup>
                            <span>total price<small>$345.00</small></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<style lang="">
    
</style>