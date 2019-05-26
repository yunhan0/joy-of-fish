let debates = ['庄子曰：“子非我，安知我不知鱼之乐？”']
// Funny gif address
let imgSatima = 'https://media1.tenor.com/images/bc7f6147063085d89b403cb96de6f883/tenor.gif?itemid=4973579'
let imgSatima2 = 'https://66.media.tumblr.com/8246a16486dea8043b7de57f9d23858d/tumblr_orvm04ndtk1r9i2iuo1_r6_540.gif'
let imgSatima3 = 'https://media2.giphy.com/media/YJDmc88k7ttao/giphy.gif'

function init() {
  debates.forEach(debate => {
    renderSentence(debate)
  })
}

function nextDebate() {
  if (debates.length === 0) {
    return
  } else if (debates.length === 5) {
    renderImg(imgSatima)
  } else if (debates.length === 10) {
    renderImg(imgSatima2)
  } else if (debates.length === 15) {
    renderImg(imgSatima3)
  } else if (debates.length === 20) {
    alert("泥垢！你赢了。")
    return
  }

  let prev = debates[debates.length - 1]
  let person = prev.substring(0, 2)
  let nextPerson = ''

  if (person === '惠子') {
    nextPerson = '庄子'
  } else if (person === '庄子') {
    nextPerson = '惠子'
  }

  let next = prev.replace(person, nextPerson)

  let pivot = prev.indexOf("鱼之乐")
  if (-1 === pivot) {
    next = "找不到鱼之乐"
  } else {
    let factor = prev.substr(pivot-3, 3)
    if (factor === "我不知") {
      next = next.slice(0, pivot) + "子不知" + next.slice(pivot)
    } else if (factor === "子不知") {
      next = next.slice(0, pivot) + "我不知" + next.slice(pivot)
    }
  }

  debates.push(next)
  // Render next sentence in html
  renderSentence(next)
  // Scroll to the bottom of the page
  window.scrollTo(0,document.body.scrollHeight)
}

function renderSentence(sentence) {
  let node = document.createElement('p')
  let textnode = document.createTextNode(sentence)
  node.appendChild(textnode)
  document.getElementById('debate').appendChild(node)
}

function renderImg(address) {
  let img = '<img src="' + address + '" />'
  document.getElementById('funny-img').innerHTML = img
}

init()
