<script setup>  
import {useAppStore} from "~/stores/app"
const appStore = useAppStore()

const route = useRoute()
// Define a title for the header
const showMenu = ref(false)




const showSearch = computed(()=>{
  return route.name == 'index' || route.name == 'admin-past-questions' || route.name == 'admin-materials'
})
const toggleMenu = ()=>{
    showMenu.value = !showMenu.value
}

</script>
  
<template>
    <header class="container-lg header">
      <div class="nav-wrapper">
        <logo/>
        <nav>
          <ul class="show-desktop">
            <li><NuxtLink to="/" class="explore">Explore Courses</NuxtLink></li>
            <li><NuxtLink to="/wishlist" class="explore">Wishlist</NuxtLink></li>
          </ul>

          <div class="buttons relative">
              <button id="menu-btn" type="button" class="btn btn-outline round ml-2" @click="toggleMenu">
                <!-- <img src="@/assets/imgs/profile.png" alt=""> -->
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="#8E92BC"/>
                  <path d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z" fill="#8E92BC"/>
                </svg>

              </button>
              <MenuProfile v-if="showMenu" @hide="showMenu = false"/>
          </div>
        </nav>
      </div>

      <h3 v-if="showSearch" class="mt-2">{{appStore.pageName}}</h3>

      <div v-if="showSearch" class="mt-2 search">
        <SearchComponet/>
      </div>


    </header>
  </template>
  <style lang="scss" scoped>
  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    color: #333;
    position: sticky;
    top: 0;
    z-index: 20;
    border-bottom: 2px solid $grey1;

    background: $white;
  }
  
  .nav-wrapper{
    width: 100%;
    display: grid;
    grid-template-columns: 20% 80%;
    justify-content: space-between;
    align-items: center;
  }
  
  nav{
    display: grid;
    grid-template-columns: 70% 30%;
    justify-content: space-between;
    align-items: center;
    // background: red;
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        li {
          .explore{
            font-size: 1em !important;
            font-weight: 600;
          }

            margin-left: 30px;
            
        }
    }
    .buttons{
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    a{
        color: #333;
        text-decoration: none;
    }
  }
  
  .search{
    width: 100%
  }
  .header nav a:hover {
    // text-decoration: underline;
  }

  #menu-btn{
    svg{
      pointer-events:none;
    }
  }

@media (max-width:960px){
  .nav-wrapper{
    width: 100%;
    display: grid;
    grid-template-columns: 50% 40%;
    justify-content: space-between;
    align-items: center;
  }

  nav{
    display: grid;
    grid-template-columns: 40%;
    
    justify-content: flex-end;
  }
}
  </style>
  