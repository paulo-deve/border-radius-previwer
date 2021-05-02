
const form = {
  //seleciona os inputs e o container

  topLeft: document.querySelector('input.top-left'),
  topRight: document.querySelector('input.top-right'),
  bottomLeft: document.querySelector('input.bottom-left'),
  bottomRight: document.querySelector('input.bottom-right'),

  container: document.querySelector('.container'),

  getValues() {
    
    //seleciona os valores digitados nos inputs

    return {
      topLeft: `${form.topLeft.value}px`,
      topRight: `${form.topRight.value}px`,
      bottomLeft: `${form.bottomLeft.value}px`,
      bottomRight: `${form.bottomRight.value}px`
    }
  },

  submit(event) {
    //desativa a função de submit padrão

    event.preventDefault()
  }

  /*validateFields() {
    const { topLeft, topRight, bottomLeft, bottomRight } = form.getValues()
    if (topLeft.trim() === '' || topRight.trim() === '' || bottomLeft.trim() === '' || bottomRight.trim()) {
      throw new Error('Por favor preencha todos os campos')
    }
  }*/
}

function calc() {
 //inclui o valor dos inputs nas posições corretas para formar o border radius

  form.container.style.borderTopLeftRadius = form.topLeft.value + 'px'
  form.container.style.borderTopRightRadius = form.topRight.value + 'px'
  form.container.style.borderBottomLeftRadius = form.bottomLeft.value + 'px'
  form.container.style.borderBottomRightRadius = form.bottomRight.value + 'px'
}


function clearFields() {
    //limpa os valores preenchidos antes
    form.topLeft.value = ''
    form.topRight.value = ''
    form.bottomLeft.value = ''
    form.bottomRight.value = ''
    form.container.style.borderRadius = 0
  }



