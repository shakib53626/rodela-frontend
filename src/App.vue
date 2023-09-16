<script setup>
  import {Header, Navbar, CartSidebar, MobileMenu, NewsLetter, Footer} from '@/components';

</script>



<template>
  <div>
    <div class="backdrop"></div>
    <a class="backtop fas fa-arrow-up" href="#"></a>


 <!-- Header Part Link here -->
    <Header/>
    <!-- Navbar part link here -->
    <Navbar/>
    <!-- cartsidebar link here -->
    <CartSidebar/>
<!-- MobileMenu link here -->
    <MobileMenu/>
    
<!-- Page main part view here -->
    <router-view/>


<!-- News Latter part -->
    <NewsLetter/>
<!-- Footer part link here  -->
    <Footer/>

  </div>
</template>