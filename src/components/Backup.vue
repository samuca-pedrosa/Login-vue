<template>
  <div class="container my-5">
    <div class="text-center mb-4">
      <h3>Criar Postagem</h3>
      <p v-if="isAdmin">Você está no modo administrador</p>
      <p v-else>Crie sua mensagem para exibir no telão do campus</p>
      <button class="btn btn-sm btn-secondary mt-2" @click="alternarTipo">Alternar para {{ isAdmin ? 'Aluno' : 'Admin' }}</button>
    </div>

    <!-- Preview -->
    <div class="preview-area mb-4" :style="{ backgroundImage: 'url(' + selectedBackground + ')' }">
      <div class="preview-text">
        <h4 v-if="isAdmin && titulo">{{ titulo }}</h4>
        <h5 v-if="isAdmin && subtitulo">{{ subtitulo }}</h5>
        <p>{{ mensagem }}</p>
        <img v-if="imagemPreview && isAdmin" :src="imagemPreview" alt="Imagem" style="max-width: 200px; margin-top: 10px;" />
      </div>
    </div>

    <form @submit.prevent="enviarPostagem">
      <div class="form-group">
        <label>Mensagem:</label>
        <textarea class="form-control" v-model="mensagem" rows="3" placeholder="Digite seu texto..."></textarea>
      </div>

      <div v-if="isAdmin">
        <div class="form-group">
          <label>Título:</label>
          <input type="text" class="form-control" v-model="titulo" placeholder="Ex: Aviso urgente" />
        </div>

        <div class="form-group">
          <label>Subtítulo:</label>
          <input type="text" class="form-control" v-model="subtitulo" placeholder="Ex: Biblioteca - 12/08" />
        </div>

        <div class="form-group">
          <label>Setor:</label>
          <select class="form-control" v-model="setor">
            <option disabled value="">Escolha um setor</option>
            <option>Biblioteca</option>
            <option>Pátio Central</option>
            <option>Refeitório</option>
            <option>Entrada Principal</option>
          </select>
        </div>

        <div class="form-group">
          <label>Imagem (opcional):</label>
          <input type="file" @change="carregarImagem" class="form-control" />
        </div>
      </div>

      <div class="row my-4">
        <div
          v-for="(url, index) in fundos"
          :key="index"
          class="col-6 col-md-3 mb-3"
          @click="selectedBackground = url"
        >
          <img :src="url" class="img-fluid rounded shadow-sm fundo-select" :class="{ selecionado: selectedBackground === url }" />
        </div>
      </div>

      <div class="text-center">
        <button class="btn btn-success">Enviar para o telão</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Postagem',
  data() {
    return {
      tipoUsuario: 'aluno',
      mensagem: '',
      titulo: '',
      subtitulo: '',
      setor: '',
      imagem: null,
      imagemPreview: null,
      selectedBackground: '',
      fundos: [
        'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6',
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
        'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d',
        'https://images.unsplash.com/photo-1503264116251-35a269479413',
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
        'https://images.unsplash.com/photo-1495567720989-cebdbdd97913',
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
        'https://images.unsplash.com/photo-1483794344563-d27a8d38bd1d',
        'https://images.unsplash.com/photo-1504457046788-51bd36b3fcba',
        'https://images.unsplash.com/photo-1505489304217-528b9349f6ed',
        'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1',
        'https://images.unsplash.com/photo-1535905748047-14b90aaa1373',
        'https://images.unsplash.com/photo-1604079628049-c0d86fc92e2c',
        'https://images.unsplash.com/photo-1549887534-298b5fd2d7d6',
        'https://images.unsplash.com/photo-1582719478144-b5f71b679fb1',
        'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        'https://images.unsplash.com/photo-1454789548928-9efd52dc4031',
        'https://images.unsplash.com/photo-1549221984-52b6f220fa2d',
        'https://images.unsplash.com/photo-1514986888952-8cd320577b7b',
        'https://images.unsplash.com/photo-1517256673644-36ad9ffcbf63'
      ].map(url => `${url}?auto=format&fit=crop&w=400&q=60`)
    }
  },
  computed: {
    isAdmin() {
      return this.tipoUsuario === 'admin'
    }
  },
  methods: {
    carregarImagem(event) {
      const file = event.target.files[0]
      if (file) {
        this.imagem = file
        this.imagemPreview = URL.createObjectURL(file)
      }
    },
    enviarPostagem() {
      alert(`Postagem enviada por: ${this.tipoUsuario}`)
    },
    alternarTipo() {
      this.tipoUsuario = this.tipoUsuario === 'aluno' ? 'admin' : 'aluno'
    }
  },
  mounted() {
    this.selectedBackground = this.fundos[0]
  }
}
</script>

<style scoped>
.preview-area {
  min-height: 250px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  color: white;
  text-align: center;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  margin-bottom: 20px;
}
.fundo-select {
  cursor: pointer;
  transition: transform 0.2s ease;
  border: 2px solid transparent;
}
.fundo-select:hover {
  transform: scale(1.03);
}
.fundo-select.selecionado {
  border-color: #28a745;
}
</style>
