import Resturanatcard from "./Resturanatcard";
import List from '../../Constant';
import Whatapp from './Whatapp'
let Body = () => {
    return (
        <>
            
            <div className="d-flex">
                {List.map((data, index) => {

                    return <Resturanatcard restList={data} />
                })}

                <Whatapp />
            </div>

        </>
    )
}

export default Body;