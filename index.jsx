let arr = [3,2,1,4,15,11,5,10,13,12,10,6,9,7,6,14,8];
let i = 0;
let l = arr.length;
class SortChunks extends React.Component {
    j()
    {
        while(arr[i] <= arr[i + 1]){
            i++;
            if(i + 1 == l){
                l--;
                i = 0;
            }
            if(l - 2 == 0){
                clearInterval(interval);
                return;
            }
        }


        const c = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = c;

        this.forceUpdate();
    }
    render() {
        return [
                <div><button onClick={function(){c.j();}}>sort</button></div>,
                arr.map((el, index)=>
                    {
                        return (<div class="chunk" style={{height:`${el*25}px`, backgroundColor: index == i && `blue`}}>{index}</div>);
                    })
                
        ];
    }
}
let c = ReactDOM.render(
    <SortChunks />,
    document.getElementById("app")
)

const interval = setInterval(function(){c.j();}, 100);

