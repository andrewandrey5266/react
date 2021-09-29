
let arr = [3,2,1,4,15,11,5,10,13,12,10,6,9,7,6,14,8];
let i = 0;
let nexti = 1;
let ipos = 0;

class SortChunks extends React.Component {
  j() {
    while (!(arr[i] < arr[nexti] && i > nexti) && !(arr[i] > arr[nexti] && i < nexti)) {
      if (nexti == arr.length - 1) {
        if (ipos == arr.length - 1) {
          console.log("sort ended");
          clearInterval(interval);
          return;
        }

        ipos++;
        i = ipos;
        nexti = 0; //hardcode
      }

      nexti++;
    }

    const c = arr[i];
    arr[i] = arr[nexti];
    arr[nexti] = c;
    i = nexti;
    this.forceUpdate();
  }

  render() {
    return arr.map((el, i) => {
      return /*#__PURE__*/React.createElement("div", {
        class: "chunk",
        style: {
          height: `${el * 50}px`
        }
      }, i);
    });
  }

}

let c = ReactDOM.render( /*#__PURE__*/React.createElement(SortChunks, null), document.getElementById("app"));
const interval = setInterval(function () {
  c.j();
}, 100);
