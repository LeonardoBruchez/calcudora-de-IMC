const weight = document.getElementById("peso")
const height = document.getElementById("altura")
const res = document.getElementById("resultado")
const submit = document.getElementById("send")

// Formata o peso para dentro do input
weight.addEventListener("input",function(){
  this.value = this.value.replace(/[^0-9]/g,'')

  const splitWeight = this.value.split('.')
  if(splitWeight.length > 2){
    this.value = splitWeight[0] + '.' + splitWeight.slice(1).join('')
  }
})

// Emite um alerta caso o peso esteja fora dos padrões
weight.addEventListener('blur',function(){
  if(this.value.length > 3 || this.value >= 600){
    alert("Digite um peso válido!")
  }else{
    console.log("Peso digitado:",this.value)
  }
  return weight.value
  console.log(`peso é ${weight.value}`)
})


// Formata a altura dentro do input
height.addEventListener("input",function(){
  this.value = this.value.replace(/[^0-9.]/g,'')

  const splitHeight = this.value.split('.')
  if(splitHeight.length > 3){
    this.value = splitHeight[0] + '.' + splitHeight.slice(1).join('')
  }
})


// Formata a altura no resultado.
function heightAdjust(valueHeight){
  valueHeight = valueHeight.replace(/[^0-9]/g, '');
  if((valueHeight.startsWith("1") || valueHeight.startsWith("2") && valueHeight.length>= 3)){
    const formatHeight = valueHeight.charAt(0)
    const noFormatHeight = valueHeight.slice(1)
    return formatHeight + "." + noFormatHeight
  }

  return valueHeight

}

// Atualiza o valor da altura e coloca um alerta 
height.addEventListener('blur',function(){
  const formatedHeight = heightAdjust(height.value)
  height.value = formatedHeight
  if(this.value.length >4 || this.value.length < 2){
    alert("Digite uma altura válida!")
    return
  }
  console.log("Altura digitada:",this.value)
  this
})





submit.addEventListener("click",function (){
  event.preventDefault()
  res.innerHTML = `SEU PESO É ${weight.value}`
  res.innerHTML = `Sua altura é ${height.value}`
})