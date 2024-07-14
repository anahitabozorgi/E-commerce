import '../assets/css/Home.css';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Main from '../components/Main';
import { useDispatch, useSelector } from 'react-redux';
import {userData} from '../action/UserAction';
import { RootStore } from '../Store';
import { useEffect } from 'react';

const Home: React.FC<any> = ({products, setProducts}) => {

    const dispatch = useDispatch();
    const user = useSelector((state: RootStore) => state.user);
    useEffect(()=> {
        dispatch(userData());
    }, []);

    useEffect(()=> {
        console.log("this is the user data", user)
    }, [user])

    return(
        <>

            <div className="grid-container">
                <div className="item1"><Header/></div>
                <div className="item2"><Menu/></div>
                <div className="item3">
                    <Main
                        products = {products}
                        setProduct = {setProducts}
                    />
                </div>  
                <div className='item4'>Footer</div>
            </div>

        </>
    )

}

export default Home;