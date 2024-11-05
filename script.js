const numId = document.getElementById("id")
const advice = document.getElementById('advice')

async function randomAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    numId.innerHTML = data.slip.id
    advice.innerHTML = `"${data.slip.advice}"`
}

randomAdvice()