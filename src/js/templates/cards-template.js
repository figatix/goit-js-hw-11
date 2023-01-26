

export default function createCards(arrOfCards) {

  const cardsByString = arrOfCards.map(el => {
    return `
    <div class="photo-card">
      <img src="${el.webformatURL}" alt="${el.tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>${el.likes} Likes</b>
        </p>
        <p class="info-item">
          <b>${el.views} Views</b>
        </p>
        <p class="info-item">
          <b>${el.comments} Comments</b>
        </p>
        <p class="info-item">
          <b>${el.downloads} Downloads</b>
        </p>
      </div>
    </div>`
  }).join('')

  return cardsByString
}

