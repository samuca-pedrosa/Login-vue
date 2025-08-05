<template>
  <div class="postagem-container">
    <div class="postagem-card shadow">
      <h2 class="titulo">Nova Mensagem</h2>
      <p class="subtitulo">Selecione um fundo e escreva sua mensagem para o telão do campus.</p>

      <!-- Campo de mensagem -->
      <div class="form-group">
        <label for="mensagem">Mensagem <span class="contador">({{ restante }} caracteres restantes)</span></label>
        <textarea
          id="mensagem"
          v-model="mensagem"
          @input="limitarCaracteres"
          rows="3"
          class="form-control"
          placeholder="Escreva aqui... (máx. 100 caracteres)"
        ></textarea>
      </div>

      <!-- Fundos -->
      <div class="form-group mt-4">
        <label>Escolha um fundo</label>
        <div class="fundos-container" @click="fundoSelecionado = ''">
          <div
            v-for="(fundo, index) in fundos"
            :key="index"
            class="fundo-thumb"
            :class="{ selected: fundoSelecionado === fundo }"
            :style="{ backgroundImage: 'url(' + fundo + ')' }"
            @click.stop="fundoSelecionado = fundo"
          ></div>
        </div>
      </div>


      <!-- Botão -->
      <div class="text-center mt-5">
        <button class="btn btn-enviar px-5 py-2" @click="enviarPostagem">
          Enviar para o telão
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensagem: '',
      fundoSelecionado: '',
      limite: 100,
      fundos: [
        'https://source.unsplash.com/600x400/?nature',
        'https://source.unsplash.com/600x400/?technology',
        'https://source.unsplash.com/600x400/?forest',
        'https://source.unsplash.com/600x400/?chalkboard',
        'https://source.unsplash.com/600x400/?college',
        'https://source.unsplash.com/600x400/?education',
        'https://source.unsplash.com/600x400/?campus',
        'https://source.unsplash.com/600x400/?typing',
        'https://source.unsplash.com/600x400/?teamwork',
        'https://source.unsplash.com/600x400/?abstract'
      ]
    }
  },
  computed: {
    restante() {
      return this.limite - this.mensagem.length
    }
  },
  methods: {
    limitarCaracteres() {
      if (this.mensagem.length > this.limite) {
        this.mensagem = this.mensagem.slice(0, this.limite)
      }
    },
    enviarPostagem() {
      if (!this.mensagem || !this.fundoSelecionado) {
        alert('Preencha todos os campos!')
        return
      }

      const payload = {
        mensagem: this.mensagem,
        fundo: this.fundoSelecionado
      }

      console.log('Post pronto para envio:', payload)
      alert('Mensagem enviada com sucesso!')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.postagem-container {
  min-height: 100vh;
  background: linear-gradient(to right, #d7f9e7, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 15px;
  font-family: 'Inter', sans-serif;
}

.postagem-card {
  background: #ffffff;
  max-width: 700px;
  width: 100%;
  padding: 50px 40px;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.titulo {
  font-weight: 600;
  color: #0f5132;
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;
}

.subtitulo {
  color: #5e6c76;
  font-size: 15px;
  margin-bottom: 35px;
  text-align: center;
}

.form-group label {
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
  display: inline-block;
}

.contador {
  font-size: 13px;
  color: #6c757d;
}

.form-control {
  border-radius: 10px;
  padding: 12px 16px;
  border: 1px solid #ced4da;
  font-size: 15px;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  border-color: #31a34c;
  box-shadow: 0 0 0 3px rgba(49, 163, 76, 0.15);
  outline: none;
}

.fundos-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
  margin-top: 15px;
}

.fundo-thumb {
  height: 80px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: 3px solid transparent;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, border 0.3s ease;
}

.fundo-thumb:hover {
  transform: scale(1.05);
}

.fundo-thumb.selected {
  border-color: #28a745;
  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.5);
}

.btn-enviar {
  background-color: #198754;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 32px;
  color: white;
  transition: background-color 0.3s ease;
}

.btn-enviar:hover {
  background-color: #157347;
}
</style>
