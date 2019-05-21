let debates = ['庄子曰：“子非我，安知我不知鱼之乐？”']

function init() {
  debates.forEach(debate => {
    renderSentence(debate)
  })
}

function nextDebate() {
  if (debates.length === 20) {
    alert("泥垢！你赢了。")
    return
  }

  if (debates.length === 0) {
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
}

function renderSentence(sentence) {
  let node = document.createElement('p')
  let textnode = document.createTextNode(sentence)
  node.appendChild(textnode)
  document.getElementById('debate').appendChild(node)
}

init()
