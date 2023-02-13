import Resturanatcard from "./Resturanatcard";
import List from '../../Constant';

let Body = () => {
    return (
        <>
            
            <div className="d-flex">
                {List.map((data, index) => {

                    return <Resturanatcard restList={data} />
                })}

            </div>

        </>
    )
}

export default Body;