<!--https://codepen.io/technext/pen/qBmNbJE-->
<template>
    <nav class="header">
        <a class="logo" href="#">SubsCrypto</a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" id="burger" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li><a href="#video" @click="hideMenu" class="link link-theme link-arrow">VIDEO</a></li>
            <li><a href="#prices" @click="hideMenu" class="link link-theme link-arrow">PLANS</a></li>
            <li><a href="https://billing.stripe.com/p/login/eVa03zdJu6I2gZq6oo" target="_blank" @click="hideMenu" class="link link-theme link-arrow">CANCEL</a></li>
            <li><a href="https://ferran.work#contact" @click="hideMenu" target="_blank" class="link link-theme link-arrow">CONTACT</a></li>
        </ul>
    </nav>
</template>

<script setup>
function hideMenu(){
    let width = window.innerWidth;
    if(width < 875){
        document.getElementById('burger').click()
        console.log('hide burger')
    }    
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Montserrat';
@import 'https://fonts.googleapis.com/css?family=Rubik Iso';

/*@import 'https://fonts.googleapis.com/css?family=Alfa Slab One';
@import 'https://fonts.googleapis.com/css?family=Rubik Glitch'; */

* {
    font-family: Montserrat;
}

a {
    color: #f2f2f2;
    text-decoration: none;
}

/* - link under - */

.link-arrow:after {
    content: '';
    background-size: 100% 100%;
    width: 16px;
    height: 12px;
    position: absolute;
    top: 5px;
    right: -28px;
    -webkit-transition: all .4s cubic-bezier(.35, 1, .33, 1);
    transition: all .4s cubic-bezier(.35, 1, .33, 1)
}

.link-arrow:hover:after {
    right: -35px
}

.link-arrow.link-arrow-white:after {
    background-size: 100% 100%
}

.link-arrow-hover:after {
    right: -35px
}

.link {
    display: inline-block;
    position: relative;
    border: none;
    padding-bottom: 4px;
    text-transform: uppercase;
    font-family: Montserrat, helvetica, arial, sans-serif;
    font-weight: 700
}

.link:active,
.link:focus,
.link:hover {
    outline: 0
}

.link:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background: #000;
    width: 0;
    height: 2px;
    -webkit-transition: all .4s cubic-bezier(.35, 1, .33, 1);
    transition: all .4s cubic-bezier(.35, 1, .33, 1)
}

.link:hover {
    color: white;
}

.link:hover:before {
    width: 100%
}

.link-theme:before {
    background: #2bff00
}

/* header   box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1); */

.header {
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    width: 80%;
    z-index: 3;
    margin-left: 10%;
    margin-right: 10%;
    padding: 20px 0;
}

.header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
}

.header li a {
    display: block;
    padding: 20px 20px 4px 20px;
    text-decoration: none;
}


/* .header li a:hover, .header .menu-btn:hover {
    background-color: #fff;
}*/

.header .logo {
    color: #4BB543;
    display: block;
    float: left;
    font-size: 2em;
    padding: 2px 0px;
    font-family: Rubik Iso;
    text-decoration: none;
}

/* menu */

.header .menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
}

.header .menu-icon .navicon {
    background: white;
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
    background: white;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
}

.header .menu-icon .navicon:before {
    top: 5px;
}

.header .menu-icon .navicon:after {
    top: -5px;
}

/* menu btn */

.header .menu-btn {
    display: none;
}

.header .menu-btn:checked~.menu {
    max-height: 240px;
}

.header .menu-btn:checked~.menu-icon .navicon {
    background: transparent;
}

.header .menu-btn:checked~.menu-icon .navicon:before {
    transform: rotate(-45deg);
}

.header .menu-btn:checked~.menu-icon .navicon:after {
    transform: rotate(45deg);
}

.header .menu-btn:checked~.menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked~.menu-icon:not(.steps) .navicon:after {
    top: 0;
}

/* 48em = 768px */

@media (min-width: 875px) {
    .header li {
        float: left;
    }

    .header li a {
        padding: 20px 0px 0px 0px;
        margin-left: 30px;
    }

    .header .menu {
        clear: none;
        float: right;
        max-height: none;
    }

    .header .menu-icon {
        display: none;
    }
}
@media (max-width: 875px){
    .header ul {
        background-color: #7d8f75;
    }
}
</style>