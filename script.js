let moved = false;

window.addEventListener('DOMContentLoaded', function () {
  document.getElementById('wrapper').addEventListener('click', async (event) => {
    const el = event.target;
    const squareColor = el.dataset.square;
    switch (squareColor) {
      case 'blue':
        if (moved) {
          el.classList.replace('p1_activ', 'p1_inactiv')
        } else {
          el.classList.replace('p1_inactiv', 'p1_activ')
        }
        moved = !moved
        break

      case 'darkblue':
        el.classList.replace('p2_inactiv', 'p2_activ')
        await translate1(el, 'p2_activ', 'p2_inactiv');
        break

      case 'purple':
        el.classList.replace('p3_top_left', 'p3_bottom_left');
        await translate1(el, 'p3_bottom_left', 'p3_bottom_right');
        await translate1(el,  'p3_bottom_right', 'p3_top_right');
        await translate1(el,   'p3_top_right', 'p3_top_left');
        break
    }
  })
});

const translate1 = (el, style1, style2)=> {
  return new Promise((resolve)=>setTimeout(function () {
    resolve(el.classList.replace(style1, style2));
  }, 2000));
}
