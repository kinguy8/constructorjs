export function row(content, styles = "") {
  return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
  if (typeof styles === 'string') return styles
  const array = Object.keys(styles).map(key => {
    return `${key}:${styles[key]}`
  })
  return array.join(';')
}


export function block(type) {
  return `
      <form name="${type}" id="${type}">
        <h5>${type}</h5>
        <div class="form-group">
          <input class="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div class="form-group">
          <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
      </form>
      <hr />
    `
}

export function navbarMenu(type) {
  return `
      <form name="${type}" id="${type}">
        <h5>Меню сайта</h5>
        <div class="form-group">
          <input class="form-control form-control-sm" name="value" placeholder="Напишите список через пробел">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
      </form>
      <hr />
    `
}

export function navbar(content) {
  return `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand mb-0 h1" href="#">JS Constructor</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      ${content}
      </div>
    </div>
  </nav>
  `
}

export function menu(type, link){
  return `
  <a class="nav-link active" href="${link}">${type}<span class="sr-only">(current)</span></a>
  `
}