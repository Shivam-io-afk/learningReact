import { useParams, useLocation, useMatch, useSearchParams } from "react-router-dom";

function Page (){
    const {id,name,phno} = useParams();
    var location = useLocation();
    return (
        <div>
            <h1>Hello - {`${id}, ${name}, ${phno}`}</h1>
            <p>{location.pathname}</p>
            {/* <p>{location.key}</p> */}

            <Fun1/>
            <DynamicSearch/>
        </div>
    );
}


export default Page;




export function Fun1(){
    const isMatch = useMatch('/user/2/Kolen/862924');
    return (
        <>
            {
                isMatch ? <p>Matched</p> : <p>Not Match</p>
            }
        </>
    );
}



export function DynamicSearch() {
    const [searchParams, setSearchParams] = useSearchParams();

    const updateParam = (key, value) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(key, value);
        setSearchParams(newParams);
    };

    const removeParam = (key) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete(key);
        setSearchParams(newParams);
    };

    return (
        <div>
            <h1>Dynamic Search</h1>
            <p>Current Params: {searchParams.toString()}</p>

            <button onClick={() => updateParam("page", "1")}>Set Page to 1</button>
            <button onClick={() => updateParam("theme", "dark")}>Set Theme to Dark</button>
            <button onClick={() => removeParam("theme")}>Remove Theme</button>
        </div>
    );
}

