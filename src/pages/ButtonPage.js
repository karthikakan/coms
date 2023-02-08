import Button from "../components/Button";
import { FcDownload } from "react-icons/fc";

function ButtonPage(){
    function handleclick(){
        console.log(`clicked `);
    }
    return <div>
        <div>
            <Button onClick={handleclick} primary outline rounded>click</Button>
        </div>
        <div>
            <Button secondary rounded><FcDownload />save</Button>
        </div>
        <div>
            <Button danger >delete</Button>
        </div>
    </div>;
};

export default ButtonPage;