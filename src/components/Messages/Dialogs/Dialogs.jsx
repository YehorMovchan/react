import DialogCss from './Dialog.module.css';
import FieldCorre from './fieldCorre/FieldCorre';
import Write from './Write';

const Dialog=(props)=>{
    return(
        <div className={DialogCss.dialog}>
            <FieldCorre state={props.state} dispatch={props.dispatch}/>
            <Write dispatch={props.dispatch}/>
        </div>
    )
}

export default Dialog;  