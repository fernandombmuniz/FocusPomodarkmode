export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const forestSound = new Audio("https://github.com/fmontarroyos/audiosamples/blob/main/Floresta.wav?raw=true")
  const rainSound = new Audio("https://github.com/fmontarroyos/audiosamples/blob/main/Chuva.wav?raw=true")
  const coffeeShopSound = new Audio("https://github.com/fmontarroyos/audiosamples/blob/main/Cafeteria.wav?raw=true") 
  const firePlaceSound = new Audio("https://github.com/fmontarroyos/audiosamples/blob/main/Lareira.wav?raw=true")
  
  function pressButton() {
    buttonPressAudio.play()
  }

  return {
    pressButton,
    forestSound,
    kitchenTimer,
    rainSound,
    coffeeShopSound,
    firePlaceSound
  }
}