<template>
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-6 order-md-2">
          <img src="/images/undraw_file_sync_ot38.png" alt="Image" class="img-fluid" />
        </div>
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="mb-4">
                <h3>Conecte-se no <strong>Comunica IF</strong></h3>
                <p class="mb-4">
                  Conectando você ao que importa no IF. Entre e fique por dentro de tudo que acontece no Campus.
                </p>
              </div>
              <form @submit.prevent="login">
                <div class="form-group first">
                  <label for="username">Sua matrícula aqui</label>
                  <input type="text" class="form-control" id="username" v-model="username" />
                </div>
                <div class="form-group last mb-4">
                  <label for="password">Senha</label>
                  <input type="password" class="form-control" id="password" v-model="password" />
                </div>

                <div class="d-flex mb-5 align-items-center">
                  <label class="control control--checkbox mb-0">
                    <span class="caption">Lembre-me</span>
                    <input type="checkbox" v-model="lembrar" checked />
                    <div class="control__indicator"></div>
                  </label>
                  <span class="ml-auto"><a href="#" class="forgot-pass">Esqueci a senha</a></span>
                </div>

                <button
                  type="button"
                  @click="logarComSuap"
                  class="btn text-white btn-block btn-primary"
                >
                  Logar com SUAP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const lembrar = ref(true)

const logarComSuap = () => {
  window.location.href = 'https://suap.ifrn.edu.br/accounts/login/'
}

const login = () => {
  console.log('Login clicado:', { username: username.value, password: password.value, lembrar: lembrar.value })
}
</script>

<style scoped>
@import '../assets/css/style.css';
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/owl.carousel.min.css';
@import '../assets/fonts/icomoon/style.css';

/* Se quiser importar fontes do Google diretamente aqui também:
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');
*/
</style>
