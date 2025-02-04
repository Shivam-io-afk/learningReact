import Dynpage from './DynPage';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

function MainDynComponent() {
    const DATA = [
        { id: 1, Name: 'Jaden', phno: '136283' },
        { id: 2, Name: 'Kolen', phno: '862924' },
        { id: 3, Name: 'Polen', phno: '719245' }
    ]
    return (
        <div>
            <Router>
                {
                    DATA.map((items, keys) => {
                        return (
                            <>
                                <Link to={`/user/${items.id}/${items.Name}/${items.phno}`} key={keys}> {`link ${items.id}`} </Link>
                                <br/>
                            </>
                        )
                    })
                }
                <Routes>
                    <Route path='/user/:id' element={<Dynpage/>}/>
                </Routes>
            </Router>
        </div>
    );
}


export default MainDynComponent;