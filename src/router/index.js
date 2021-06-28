import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: () => import('../views/HowItWorks.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Auth/Register.vue')
  },
  {
    path: '/check',
    name: 'Ckeck',
    component: () => import('../views/Auth/Check.vue')
  },
  {
    path: '/browse-music',
    name: 'BrowseMusic',
    component: () => import('../views/Products/BrowseMusic.vue')
  },
  {
    path: '/browse-music/news',
    name: 'News',
    component: () => import('../views/Products/News.vue')
  },
  {
    path: '/browse-music/news/news-category',
    name: 'NewsCategory',
    component: () => import('../views/Products/NewsCategory.vue')
  },
  {
    path: '/browse-music/news/news-category/ed-sheran',
    name: 'NewDetail',
    component: () => import('../views/Products/NewDetail.vue')
  },
  {
    path: '/browse-music/album',
    name: 'Album',
    component: () => import('../views/Products/AlbumList.vue')
  },
  {
    path: '/browse-music/artists/',
    name: 'Artists',
    component: () => import('../views/Products/ArtistList.vue')
  },
  {
    path: '/browse-music/artists/ed-sheran',
    name: 'Edsheran',
    component: () => import('../views/Products/AlbumArtists.vue')
  },
  {
    path: '/browse-music/artists/ed-sheran/album-detail',
    name: 'AlbumDetail',
    component: () => import('../views/Products/AlbumDetail.vue')
  },
  {
    path: '/browse-music/artists/ed-sheran/bio',
    name: 'Bio',
    component: () => import('../views/Products/ArtistBio.vue')
  },
  {
    path: '/browse-music/geners',
    name: 'Geners',
    component: () => import('../views/Products/GenersList.vue')
  },
  {
    path: '/browse-music/songs',
    name: 'Songs',
    component: () => import('../views/Products/SongsList.vue')
  },
  {
    path: '/browse-music/artists/ed-sheran/albums/divide/shape-of-You',
    name: 'Song Detail',
    component: () => import('../views/Products/SongDetail.vue')
  },

//Product detail, song detail
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
