import Lifting from './StateUp';

export function Parent(){
    return (
        <div>
            <h1>Parent</h1>
            <button>Click To get Data From Child Component</button>
            <Lifting />
        </div>
    )
}

