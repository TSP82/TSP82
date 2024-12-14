import Index from "./_index";
import { toDoItems } from "./toDoList";

function CompletedCheck ({c} : {c: boolean}) {
    if(c)
        return <span>🥰</span>;
    return <span>🤯</span>;
    //return (
    //    {c ? '<span>&x128077;</span> : <span>&x128078;</span>}
    //);
}
 
export default function toDolist() {
        const cpTodoItems = toDoItems.filter(cpToDo =>
            cpToDo.completed == false
        );
        const listItems = toDoItems.map((item, index) =>
            <div className="m-3" key={index}>
                <a href="#" className="block max-w-sm p-6
                bg-white border border-gray-200 rounded-lg
                shadow hover:bg-gray-100 dark:bg-gray-800
                dark:border-gray-700 dark:hover:bg-gray-700">
        <b className="text-base">
            <CompletedCheck c={item.completed} />
                </b>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title+"(รหัส:"+item.id+")"}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{item.created}</p>
            </a>  
            </div>
        );

    return (
        <div className="m-3">
            <h1 className="text-xl
            font-bold">สิ่งที่ต้องทำ...</h1>
            {listItems}
        </div>
    );
}