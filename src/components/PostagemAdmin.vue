<template>
  <div class="postagem-container">
    <div class="postagem-card shadow">
      <h2 class="titulo">Painel do Administrador</h2>
      <p class="subtitulo">Crie postagens completas para setores específicos do campus.</p>

      <!-- Título -->
      <div class="form-group">
        <label for="titulo">Título</label>
        <input
          id="titulo"
          v-model="titulo"
          type="text"
          class="form-control"
          placeholder="Digite o título da postagem"
        />
      </div>

      <!-- Subtítulo -->
      <div class="form-group mt-3">
        <label for="subtitulo">Subtítulo</label>
        <input
          id="subtitulo"
          v-model="subtitulo"
          type="text"
          class="form-control"
          placeholder="Digite um subtítulo"
        />
      </div>

      <!-- Mensagem -->
      <div class="form-group mt-3">
        <label for="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          v-model="mensagem"
          rows="3"
          class="form-control"
          placeholder="Texto principal da postagem"
        ></textarea>
      </div>

      <!-- Fundo -->
      <div class="form-group mt-4">
        <label>Escolha um fundo</label>
        <div class="fundos-container">
          <div
            v-for="(fundo, index) in fundos"
            :key="index"
            class="fundo-thumb"
            :style="{ backgroundImage: 'url(' + fundo + ')', borderColor: fundoSelecionado === fundo ? '#28a745' : '#ccc' }"
            @click="fundoSelecionado = fundo"
          ></div>
        </div>
      </div>

      <!-- Upload -->
      <div class="form-group mt-4">
        <label for="imagem">Anexar Imagem</label>
        <input
          type="file"
          class="form-control"
          id="imagem"
          accept="image/*"
          @change="handleUpload"
        />
      </div>

      <!-- Setor -->
      <div class="form-group mt-4">
        <label for="setor">Setor de Destino</label>
        <select v-model="setor" class="form-select">
          <option disabled value="">Selecione o setor</option>
          <option value="entrada">Entrada principal</option>
          <option value="biblioteca">Biblioteca</option>
          <option value="refeitorio">Refeitório</option>
          <option value="bloco_a">Bloco A</option>
          <option value="bloco_b">Bloco B</option>
        </select>
      </div>

      <!-- Botão -->
      <div class="text-center mt-5">
        <button class="btn btn-primary px-5 py-2" @click="publicarPostagem">
          Publicar no Telão
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: '',
      subtitulo: '',
      mensagem: '',
      setor: '',
      imagem: null,
      fundoSelecionado: '',
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
  methods: {
    handleUpload(event) {
      this.imagem = event.target.files[0]
    },
    publicarPostagem() {
      if (!this.titulo || !this.mensagem || !this.setor || !this.fundoSelecionado) {
        alert('Preencha todos os campos obrigatórios!')
        return
      }

      // Aqui você pode preparar os dados para o backend
      const payload = {
        titulo: this.titulo,
        subtitulo: this.subtitulo,
        mensagem: this.mensagem,
        setor: this.setor,
        imagem: this.imagem?.name || null,
        fundo: this.fundoSelecionado
      }

      console.log('Dados prontos para envio:', payload)
      alert('Postagem enviada com sucesso!')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.postagem-container {
  min-height: 100vh;
  background: linear-gradient(to right, #e8f5ff, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 15px;
  font-family: 'Poppins', sans-serif;
}

.postagem-card {
  background-color: white;
  max-width: 900px;
  width: 100%;
  padding: 40px;
  border-radius: 16px;
}

.titulo {
  font-weight: 600;
  color: #076c22;
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;
}

.subtitulo {
  color: #6c757d;
  font-size: 16px;
  margin-bottom: 30px;
  text-align: center;
}

.fundos-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  margin-top: 15px;
}

.fundo-thumb {
  height: 80px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: 2px solid #ccc;
  transition: transform 0.2s ease, border-color 0.3s ease;
}

.fundo-thumb:hover {
  transform: scale(1.05);
}
</style>
