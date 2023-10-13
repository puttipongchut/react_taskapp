import "./Item.css";
import { BsTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
export default function Item(props){
    const {data,deleteTask,editTask} = props;
    return(
        <div className="list-item">
            <p className="title">{data.title}</p>
            <div className="button-container">
                <BsTrashFill className="btn" onClick={()=>deleteTask(data.id)}/>
                <AiFillEdit className="btn" onClick={()=>editTask(data.id)}/>
            </div>
        </div>

    );
}