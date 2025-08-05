import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import PostagemAluno from '../components/PostagemAluno.vue'
import PostagemAdmin from '../components/PostagemAdmin.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/postagem/aluno', name: 'PostagemAluno', component: PostagemAluno },
  { path: '/postagem/admin', name: 'PostagemAdmin', component: PostagemAdmin }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
