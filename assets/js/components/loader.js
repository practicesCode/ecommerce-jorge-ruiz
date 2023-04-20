function loader() {
  window.addEventListener('load', function () {
    const loader = document.querySelector('.container')
    loader.classList.add('loader--hidden')
  })
}

export default loader