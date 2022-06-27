import Sound from './sounds.js';

import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  minutesDisplay,
  secondsDisplay,
  cardForestOn,
  cardForestOff,
  buttonForestOff,
  buttonForestOn,
  cardRainOff,
  buttonRainOff,
  cardRainOn,
  buttonRainOn,
  cardCoffeeShopOff,
  buttonCoffeeShopOff,
  cardCoffeeShopOn,
  buttonCoffeeShopOn,
  cardFirePlaceOff,
  buttonFirePlaceOff,
  cardFirePlaceOn,
  buttonFirePlaceOn,
  buttonLightMode,
  buttonDarkMode,
  buttonPlayDarkMode,
  buttonStopDarkMode,
  buttonPlusDarkMode,
  buttonMinusDarkMode,
  volumeForest,
  volumeRain,
  volumeCoffeeShop,
  volumeFirePlace
} from './elements.js'

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
const sound = Sound()

function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function addMoreMinutes() {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  updateTimerDisplay(String(minutes + 5), seconds)
}

function reduceMinutes() {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  if(minutes >= 1) {
    updateTimerDisplay(String(minutes - 5), seconds)
  }
}

function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if(minutes <= 0) {
      return
    }

    if(seconds <= 0) {
      seconds = 60

      --minutes
    }
    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function darkModeOn() {
  buttonLightMode.classList.add('hide')
  buttonDarkMode.classList.remove('hide')

  buttonPlay.classList.add('hide')
  buttonPlayDarkMode.classList.remove('hide')
  buttonStopDarkMode.classList.remove('hide')
  buttonStop.classList.add('hide')
  buttonPlusDarkMode.classList.remove('hide')
  buttonPlus.classList.add('hide')
  buttonMinusDarkMode.classList.remove('hide')
  buttonMinus.classList.add('hide')

  document.body.classList.add('darkBg')
  document.body.classList.remove('whiteBg')

}

function darkModeOff() {
  buttonDarkMode.classList.add('hide')
  buttonLightMode.classList.remove('hide')

  buttonPlay.classList.remove('hide')
  buttonPlayDarkMode.classList.add('hide')
  buttonStopDarkMode.classList.add('hide')
  buttonStop.classList.remove('hide')
  buttonPlusDarkMode.classList.add('hide')
  buttonPlus.classList.remove('hide')
  buttonMinusDarkMode.classList.add('hide')
  buttonMinus.classList.remove('hide')

  document.body.classList.add('whiteBg')
  document.body.classList.remove('darkBg')
  
  minutesTimerText.classList.remove('textWhite')
  secondsTimerText.classList.remove('textWhite')
  colonTimer.classList.remove('textWhite')
}

buttonPlay.addEventListener('click', function() {
  countdown()
  sound.pressButton()
})

buttonPlayDarkMode.addEventListener('click', function() {
  countdown()
  sound.pressButton()
})

buttonStop.addEventListener('click', function() {
  resetTimer()
  sound.pressButton()
})

buttonStopDarkMode.addEventListener('click', function() {
  resetTimer()
  sound.pressButton()
})

buttonPlus.addEventListener('click', function() {
  addMoreMinutes()
  sound.pressButton()
})

buttonPlusDarkMode.addEventListener('click', function() {
  addMoreMinutes()
  sound.pressButton()
})

buttonMinus.addEventListener('click', function() {
  reduceMinutes()
  sound.pressButton()
})

buttonMinusDarkMode.addEventListener('click', function() {
  reduceMinutes()
  sound.pressButton()
})

buttonForestOff.addEventListener('click', function() {
  buttonForestOff.classList.add('hide')
  cardForestOff.classList.add('hide')
  buttonForestOn.classList.remove('hide')
  cardForestOn.classList.remove('hide')
  sound.pressButton()
  sound.forestSound.play()
})

buttonForestOn.addEventListener('click', function() {
  buttonForestOff.classList.remove('hide')
  cardForestOff.classList.remove('hide')
  buttonForestOn.classList.add('hide')
  cardForestOn.classList.add('hide')
  sound.pressButton()
  sound.forestSound.pause()
})

volumeForest.addEventListener('change', function() {
  let soundVolume = volumeForest.value / 100;
  sound.forestSound.volume = soundVolume
})
volumeRain.addEventListener('change', function() {
  let soundVolume = volumeRain.value / 100;
  sound.rainSound.volume = soundVolume
})
volumeCoffeeShop.addEventListener('change', function() {
  let soundVolume = volumeCoffeeShop.value / 100;
  sound.coffeeShopSound.volume = soundVolume
})
volumeFirePlace.addEventListener('change', function() {
  let soundVolume = volumeFirePlace.value / 100;
  sound.firePlaceSound.volume = soundVolume
})

buttonRainOff.addEventListener('click', function() {
  buttonRainOff.classList.add('hide')
  cardRainOff.classList.add('hide')
  buttonRainOn.classList.remove('hide')
  cardRainOn.classList.remove('hide')
  sound.pressButton()
  sound.rainSound.play()
})

buttonRainOn.addEventListener('click', function() {
  buttonRainOff.classList.remove('hide')
  cardRainOff.classList.remove('hide')
  buttonRainOn.classList.add('hide')
  cardRainOn.classList.add('hide')
  sound.pressButton()
  sound.rainSound.pause()
})

buttonCoffeeShopOff.addEventListener('click', function() {
  buttonCoffeeShopOn.classList.remove('hide')
  cardCoffeeShopOn.classList.remove('hide') 
  buttonCoffeeShopOff.classList.add('hide')
  cardCoffeeShopOff.classList.add('hide')
  sound.pressButton()
  sound.coffeeShopSound.play()
})

buttonCoffeeShopOn.addEventListener('click', function() {
  buttonCoffeeShopOff.classList.remove('hide')
  cardCoffeeShopOff.classList.remove('hide')
  buttonCoffeeShopOn.classList.add('hide')
  cardCoffeeShopOn.classList.add('hide')
  sound.pressButton()
  sound.coffeeShopSound.pause()
})

buttonFirePlaceOff.addEventListener('click', function() {
  buttonFirePlaceOn.classList.remove('hide')
  cardFirePlaceOn.classList.remove('hide')
  buttonFirePlaceOff.classList.add('hide')
  cardFirePlaceOff.classList.add('hide')
  sound.pressButton()
  sound.firePlaceSound.play()
})

buttonFirePlaceOn.addEventListener('click', function() {
  buttonFirePlaceOff.classList.remove('hide')
  cardFirePlaceOff.classList.remove('hide')
  buttonFirePlaceOn.classList.add('hide')
  cardFirePlaceOn.classList.add('hide')
  sound.pressButton()
  sound.firePlaceSound.pause()
})

buttonLightMode.addEventListener('click', function() {
  darkModeOn()
  sound.pressButton()
});

buttonDarkMode.addEventListener('click', function() {
  darkModeOff()
  sound.pressButton()
});